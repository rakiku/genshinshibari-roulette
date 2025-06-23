// script.js
let activeConstraints = [];
let selectedItems = [];
let playerCount = 1;
let constraintCount = 1;
let rouletteInterval;
let currentPlayer = 0;
let currentConstraintIndex = 0;

// 画面遷移関数
function goToAllInOne() {
    playerCount = parseInt(document.getElementById('player-count').value);
    constraintCount = parseInt(document.getElementById('constraint-count').value);
    activeConstraints = [];
    selectedItems = Array(playerCount).fill().map(() => []);
    currentPlayer = 0;
    currentConstraintIndex = 0;
    goToBossRoulette();
}

function goToBossRoulette() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>ボスルーレット</h2>
        <div class="roulette-container">
            <div id="boss-roulette" class="roulette"></div>
        </div>
        <button onclick="startRoulette('boss')">スタート</button>
        <button onclick="stopRoulette('boss')">ストップ</button>
    `;
}

function goToConstraintRoulette() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>縛りルーレット (プレイヤー${currentPlayer + 1}/${playerCount}, 縛り${currentConstraintIndex + 1}/${constraintCount})</h2>
        <div class="roulette-container">
            <div id="constraint-roulette" class="roulette"></div>
        </div>
        <button onclick="startRoulette('constraint')">スタート</button>
        <button onclick="stopConstraintRoulette()">ストップ</button>
    `;
}

function goToSelectConstraint() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>縛りを選んでルーレット</h2>
        <select id="constraint-select">
            ${selectableConstraints.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <button onclick="startSelectedConstraint()">ルーレットを回す</button>
    `;
}

function goToAbout() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>このルーレットについて</h2>
        <button style="position: absolute; top: 10px; right: 10px;" onclick="backToMain()">閉じる</button>
        <h3>目的・コンセプト</h3>
        <p>このルーレットは、普段遊んでいるサーバーでやっている縛りのルーレットをやりやすくしたいという目的のもと作成しています。できることはボスの抽選、縛りプレイの抽選、縛りの内容の抽選、武器の抽選です。プレイ人数は原神のマルチできる人数1～4人、縛りの数は現実的に可能な4つまでとしています。</p>
        <h3>使用される情報について</h3>
        <p>ルーレットに使用されるキャラ、武器、縛り条件などの情報はすべて制作者が選定した公式情報のみを使用しています。データミスを見つけた場合は、@rakiku_genshin にDMでご報告ください。</p>
        <h3>FAQ</h3>
        <p>Q: 所持していない武器が出たら？<br>A: 「持っていない」ボタンで項目を削除し再抽選。</p>
        <p>Q: キャラルーレットで被ったら？<br>A: 重複しないよう設計。</p>
        <p>Q: 縛りの重複はどう処理？<br>A: 重複しないよう設計。</p>
        <p>Q: 条件の矛盾が出た場合は？<br>A: 後に出た縛りを再抽選。</p>
        <p>Q: ルーレットの結果を保存できますか？<br>A: 現在は保存機能なし。リザルト画面をスクリーンショットしてください。</p>
        <p>Q: モバイルでも使えますか？<br>A: はい、スマホ対応の縦長デザインです。</p>
        <p>Q: 縛り数が4つに制限されているのはなぜ？<br>A: 現実的に可能な縛り数として最大4つに設定。</p>
        <p>Q: ボスや縛りを自分で選べますか？<br>A: 「縛りを選ぶ」モードで縛りを手動選択可能。ボスはランダムのみ。</p>
        <p>Q: アーロイや旅人の扱いは？<br>A: 例外キャラとして特定の縛り（例：所持率100％、恒常☆5）で除外。</p>
        <p>Q: データミスを見つけたらどうすればいい？<br>A: @rakiku_genshin にDMでご報告ください。</p>
        <p>Q: ルーレットの結果が気に入らない場合は？<br>A: 「持っていない」ボタンでキャラ/武器を再抽選、または「最初に戻る」でリセット。</p>
        <p>Q: マルチプレイでの縛りは全員同じ？<br>A: 共通縛り（例：回復禁止）は全員同じ、個別縛り（例：キャラルーレット）はプレイヤーごと。</p>
        <p>Q: 武器ルーレットはどうやって使う？<br>A: 「縛りを選んでルーレット」から「武器ルーレット」を選択し、武器種を選んでルーレットを回してください。</p>
        <h3>注意事項</h3>
        <p>これは非公式のファンメイドツールです。アップデートは作者がやりたいときに頑張ります。データミスやバグは @rakiku_genshin にDMでご報告ください。</p>
    `;
}

