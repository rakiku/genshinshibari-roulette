// =============================================================================
// グローバル変数
// =============================================================================
let playerNames = ['プレイヤー1'];

// =============================================================================
// 初期化処理
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 初期プレイヤー名入力欄を生成
    updatePlayerNameInputs();
    
    // イベントリスナーの設定
    setupEventListeners();
    
    // ホームボタン
    document.getElementById('homeButton').addEventListener('click', () => {
        showScreen('startScreen');
    });
});

// =============================================================================
// イベントリスナー設定
// =============================================================================
function setupEventListeners() {
    // メンバー設定ボタン
    const showMemberSettingsBtn = document.getElementById('showMemberSettingsButton');
    if (showMemberSettingsBtn) {
        showMemberSettingsBtn.addEventListener('click', showMemberSettings);
    }
    
    // モーダルを閉じる
    const closeMemberSettingsBtn = document.getElementById('closeMemberSettings');
    if (closeMemberSettingsBtn) {
        closeMemberSettingsBtn.addEventListener('click', () => {
            document.getElementById('memberSettingsModal').classList.add('hidden');
        });
    }
    
    // About画面
    const showAboutBtn = document.getElementById('showAboutButton');
    if (showAboutBtn) {
        showAboutBtn.addEventListener('click', () => {
            document.getElementById('aboutScreen').classList.remove('hidden');
        });
    }
    
    const closeAboutBtn = document.getElementById('closeAboutButton');
    if (closeAboutBtn) {
        closeAboutBtn.addEventListener('click', () => {
            document.getElementById('aboutScreen').classList.add('hidden');
        });
    }
    
    // プレイヤー名入力画面から設定画面へ
    const goToSettingsBtn = document.getElementById('goToSettingsButton');
    if (goToSettingsBtn) {
        goToSettingsBtn.addEventListener('click', () => {
            const playerNameInput = document.getElementById('modalPlayerNameInput');
            if (playerNameInput && playerNameInput.value.trim()) {
                // プレイヤー名入力画面を非表示
                document.getElementById('playerNameInputScreen').classList.add('hidden');
                
                // プレイヤー選択と所持状況タブを表示
                document.querySelector('.member-select-row').classList.remove('hidden');
                document.getElementById('possessionTabs').classList.remove('hidden');
                
                // キャラクターと武器のリストを生成
                generatePossessionLists();
            }
        });
    }
    
    // データ保存ボタン
    const savePlayerDataBtn = document.getElementById('savePlayerData');
    if (savePlayerDataBtn) {
        savePlayerDataBtn.addEventListener('click', () => {
            const playerNameInput = document.getElementById('modalPlayerNameInput');
            const playerName = playerNameInput ? playerNameInput.value.trim() : 'プレイヤー';
            
            // 所持データを保存（実装は簡略化）
            alert(`${playerName}のデータを保存しました`);
            
            // モーダルを閉じる
            document.getElementById('memberSettingsModal').classList.add('hidden');
            
            // モーダルをリセット
            resetMemberSettingsModal();
        });
    }
    
    // スタートボタン群（簡易実装）
    const startButtons = [
        'startAllButton',
        'startBossButton', 
        'startBindButton',
        'showBindSelectionButton',
        'showCustomBindScreenButton'
    ];
    
    startButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                alert(`${btnId}機能は現在開発中です`);
            });
        }
    });
}

// =============================================================================
// プレイヤー数調整
// =============================================================================
function adjustCount(fieldId, delta) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    
    const currentValue = parseInt(input.value) || 1;
    const min = parseInt(input.min) || 1;
    const max = parseInt(input.max) || 4;
    
    const newValue = Math.min(Math.max(currentValue + delta, min), max);
    input.value = newValue;
    
    // プレイヤー数が変更された場合、プレイヤー名入力欄を更新
    if (fieldId === 'playerCount') {
        updatePlayerNameInputs();
    }
}

