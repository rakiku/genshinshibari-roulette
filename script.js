// script.js
let activeConstraints = [];
let selectedItems = [];
let playerCount = 1; // デフォルト1人、実際はユーザー入力で設定
let rouletteInterval;

function goToAllInOne() {
    activeConstraints = [];
    selectedItems = [];
    // プレイヤー数入力や縛り数入力が必要だが、簡略化のため省略
    goToBossRoulette();
    // 実際には非同期処理やユーザー操作を待つ必要があるが、簡略化
}

function goToBossRoulette() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>ボスルーレット</h2>
        <div id="boss-roulette"></div>
        <button onclick="startRoulette('boss')">スタート</button>
        <button onclick="stopRoulette('boss')">ストップ</button>
    `;
}

function goToConstraintRoulette() {
    document.getElementById('main-screen').style.display = 'none';
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = `
        <h2>縛りルーレット</h2>
        <div id="constraint-roulette"></div>
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
        <h3>注意事項</h3>
        <p>これは非公式のファンメイドツールです。アップデートは作者がやりたいときに頑張ります。データミスやバグは @rakiku_genshin にDMでご報告ください。</p>
    `;
}

function startRoulette(type) {
    const rouletteDiv = document.getElementById(`${type}-roulette`);
    const items = type === 'boss' ? bosses : constraints;
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function stopRoulette(type) {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById(`${type}-roulette`);
    const selectedItem = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた${type === 'boss' ? 'ボス' : '縛り'}: ${selectedItem}`);
        selectedItems.push({ type: type, value: selectedItem });
    }, 1000); // 徐々に停止
}

function stopConstraintRoulette() {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById('constraint-roulette');
    const selectedConstraint = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた縛り: ${selectedConstraint}`);
        activeConstraints.push(selectedConstraint);
        handleDetailedRoulette(selectedConstraint);
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
        showResult();
    }
}

function showDetailedRoulette(constraint) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>${constraint}ルーレット</h2>
        <div id="detailed-roulette"></div>
        <button onclick="startDetailedRoulette('${constraint}')">スタート</button>
        <button onclick="stopDetailedRoulette('${constraint}')">ストップ</button>
        <button onclick="nextStep('${constraint}')">次へ</button>
        <button onclick="reroll('${constraint}')">持っていない</button>
    `;
}

function startDetailedRoulette(constraint) {
    const rouletteDiv = document.getElementById('detailed-roulette');
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
    const selectedItem = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた結果: ${selectedItem}`);
        selectedItems.push({ type: constraint, value: selectedItem });
        if (constraint === "キャラルーレット" && activeConstraints.includes("キャラ武器ルーレット")) {
            showWeaponRouletteForCharacter(selectedItem);
        } else {
            showResult();
        }
    }, 1000);
}

function showWeaponRouletteForCharacter(character) {
    const weaponType = characterWeaponMap[character] || "片手剣"; // デフォルトは片手剣
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>武器ルーレット (${character})</h2>
        <div id="weapon-roulette"></div>
        <button onclick="startWeaponRouletteForChar('${weaponType}')">スタート</button>
        <button onclick="stopWeaponRoulette()">ストップ</button>
        <button onclick="nextStep('weapon')">次へ</button>
        <button onclick="reroll('weapon')">持っていない</button>
    `;
}

function startWeaponRouletteForChar(type) {
    const rouletteDiv = document.getElementById('weapon-roulette');
    let items = weapons[type].slice();
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}

function stopWeaponRoulette() {
    clearInterval(rouletteInterval);
    const rouletteDiv = document.getElementById('weapon-roulette');
    const selectedWeapon = rouletteDiv.textContent;
    setTimeout(() => {
        showPopup(`選ばれた武器: ${selectedWeapon}`);
        selectedItems.push({ type: 'weapon', value: selectedWeapon });
        showResult();
    }, 1000);
}

function reroll(type) {
    const rouletteDiv = document.getElementById(`${type === 'weapon' ? 'weapon' : 'detailed'}-roulette`);
    const removedItem = rouletteDiv.textContent;
    if (type === 'weapon') {
        const weaponType = characterWeaponMap[document.getElementById('detailed-roulette')?.textContent] || document.getElementById('weapon-type-select')?.value;
        weapons[weaponType] = weapons[weaponType].filter(item => item !== removedItem);
        startWeaponRouletteForChar(weaponType);
    } else if (type === 'キャラルーレット') {
        characters = characters.filter(char => char !== removedItem);
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
    return items;
}

function filterCharacters() {
    let filtered = characters.slice();
    if (activeConstraints.includes("恒常☆５縛り")) {
        filtered = filtered.filter(char => permanent5Stars.includes(char));
    }
    if (activeConstraints.includes("所持率100％縛り")) {
        filtered = filtered.filter(char => fullyOwned.includes(char));
    }
    return filtered.length > 0 ? filtered : characters;
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `${message}<br><button onclick="this.parentElement.remove()">閉じる</button>`;
    document.body.appendChild(popup);
}

function nextStep(type) {
    showResult();
}

function showResult() {
    const content = document.getElementById('content');
    let resultHtml = '<h2>結果</h2>';
    selectedItems.forEach(item => {
        resultHtml += `<p>${item.type}: ${item.value}</p>`;
    });
    content.innerHTML = resultHtml;
}

function backToMain() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
    activeConstraints = [];
    selectedItems = [];
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

function showWeaponTypeSelect() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>武器ルーレット</h2>
        <select id="weapon-type-select">
            ${weaponTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
        </select>
        <div id="weapon-roulette"></div>
        <button onclick="startWeaponRoulette()">スタート</button>
        <button onclick="stopWeaponRoulette()">ストップ</button>
        <button onclick="nextStep('weapon')">次へ</button>
        <button onclick="reroll('weapon')">持っていない</button>
    `;
}

function startWeaponRoulette() {
    const type = document.getElementById('weapon-type-select').value;
    const rouletteDiv = document.getElementById('weapon-roulette');
    let items = weapons[type].slice();
    let index = 0;
    rouletteInterval = setInterval(() => {
        rouletteDiv.textContent = items[index];
        index = (index + 1) % items.length;
    }, 100);
}