// ルーレット操作
function startRoulette(type) {
    const rouletteDiv = document.getElementById(`${type}-roulette`);
    rouletteDiv.classList.add('spinning');
    const items = type === 'boss' ? bosses : type === 'constraint' ? constraints : getItemsForConstraint(type);
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function stopRoulette(type) {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById(`${type}-roulette`);
    rouletteDiv.classList.remove('spinning');
    const selectedItem = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた${type === 'boss' ? 'ボス' : '項目'}: ${selectedItem}`, () => {
            selectedItems[currentPlayer].push({ type: type, value: selectedItem });
            if (type === 'boss') {
                if (currentConstraintIndex < constraintCount) {
                    goToConstraintRoulette();
                } else {
                    showResult();
                }
            }
        });
    }, 1000); // 徐々に停止
}

function stopConstraintRoulette() {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById('constraint-roulette');
    rouletteDiv.classList.remove('spinning');
    const selectedConstraint = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた縛り: ${selectedConstraint}`, () => {
            activeConstraints.push(selectedConstraint);
            handleDetailedRoulette(selectedConstraint);
        });
    }, 1000);
}

function handleDetailedRoulette(constraint) {
    const detailedConstraints = [
        "国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り",
        "各1.1縛り", "誕生月", "アルファベット縛り"
    ];
    if (detailedConstraints.includes(constraint)) {
        showDetailedRoulette(constraint);
    } else {
        currentConstraintIndex++;
        if (currentConstraintIndex < constraintCount) {
            goToConstraintRoulette();
        } else if (currentPlayer < playerCount - 1) {
            currentPlayer++;
            currentConstraintIndex = 0;
            goToConstraintRoulette();
        } else {
            showResult();
        }
    }
}

function showDetailedRoulette(constraint) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>${constraint}ルーレット (プレイヤー${currentPlayer + 1})</h2>
        <div class="roulette-container">
            <div id="detailed-roulette" class="roulette"></div>
        </div>
        <button onclick="startDetailedRoulette('${constraint}')">スタート</button>
        <button onclick="stopDetailedRoulette('${constraint}')">ストップ</button>
        <button onclick="nextStep('${constraint}')">次へ</button>
        <button onclick="reroll('${constraint}')">持っていない</button>
    `;
}

function startDetailedRoulette(constraint) {
    const rouletteDiv = document.getElementById('detailed-roulette');
    rouletteDiv.classList.add('spinning');
    let items = getItemsForConstraint(constraint);
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function stopDetailedRoulette(constraint) {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById('detailed-roulette');
    rouletteDiv.classList.remove('spinning');
    const selectedItem = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた結果: ${selectedItem}`, () => {
            selectedItems[currentPlayer].push({ type: constraint, value: selectedItem });
            if (constraint === "キャラルーレット" && activeConstraints.includes("キャラ武器ルーレット")) {
                showWeaponRouletteForCharacter(selectedItem);
            } else {
                nextStep(constraint);
            }
        });
    }, 1000);
}