// =============================================================================
// プレイヤー名入力欄の動的生成
// =============================================================================
function updatePlayerNameInputs() {
    const container = document.getElementById('playerNameInputsContainer');
    if (!container) return;
    
    const playerCountInput = document.getElementById('playerCount');
    const playerCount = parseInt(playerCountInput?.value) || 1;
    
    // 既存の入力欄をクリア
    container.innerHTML = '';
    
    // プレイヤー名配列を更新
    while (playerNames.length < playerCount) {
        playerNames.push(`プレイヤー${playerNames.length + 1}`);
    }
    while (playerNames.length > playerCount) {
        playerNames.pop();
    }
    
    // プレイヤー数分の入力欄を生成
    for (let i = 0; i < playerCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'playerNameInput';
        input.placeholder = `プレイヤー${i + 1}`;
        input.value = playerNames[i] || `プレイヤー${i + 1}`;
        input.dataset.index = i;
        
        // 入力値が変更されたらplayerNames配列を更新
        input.addEventListener('input', (e) => {
            const index = parseInt(e.target.dataset.index);
            playerNames[index] = e.target.value || `プレイヤー${index + 1}`;
        });
        
        container.appendChild(input);
    }
}

// =============================================================================
// メンバー設定モーダル表示
// =============================================================================
function showMemberSettings() {
    const modal = document.getElementById('memberSettingsModal');
    if (!modal) return;
    
    // モーダルをリセット
    resetMemberSettingsModal();
    
    // プレイヤー選択セレクトボックスを生成
    generatePlayerSelectBoxes();
    
    // モーダルを表示
    modal.classList.remove('hidden');
}

// =============================================================================
// プレイヤー選択セレクトボックスの動的生成
// =============================================================================
function generatePlayerSelectBoxes() {
    const selectRow = document.querySelector('.member-select-row');
    if (!selectRow) return;
    
    const playerCountInput = document.getElementById('playerCount');
    const playerCount = parseInt(playerCountInput?.value) || 1;
    
    // 既存のセレクトボックスをクリア
    selectRow.innerHTML = '';
    
    // プレイヤー数分のセレクトボックスを生成
    for (let i = 0; i < playerCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '10px';
        
        const label = document.createElement('label');
        label.textContent = `${playerNames[i] || `プレイヤー${i + 1}`}の設定を編集:`;
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.fontWeight = 'bold';
        
        const select = document.createElement('select');
        select.className = 'player-select';
        select.dataset.playerIndex = i;
        select.style.width = '100%';
        select.style.padding = '10px';
        select.style.borderRadius = '5px';
        select.style.backgroundColor = '#2c3e50';
        select.style.color = 'white';
        select.style.border = '1px solid #7f8c8d';
        
        // 選択肢を追加（デフォルトで現在のプレイヤーを選択）
        for (let j = 0; j < playerCount; j++) {
            const option = document.createElement('option');
            option.value = j;
            option.textContent = playerNames[j] || `プレイヤー${j + 1}`;
            if (i === j) {
                option.selected = true;
            }
            select.appendChild(option);
        }
        
        // セレクトボックスの変更イベント
        select.addEventListener('change', (e) => {
            const selectedPlayerIndex = parseInt(e.target.value);
            
            // 選択されたプレイヤーのデータをロード
            if (!isNaN(selectedPlayerIndex)) {
                loadPlayerData(selectedPlayerIndex);
            }
        });
        
        wrapper.appendChild(label);
        wrapper.appendChild(select);
        selectRow.appendChild(wrapper);
    }
}

// =============================================================================
// プレイヤーデータのロード（簡易実装）
// =============================================================================
function loadPlayerData(playerIndex) {
    const playerName = playerNames[playerIndex] || `プレイヤー${playerIndex + 1}`;
    document.getElementById('modalPlayerNameInput').value = playerName;
    
    // 実際の実装では、ここでlocalStorageなどから
    // プレイヤーの所持状況データを読み込む
}

