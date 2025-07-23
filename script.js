// script.js
// Genshin Shibari Roulette - Main Logic

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // SECTION: DOM Element Retrieval
    // =====================================================================
    const getEl = (id) => document.getElementById(id);
    const queryEl = (sel) => document.querySelector(sel);
    const queryAllEl = (sel) => document.querySelectorAll(sel);

    const screens = queryAllEl('.screen');
    const backToMainBtn = getEl('back-to-main-btn');
    
    // --- Main Menu ---
    const menuButtons = queryAllEl('.menu-btn');
    const aboutBtn = getEl('about-btn');

    // --- Settings ---
    const playerCountSelect = getEl('player-count');
    const shibariCountSelect = getEl('shibari-count');
    const startBatchBtn = getEl('start-batch-btn');

    // --- Select Shibari ---
    const selectableShibariList = getEl('selectable-shibari-list');

    // --- Roulette ---
    const rouletteTitle = getEl('roulette-title');
    const rouletteCanvas = getEl('roulette-canvas');
    const spinBtn = getEl('spin-btn');
    const stopBtn = getEl('stop-btn');

    // --- Result Screen ---
    const resultContent = getEl('result-content');
    const copyResultBtn = getEl('copy-result-btn');

    // --- Modals (Popups & About) ---
    const popupOverlay = getEl('popup-overlay');
    const popupTitle = getEl('popup-title');
    const popupResult = getEl('popup-result');
    const popupNextBtn = getEl('popup-next-btn');
    const popupRejectBtn = getEl('popup-reject-btn');
    const popupCloseBtn = getEl('popup-close-btn');
    
    const aboutModal = getEl('about-modal');
    const closeAboutBtn = getEl('close-about-btn');


    // =====================================================================
    // SECTION: Roulette Class
    // (Originally roulette.js, integrated for simplicity)
    // =====================================================================
    class Roulette {
        constructor(canvas, items) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.items = items;
            this.itemCount = items.length;
            this.arc = (2 * Math.PI) / this.itemCount;
            this.currentAngle = 0;
            this.spinVelocity = 0;
            this.isSpinning = false;
            this.isStopping = false;
            this.animationFrame = null;
            this.colors = ["#4299e1", "#3182ce", "#2b6cb0", "#2c5282"];
            this.onSpinEnd = () => {};
        }

        drawSector(index, startAngle, arc) {
            const { ctx, canvas } = this;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = centerX;
            const text = this.items[index];
            const color = this.colors[index % this.colors.length];

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + arc, false);
            ctx.lineTo(centerX, centerY);
            ctx.fill();

            ctx.save();
            ctx.fillStyle = "white";
            const fontSize = Math.max(10, Math.min(16, radius / 15, 200 / text.length));
            ctx.font = `bold ${fontSize}px 'Noto Sans JP', sans-serif`;
            ctx.translate(
                centerX + Math.cos(startAngle + arc / 2) * (radius * 0.6),
                centerY + Math.sin(startAngle + arc / 2) * (radius * 0.6)
            );
            ctx.rotate(startAngle + arc / 2 + Math.PI / 2);
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            ctx.restore();
        }

        draw() {
            const { ctx, canvas } = this;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < this.itemCount; i++) {
                const angle = this.currentAngle + i * this.arc;
                this.drawSector(i, angle, this.arc);
            }
        }

        animate = () => {
            if (!this.isSpinning) return;

            if (this.isStopping) {
                this.spinVelocity *= 0.96; // Deceleration
                if (this.spinVelocity < 0.001) {
                    this.isSpinning = false;
                    this.isStopping = false;
                    this.spinVelocity = 0;
                    cancelAnimationFrame(this.animationFrame);
                    this.onSpinEnd();
                    return;
                }
            } else if (this.spinVelocity < 0.2) {
                this.spinVelocity += 0.005; // Acceleration
            }
            
            this.currentAngle += this.spinVelocity;
            this.currentAngle %= (2 * Math.PI);
            
            this.draw();
            this.animationFrame = requestAnimationFrame(this.animate);
        }

        spin() {
            if (this.isSpinning) return;
            this.isSpinning = true;
            this.isStopping = false;
            this.spinVelocity = 0.01;
            return new Promise(resolve => {
                this.onSpinEnd = resolve;
                this.animate();
            });
        }

        stop() {
            if (!this.isSpinning || this.isStopping) return;
            this.isStopping = true;
        }

        getResult() {
            const totalAngle = 2 * Math.PI;
            const arrowPoint = (totalAngle * 3) / 4; // Right side arrow
            let landingAngle = (totalAngle - (this.currentAngle % totalAngle) + arrowPoint) % totalAngle;
            const index = Math.floor(landingAngle / this.arc);
            return this.items[index];
        }
    }


    // =====================================================================
    // SECTION: Game State & Logic Manager
    // =====================================================================
    
    const GameManager = {
        state: {},
        
        resetState() {
            this.state = {
                mode: null, // 'boss', 'shibari', 'batch', 'select'
                playerCount: 1,
                shibariCount: 1,
                
                bossResult: null,
                shibariResults: [], // { shibari: obj, result: string, forPlayer: int }
                
                // For complex flows
                pendingQueue: [],
                tempItemList: [],
                currentStep: null,
                currentPlayer: 1,
                
                // For character weapon roulette
                selectedChar: null,
            };
        },

        // --- Character Filtering ---
        getAvailableCharacters(constraints) {
            let characters = [...GENSHIN_DATA.characters];
            
            constraints.forEach(c => {
                const { shibari, result } = c;
                switch(shibari.id) {
                    case 3: // 恒常☆５縛り
                        characters = characters.filter(char => GENSHIN_DATA.character_lists.kouchou_g5.includes(char.name));
                        break;
                    case 4: // 所持率100％縛り
                        characters = characters.filter(char => GENSHIN_DATA.character_lists.shoyuritsu_100.includes(char.name));
                        break;
                    case 5: // 国縛り
                        characters = characters.filter(char => char.nation === result);
                        break;
                    case 6: // 初期キャラのみ
                        characters = characters.filter(char => GENSHIN_DATA.character_lists.initial.includes(char.name));
                        break;
                    case 11: // 武器種縛り
                        characters = characters.filter(char => char.weapon_type === result);
                        break;
                    case 15: // 旅人縛り
                        characters = characters.filter(char => char.name === '旅人');
                        break;
                    case 16: // モノ元素縛り
                        characters = characters.filter(char => char.element === result);
                        break;
                    case 17: // 各1.1縛り
                        characters = characters.filter(char => char.version === result);
                        break;
                    case 18: // 誕生月
                        characters = characters.filter(char => char.birthday === result);
                        break;
                    case 19: // アルファベット縛り
                        characters = characters.filter(char => char.alphabet === result);
                        break;
                    case 1: // ☆4キャラ武器 (武器は別で、キャラは☆4)
                        characters = characters.filter(char => char.rarity === 4);
                        break;
                }
            });
            return characters;
        },

        // --- Main Execution Flow ---
        async run() {
            if (this.state.pendingQueue.length === 0) {
                this.finalize();
                return;
            }

            this.currentStep = this.state.pendingQueue.shift();
            const { type, data, title } = this.currentStep;

            if (type === 'reroll_shibari') {
                await this.handleShibariReroll(data.shibariToReroll, data.player);
                return;
            }

            this.tempItemList = [...data];
            
            const result = await App.runRoulette(title, this.tempItemList);
            this.handleResult(result);
        },
        
        async handleResult(result) {
            const { type, shibari, onReject } = this.currentStep;
            
            switch(type) {
                case 'boss':
                    this.state.bossResult = result;
                    App.showPopup('ボスの抽選結果', result, { close: true });
                    popupCloseBtn.onclick = () => { App.hidePopup(); this.run(); };
                    break;
                
                case 'shibari': {
                    const selectedShibari = GENSHIN_DATA.shibari_list.find(s => s.name === result);
                    this.currentStep.shibari = selectedShibari; // Store for later reference

                    const player = this.currentStep.player;
                    let existingConstraints = this.state.shibariResults;
                    if (player) {
                        existingConstraints = existingConstraints.filter(r => r.forPlayer === player);
                    }
                    const futureConstraints = [...existingConstraints, { shibari: selectedShibari, result: 'any' }];

                    if(this.getAvailableCharacters(futureConstraints).length === 0) {
                        App.showPopup("矛盾発生！", `「${result}」を追加すると選択可能なキャラが0人になるため、再抽選します。`, { close: true });
                        popupCloseBtn.onclick = () => { App.hidePopup(); this.rerunCurrentStep(); };
                        return;
                    }

                    if(selectedShibari.needs_sub_roulette) {
                        App.showPopup("縛り決定", result, { next: true, reject: onReject });
                        popupNextBtn.onclick = () => {
                            App.hidePopup();
                            this.addNextStep(selectedShibari, player);
                            this.run();
                        };
                    } else {
                        this.state.shibariResults.push({ shibari: selectedShibari, result: null, forPlayer: player || 0 });
                        App.showPopup("縛り決定", result, { close: true });
                        popupCloseBtn.onclick = () => { App.hidePopup(); this.run(); };
                    }
                    break;
                }

                case 'sub_roulette': {
                    const { shibari, player } = this.currentStep;
                    
                    // For "Character-Weapon", this is step 1
                    if (shibari.id === 12) {
                        this.state.selectedChar = GENSHIN_DATA.characters.find(c => c.name === result);
                        this.state.shibariResults.push({ shibari: { name: 'キャラ選択' }, result, forPlayer: player });
                    } else {
                        this.state.shibariResults.push({ shibari, result, forPlayer: player });
                    }
                    
                    App.showPopup(shibari.name, result, { next: true, reject: onReject });
                    popupNextBtn.onclick = () => { 
                        App.hidePopup();
                        // If it was char-weapon, add the weapon step
                        if (shibari.id === 12) {
                            this.addWeaponStepForChar(this.state.selectedChar, player);
                        }
                        this.run();
                    };
                    popupRejectBtn.onclick = () => { App.hidePopup(); this.rerunCurrentStep(result); };
                    break;
                }

                case 'weapon_for_char': {
                    this.state.shibariResults.push({ shibari: { name: '武器選択' }, result, forPlayer: this.currentStep.player });
                    App.showPopup("武器決定", result, { next: false, reject: onReject, close: true });
                    popupCloseBtn.onclick = () => { App.hidePopup(); this.run(); };
                    popupRejectBtn.onclick = () => { App.hidePopup(); this.rerunCurrentStep(result); };
                    break;
                }
            }
        },

        rerunCurrentStep(rejectedItem = null) {
            if (rejectedItem) {
                const index = this.tempItemList.indexOf(rejectedItem);
                if (index > -1) this.tempItemList.splice(index, 1);
            }
            this.state.pendingQueue.unshift({ ...this.currentStep, data: this.tempItemList });
            this.run();
        },

        async handleShibariReroll(shibariToReroll, player) {
            const index = this.state.shibariResults.findIndex(r => r.shibari.id === shibariToReroll.id && r.forPlayer === player);
            if (index > -1) this.state.shibariResults.splice(index, 1);
            
            let shibariList = GENSHIN_DATA.shibari_list.map(s => s.name)
                .filter(name => !this.state.shibariResults.some(r => r.shibari.name === name));
            
            this.currentStep = { type: 'shibari', data: shibariList, title: `縛り再抽選 (Player ${player})`, player: player };
            this.tempItemList = [...shibariList];
            
            const result = await App.runRoulette(this.currentStep.title, this.tempItemList);
            this.handleResult(result);
        },

        addNextStep(shibari, player) {
            let nextStep;
            switch(shibari.id) {
                case 10: // キャラルーレット
                case 12: { // キャラ武器ルーレット
                    let constraints = this.state.shibariResults;
                    if (player) {
                        constraints = constraints.filter(r => r.forPlayer === 0 || r.forPlayer === player);
                    }
                    const charList = this.getAvailableCharacters(constraints).map(c => c.name);
                    nextStep = { type: 'sub_roulette', data: charList, title: `キャラルーレット (Player ${player})`, shibari, player, onReject: true };
                    break;
                }
                default: {
                    const subItems = GENSHIN_DATA.sub_roulette_items[shibari.sub_key];
                    nextStep = { type: 'sub_roulette', data: subItems, title: `${shibari.name} (Player ${player})`, shibari, player, onReject: false };
                }
            }
            this.state.pendingQueue.unshift(nextStep);
        },

        addWeaponStepForChar(char, player) {
            if (!char) return;
            let weaponList = [...GENSHIN_DATA.weapons[char.weapon_type]];
            // 恒常☆5縛りなら武器も
            if (this.state.shibariResults.some(r => r.shibari.id === 3)) {
                weaponList = weaponList.filter(w => GENSHIN_DATA.kouchou_g5_weapons.includes(w));
            }
            // ☆4キャラ武器縛りなら武器も☆4以下 (ここでは簡易的に恒常☆5武器を除外)
            if (this.state.shibariResults.some(r => r.shibari.id === 1)) {
                 weaponList = weaponList.filter(w => !GENSHIN_DATA.kouchou_g5_weapons.includes(w));
            }

            const nextStep = { type: 'weapon_for_char', data: weaponList, title: `${char.name}の武器 (${char.weapon_type})`, player, onReject: true };
            this.state.pendingQueue.unshift(nextStep);
        },
        
        finalize() {
            let resultText = "【抽選結果】\n\n";
            resultText += `■ ボス: ${this.state.bossResult || 'なし'}\n\n`;

            const commonShibari = this.state.shibariResults.filter(r => r.forPlayer === 0);
            if(commonShibari.length > 0) {
                resultText += "■ 全体共通の縛り\n";
                commonShibari.forEach(r => {
                    resultText += `- ${r.shibari.name}${r.result ? `: ${r.result}` : ''}\n`;
                });
                resultText += "\n";
            }

            for (let i = 1; i <= this.state.playerCount; i++) {
                const playerShibari = this.state.shibariResults.filter(r => r.forPlayer === i);
                if (playerShibari.length > 0) {
                    resultText += `■ プレイヤー${i}の縛り\n`;
                    let grouped = {};
                    playerShibari.forEach(r => {
                        if (r.shibari.name === 'キャラ選択' || r.shibari.name === '武器選択') {
                            grouped['キャラ武器'] = grouped['キャラ武器'] || [];
                            grouped['キャラ武器'].push(r.result);
                        } else {
                            resultText += `- ${r.shibari.name}: ${r.result}\n`;
                        }
                    });
                    if (grouped['キャラ武器']) {
                        resultText += `- キャラ: ${grouped['キャラ武器'][0]}\n`;
                        if (grouped['キャラ武器'][1]) {
                           resultText += `- 武器: ${grouped['キャラ武器'][1]}\n`;
                        }
                    }
                    resultText += "\n";
                }
            }
            
            resultContent.innerText = resultText;
            showScreen('result-screen');
        },
    };

    // =====================================================================
    // SECTION: App Main Controller
    // =====================================================================
    const App = {
        currentRoulette: null,

        init() {
            this.setupEventListeners();
            this.populateSelectShibari();
            showScreen('main-menu');
        },

        setupEventListeners() {
            backToMainBtn.addEventListener('click', () => this.goHome());
            aboutBtn.addEventListener('click', () => this.showModal(aboutModal));
            closeAboutBtn.addEventListener('click', () => this.hideModal(aboutModal));
            
            menuButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.dataset.target;
                    GameManager.resetState();
                    
                    if (target === 'boss-roulette-screen') {
                        GameManager.state.mode = 'boss';
                        GameManager.state.pendingQueue.push({ type: 'boss', data: GENSHIN_DATA.bosses, title: 'ボスルーレット' });
                        GameManager.run();
                    } else if (target === 'shibari-roulette-screen') {
                        GameManager.state.mode = 'shibari';
                        const shibariList = GENSHIN_DATA.shibari_list.map(s => s.name);
                        GameManager.state.pendingQueue.push({ type: 'shibari', data: shibariList, title: '縛りルーレット' });
                        GameManager.run();
                    } else {
                        showScreen(target);
                    }
                });
            });

            startBatchBtn.addEventListener('click', () => this.startBatchMode());
            copyResultBtn.addEventListener('click', () => this.copyResult());
        },
        
        goHome() {
            if (this.currentRoulette) {
                this.currentRoulette.isSpinning = false;
                cancelAnimationFrame(this.currentRoulette.animationFrame);
            }
            GameManager.resetState();
            showScreen('main-menu');
        },
        
        populateSelectShibari() {
            const shibariWithOptions = GENSHIN_DATA.shibari_list.filter(s => s.needs_sub_roulette);
            selectableShibariList.innerHTML = '';
            shibariWithOptions.forEach(shibari => {
                const button = document.createElement('button');
                button.className = 'menu-btn';
                button.textContent = shibari.name;
                button.onclick = () => {
                    GameManager.resetState();
                    GameManager.state.mode = 'select';
                    GameManager.state.playerCount = 1;
                    GameManager.addNextStep(shibari, 1);
                    GameManager.run();
                };
                selectableShibariList.appendChild(button);
            });
        },
        
        startBatchMode() {
            GameManager.resetState();
            GameManager.state.mode = 'batch';
            GameManager.state.playerCount = parseInt(playerCountSelect.value);
            GameManager.state.shibariCount = parseInt(shibariCountSelect.value);

            // 1. Boss
            GameManager.state.pendingQueue.push({ type: 'boss', data: GENSHIN_DATA.bosses, title: 'ボスルーレット' });
            
            // 2. Shibari
            let shibariPool = [...GENSHIN_DATA.shibari_list];
            for (let i = 0; i < GameManager.state.shibariCount; i++) {
                const shibariNames = shibariPool.map(s => s.name);
                GameManager.state.pendingQueue.push({
                    type: 'shibari_for_batch',
                    data: shibariNames,
                    title: `縛り選択 (${i + 1}/${GameManager.state.shibariCount})`,
                    onSelect: (selectedShibari) => {
                        // Remove selected from pool to avoid duplicates
                        shibariPool = shibariPool.filter(s => s.id !== selectedShibari.id);

                        if (selectedShibari.type === 'common') {
                            if(selectedShibari.needs_sub_roulette) {
                                this.addNextStep(selectedShibari, 0); // 0 for common player
                            } else {
                                GameManager.state.shibariResults.push({ shibari: selectedShibari, result: null, forPlayer: 0 });
                            }
                        } else { // 'player' type
                            for (let p = 1; p <= GameManager.state.playerCount; p++) {
                                GameManager.addNextStep(selectedShibari, p);
                            }
                        }
                    }
                });
            }
            
            // Re-wrap queue for batch-specific handling
            this.runBatchQueue();
        },
        
        async runBatchQueue() {
            if (GameManager.state.pendingQueue.length === 0) {
                GameManager.finalize();
                return;
            }

            GameManager.currentStep = GameManager.state.pendingQueue.shift();
            const { type, data, title, onSelect } = GameManager.currentStep;

            if (type === 'shibari_for_batch') {
                GameManager.tempItemList = [...data];
                const result = await this.runRoulette(title, GameManager.tempItemList);
                const selectedShibari = GENSHIN_DATA.shibari_list.find(s => s.name === result);
                
                // Contradiction check
                const tempConstraints = [...GameManager.state.shibariResults, {shibari: selectedShibari, result: 'any'}];
                if(GameManager.getAvailableCharacters(tempConstraints).length === 0){
                    this.showPopup("矛盾発生！", `「${result}」を追加すると選択可能なキャラが0人になるため、この縛りを再抽選します。`, { close: true });
                    popupCloseBtn.onclick = () => {
                        this.hidePopup();
                        GameManager.rerunCurrentStep(result);
                        this.runBatchQueue();
                    };
                    return;
                }

                onSelect(selectedShibari);
                this.runBatchQueue();

            } else {
                // Regular steps (boss, sub-roulette)
                GameManager.state.pendingQueue.unshift(GameManager.currentStep);
                GameManager.run().then(() => this.runBatchQueue());
            }
        },

        async runRoulette(title, items) {
            rouletteTitle.textContent = title;
            this.currentRoulette = new Roulette(rouletteCanvas, items);
            this.currentRoulette.draw();

            spinBtn.disabled = false;
            stopBtn.disabled = true;
            showScreen('roulette-screen');

            return new Promise(resolve => {
                spinBtn.onclick = () => {
                    spinBtn.disabled = true;
                    stopBtn.disabled = false;
                    this.currentRoulette.spin();
                };
                stopBtn.onclick = () => {
                    stopBtn.disabled = true;
                    this.currentRoulette.stop();
                    this.currentRoulette.onSpinEnd = () => {
                        resolve(this.currentRoulette.getResult());
                    };
                };
            });
        },
        
        showPopup(title, result, buttons = {}) {
            popupTitle.textContent = title;
            popupResult.textContent = result;
            popupNextBtn.classList.toggle('hidden', !buttons.next);
            popupRejectBtn.classList.toggle('hidden', !buttons.reject);
            popupCloseBtn.classList.toggle('hidden', !buttons.close);
            this.showModal(popupOverlay);
        },

        copyResult() {
            navigator.clipboard.writeText(resultContent.innerText).then(() => {
                alert("結果をクリップボードにコピーしました！");
            }).catch(err => {
                console.error('コピーに失敗しました', err);
                alert("コピーに失敗しました。");
            });
        },

        showModal: (modal) => modal.classList.remove('hidden'),
        hideModal: (modal) => modal.classList.add('hidden'),
    };
    
    // Alias hidePopup for external calls
    App.hidePopup = () => App.hideModal(popupOverlay);
    
    // =====================================================================
    // SECTION: Initial Execution
    // =====================================================================
    App.init();

});