function showWeaponRouletteForCharacter(character) {
    const weaponType = characterWeaponMap[character] || "片手剣";
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>武器ルーレット (${character}, プレイヤー${currentPlayer + 1})</h2>
        <div class="roulette-container">
            <div id="weapon-roulette" class="roulette"></div>
        </div>
        <button onclick="startWeaponRouletteForChar('${weaponType}')">スタート</button>
        <button onclick="stopWeaponRoulette()">ストップ</button>
        <button onclick="nextStep('weapon')">次へ</button>
        <button onclick="reroll('weapon')">持っていない</button>
    `;
}

function startWeaponRouletteForChar(type) {
    const rouletteDiv = document.getElementById('weapon-roulette');
    rouletteDiv.classList.add('spinning');
    let items = getFilteredWeapons(type);
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function stopWeaponRoulette() {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById('weapon-roulette');
    rouletteDiv.classList.remove('spinning');
    const selectedWeapon = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた武器: ${selectedWeapon}`, () => {
            selectedItems[currentPlayer].push({ type: 'weapon', value: selectedWeapon });
            nextStep('weapon');
        });
    }, 1000);
}

function showWeaponTypeSelect() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>武器ルーレット (プレイヤー${currentPlayer + 1})</h2>
        <select id="weapon-type-select">
            ${weaponTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
        </select>
        <div class="roulette-container">
            <div id="weapon-roulette" class="roulette"></div>
        </div>
        <button onclick="startWeaponRoulette()">スタート</button>
        <button onclick="stopWeaponRoulette()">ストップ</button>
        <button onclick="nextStep('weapon')">次へ</button>
        <button onclick="reroll('weapon')">持っていない</button>
    `;
}

function startWeaponRoulette() {
    const type = document.getElementById('weapon-type-select').value;
    const rouletteDiv = document.getElementById('weapon-roulette');
    rouletteDiv.classList.add('spinning');
    let items = getFilteredWeapons(type);
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function reroll(type) {
    const rouletteDiv = document.getElementById(`${type === 'weapon' ? 'weapon' : 'detailed'}-roulette`);
    const removedItem = rouletteDiv.textContent;
    if (type === 'weapon') {
        const weaponType = document.getElementById('weapon-type-select')?.value || characterWeaponMap[document.getElementById('detailed-roulette')?.textContent] || "片手剣";
        weapons[weaponType] = weapons[weaponType].filter(item => item !== removedItem);
        startWeaponRouletteForChar(weaponType);
    } else if (type === 'キャラルーレット') {
        characters.splice(characters.indexOf(removedItem), 1);
        startDetailedRoulette(type);
    } else {
        startDetailedRoulette(type);
    }
}

function getItemsForConstraint(constraint) {
    let items = [];
    switch (constraint) {
        case "国縛り": items = countries; break;
        case "キャラルーレット": items = filterCharacters(); break;
        case "武器種縛り": items = weaponTypes; break;
        case "モノ元素縛り": items = elements; break;
        case "各1.1縛り": items = versions; break;
        case "誕生月": items = months; break;
        case "アルファベット縛り": items = alphabets; break;
        case "キャラ武器ルーレット": items = filterCharacters(); break;
        default: items = [];
    }
    return items.length > 0 ? items : ["選択可能な項目がありません"];
}

function filterCharacters() {
    let filtered = characters.slice();
    if (activeConstraints.includes("恒常☆５縛り")) {
        filtered = filtered.filter(char => permanent5Stars.includes(char));
    }
    if (activeConstraints.includes("所持率100％縛り")) {
        filtered = filtered.filter(char => fullyOwned.includes(char));
    }
    if (activeConstraints.includes("国縛り")) {
        const selectedCountry = selectedItems[currentPlayer].find(item => item.type === "国縛り")?.value;
        if (selectedCountry) {
            filtered = filtered.filter(char => countryCharacters[selectedCountry]?.includes(char));
        }
    }
    if (activeConstraints.includes("モノ元素縛り")) {
        const selectedElement = selectedItems[currentPlayer].find(item => item.type === "モノ元素縛り")?.value;
        if (selectedElement) {
            filtered = filtered.filter(char => elementCharacters[selectedElement]?.includes(char));
        }
    }
    if (activeConstraints.includes("各1.1縛り")) {
        const selectedVersion = selectedItems[currentPlayer].find(item => item.type === "各1.1縛り")?.value;
        if (selectedVersion) {
            filtered = filtered.filter(char => versionCharacters[selectedVersion]?.includes(char));
        }
    }
    if (activeConstraints.includes("誕生月")) {
        const selectedMonth = selectedItems[currentPlayer].find(item => item.type === "誕生月")?.value;
        if (selectedMonth) {
            filtered = filtered.filter(char => monthCharacters[selectedMonth]?.includes(char));
        }
    }
    if (activeConstraints.includes("アルファベット縛り")) {
        const selectedAlphabet = selectedItems[currentPlayer].find(item => item.type === "アルファベット縛り")?.value;
        if (selectedAlphabet) {
            filtered = filtered.filter(char => alphabetCharacters[selectedAlphabet]?.includes(char));
        }
    }
    if (activeConstraints.includes("☆４キャラ武器")) {
        filtered = filtered.filter(char => star4Characters.includes(char));
    }
    if (activeConstraints.includes("初期キャラのみ")) {
        filtered = filtered.filter(char => fullyOwned.includes(char));
    }
    if (activeConstraints.includes("無凸縛り")) {
        filtered = filtered.filter(char => star4Characters.includes(char) || star5Characters.includes(char));
    }
    if (activeConstraints.includes("旅人縛り")) {
        filtered = filtered.filter(char => char === "旅人");
    }
    return filtered.length > 0 ? filtered : characters;
}

function getFilteredWeapons(type) {
    let filtered = weapons[type].slice();
    if (activeConstraints.includes("恒常☆５縛り")) {
        filtered = filtered.filter(weapon => permanent5StarWeapons.includes(weapon));
    }
    if (activeConstraints.includes("☆４キャラ武器")) {
        filtered = filtered.filter(weapon => !permanent5StarWeapons.includes(weapon));
    }
    return filtered.length > 0 ? filtered : weapons[type];
}

function showPopup(message, callback) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `${message}<br><button onclick="this.parentElement.remove(); ${callback ? 'callback()' : ''}">閉じる</button>`;
    document.body.appendChild(popup);
}

function nextStep(type) {
    currentConstraintIndex++;
    if (currentConstraintIndex < constraintCount) {
        goToConstraintRoulette();
    } else if (currentPlayer < playerCount - 1) {
        currentPlayer++;
        currentConstraintIndex = 0;
        goToConstraintRoulette();
    } else {
        showResult();
    }
}

function showResult() {
    const content = document.getElementById('content');
    let resultHtml = '<h2>結果</h2>';
    const commonConstraints = ["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "初期キャラのみ", "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "☆１、聖遺物なし"];
    const common = activeConstraints.filter(c => commonConstraints.includes(c));
    if (common.length > 0) {
        resultHtml += `<h3>全体共通の縛り</h3><p>${common.join(', ')}</p>`;
    }
    selectedItems.forEach((playerItems, index) => {
        resultHtml += `<h3>プレイヤー${index + 1}</h3>`;
        playerItems.forEach(item => {
            resultHtml += `<p>${item.type}: ${item.value}</p>`;
        });
    });
    content.innerHTML = resultHtml;
}

function backToMain() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
    activeConstraints = [];
    selectedItems = [];
    currentPlayer = 0;
    currentConstraintIndex = 0;
}

function startSelectedConstraint() {
    const selectedConstraint = document.getElementById('constraint-select').value;
    activeConstraints.push(selectedConstraint);
    if (selectedConstraint === "武器ルーレット") {
        showWeaponTypeSelect();
    } else {
        showDetailedRoulette(selectedConstraint);
    }
}