// =============================================================================
// 所持状況リスト生成（簡易実装）
// =============================================================================
function generatePossessionLists() {
    const charList = document.getElementById('charSettingList');
    const weaponList = document.getElementById('weaponSettingList');
    
    if (charList) {
        // 既存のリストをクリア
        charList.innerHTML = '';
        
        // キャラクターリストのサンプル
        const sampleChars = [
            'アイノ', 'アルハイゼン', 'アルベド', 'アンバー', 'ウェンティ',
            'エウルア', 'カチーナ', 'ガイア', 'クロリンデ', 'ゴロー'
        ];
        
        sampleChars.forEach(char => {
            const item = createPossessionItem(char, 'char');
            charList.appendChild(item);
        });
    }
    
    if (weaponList) {
        // 既存のリストをクリア
        weaponList.innerHTML = '';
        
        // 武器リストのサンプル
        const sampleWeapons = [
            '「漁獲」', 'アモスの弓', 'サイフォスの月明かり', 
            'シナバースピンドル', 'チェーンブレイカー'
        ];
        
        sampleWeapons.forEach(weapon => {
            const item = createPossessionItem(weapon, 'weapon');
            weaponList.appendChild(item);
        });
    }
}

// =============================================================================
// 所持状況アイテム作成
// =============================================================================
function createPossessionItem(name, type) {
    const item = document.createElement('div');
    item.className = 'possession-item';
    
    const label = document.createElement('label');
    label.style.cursor = 'pointer';
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '8px';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = name;
    checkbox.dataset.type = type;
    
    const text = document.createElement('span');
    text.textContent = name;
    
    label.appendChild(checkbox);
    label.appendChild(text);
    item.appendChild(label);
    
    return item;
}

// =============================================================================
// タブ切り替え
// =============================================================================
function showTab(tabId) {
    // すべてのタブコンテンツを非表示
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // すべてのタブボタンからactiveクラスを削除
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 選択されたタブを表示
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // 対応するタブボタンにactiveクラスを追加
    const btnId = tabId === 'charTab' ? 'tab-char' : 'tab-weapon';
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.classList.add('active');
    }
}

// =============================================================================
// 一括チェック
// =============================================================================
function bulkCheck(type, checked) {
    const listId = type === 'char' ? 'charSettingList' : 'weaponSettingList';
    const list = document.getElementById(listId);
    
    if (!list) return;
    
    const checkboxes = list.querySelectorAll(`input[type="checkbox"][data-type="${type}"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = checked;
    });
}

// =============================================================================
// 画面切り替え
// =============================================================================
function showScreen(screenId) {
    // すべての画面を非表示
    const screens = [
        'startScreen',
        'customBindScreen',
        'bindSelection',
        'rouletteScreen',
        'resultScreen'
    ];
    
    screens.forEach(id => {
        const screen = document.getElementById(id);
        if (screen) {
            screen.classList.add('hidden');
        }
    });
    
    // 指定された画面を表示
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
    
    // モーダルも閉じる
    document.getElementById('memberSettingsModal')?.classList.add('hidden');
    document.getElementById('aboutScreen')?.classList.add('hidden');
}

// =============================================================================
// モーダルリセット
// =============================================================================
function resetMemberSettingsModal() {
    // プレイヤー名入力画面を表示
    const playerNameInputScreen = document.getElementById('playerNameInputScreen');
    if (playerNameInputScreen) {
        playerNameInputScreen.classList.remove('hidden');
    }
    
    // プレイヤー選択と所持状況タブを非表示
    const selectRow = document.querySelector('.member-select-row');
    if (selectRow) {
        selectRow.classList.add('hidden');
    }
    
    const possessionTabs = document.getElementById('possessionTabs');
    if (possessionTabs) {
        possessionTabs.classList.add('hidden');
    }
    
    // 入力欄をクリア
    const modalPlayerNameInput = document.getElementById('modalPlayerNameInput');
    if (modalPlayerNameInput) {
        modalPlayerNameInput.value = '';
    }
}

// =============================================================================
// 画像パス処理（既存の関数を保持）
// =============================================================================
function encodeImagePath(imagePath) {
    // URLエンコード処理を削除し、そのまま返す
    return imagePath;
}
