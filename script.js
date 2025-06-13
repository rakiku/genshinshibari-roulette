// データ（提供されたソースをそのまま使用）
const bosses = [
    "無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ",
    "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス",
    "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修権者",
    "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト",
    "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜",
    "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス", "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神",
    "アペプ", "吞星の鯨", "召使", "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム",
    "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ", "ジャプー", "リライ",
    "銅の掟", "ピーク", "戦羊・鉄爪", "微末"
];
const binds = [
    "☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール",
    "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止",
    "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし"
];
const subRoulettes = {
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": ["旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー", "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ", "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮", "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮", "早柚", "雷電将軍", "九条裟羅", "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵", "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ", "レイラ", "放浪者", "ファルザン", "アルハイゼン", "ディシア", "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット", "リオセスリ", "シャルロット", "フリーナ", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ", "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア"],
    "武器種縛り": ["片手剣", "両手剣", "長柄武器", "法器", "弓"],
    "モノ元素縛り": ["風", "岩", "雷", "草", "水", "炎", "氷"],
    "各1.1縛り": ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
    "誕生月": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
    "アルファベット縛り": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
};
const weapons = {
    "長柄武器": ["香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍", "「漁獲」", "匣中滅龍", "死闘の槍"],
    "法器": ["ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"],
    "弓": ["冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"],
    "両手剣": ["千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"],
    "片手剣": ["厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"]
};
const charWeaponMap = {
    "長柄武器": ["エスコフィエ", "イアンサ", "カチーナ", "エミリエ", "アルレッキーノ", "シュヴルーズ", "ミカ", "ヨォーヨ", "キャンディス", "セノ", "魈", "香菱", "雷電将軍", "鍾離", "胡桃", "ロサリア", "申鶴", "トーマ", "雲菫"],
    "法器": ["イファ", "ヴァレサ", "夢見月瑞希", "藍硯", "シトラリ", "ムアラニ", "閑雲", "シャルロット", "ヌヴィレット", "リオセスリ", "白朮", "放浪者", "ナヒーダ", "鹿野院平蔵", "モナ", "バーバラ", "スクロース", "珊瑚宮心海", "煙緋", "クレー", "凝光", "八重神子", "リサ"],
    "弓": ["チャスカ", "オロルン", "セトス", "シグウィン", "リネ", "ファルザン", "コレイ", "ティナリ", "夜蘭", "ディオナ", "タルタリヤ", "フィッシュル", "甘雨", "ウェンティ", "宵宮", "アンバー", "ゴロー", "九条裟羅"],
    "両手剣": ["マーヴィカ", "キィニチ", "嘉明", "ナヴィア", "フレミネ", "カーヴェ", "ディシア", "ドリー", "レザー", "重雲", "ディルック", "辛炎", "ノエル", "荒瀧一斗", "早柚", "北斗", "エウルア"],
    "片手剣": ["旅人", "シロネン", "クロリンデ", "千織", "フリーナ", "リネット", "綺良々", "アルハイゼン", "レイラ", "ニィロウ", "久岐忍", "アルベド", "行秋", "神里綾華", "神里綾人", "ジン", "ベネット", "楓原万葉", "刻晴", "ガイア", "七七", "スカーク", "ダリア"]
};
const birthMonth = {
    "１月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
    "２月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
    "３月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
    "４月": ["ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック"],
    "５月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "フィッシュル", "セトス"],
    "６月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
    "７月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緋"],
    "８月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
    "９月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
    "１０月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
    "１１月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ", "スカーク"],
    "１２月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
};
const alphabet = {
    "A": ["荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー"],
    "B": ["バーバラ", "白朮", "ベネット", "北斗"],
    "C": ["キャンディス", "クロリンデ", "コレイ", "シャルロット", "シュヴルーズ", "シトラリ", "セノ", "千織", "チャスカ", "重雲"],
    "D": ["ドリー", "ディシア", "ディルック", "ディオナ", "ダリア"],
    "E": ["エミリエ", "エウルア", "エスコフィエ"],
    "F": ["ファルザン", "フリーナ", "フレミネ", "フィッシュル"],
    "G": ["嘉明", "甘雨", "ゴロー"],
    "H": ["胡桃"],
    "I": ["イアンサ", "イファ"],
    "J": ["ジン"],
    "K": ["神里綾華", "神里綾人", "キィニチ", "綺良々", "久岐忍", "九条裟羅", "クレー", "刻晴", "カチーナ"],
    "L": ["リサ", "リネ", "リネット", "レイラ", "藍硯"],
    "M": ["ミカ", "ムアラニ", "モナ", "マーヴィカ"],
    "N": ["ナヴィア", "ナヒーダ", "ニィロウ", "ヌヴィレット", "ノエル"],
    "O": ["オロルン"],
    "Q": ["七七"],
    "R": ["雷電将軍", "レザー", "ロサリア"],
    "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"],
    "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"],
    "V": ["ウェンティ", "ヴァレサ"],
    "W": ["放浪者", "リオセスリ"],
    "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"],
    "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ"],
    "Z": ["鍾離"]
};
const version = {
    "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
    "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス", "ヌヴィレット", "リオセスリ", "シロネン"],
    "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン"],
    "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
    "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
    "n.5": ["エウルア", "煙緋", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
    "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "エスコフィエ", "イファ"],
    "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス", "スカーク", "ダリア"],
    "n.8": ["鹿野院平蔵", "エミリエ"]
};

// 状態管理
let playerCount, bindCount, mode, currentRoulette, items = [], angle = 0, spinning = false, spinSpeed = 0;
let selectedBinds = [], results = {}, currentPlayer = 1, excludedChars = [], excludedWeapons = {}, currentBindIndex = 0;
const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const colors = ['#00c0ff', '#36d6a0', '#fe6640', '#8dcc06', '#74E4E2', '#cc85ff', '#F3AC11'];

// 画面切り替え
function showScreen(screenId) {
    ['startScreen', 'bindSelection', 'rouletteScreen', 'resultScreen'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById('backToStartButton').style.display = screenId === 'startScreen' ? 'none' : 'block';
}

// ゲームリセット
function resetGame() {
    playerCount = null;
    bindCount = null;
    mode = null;
    currentRoulette = null;
    items = [];
    angle = 0;
    spinning = false;
    spinSpeed = 0;
    selectedBinds = [];
    results = {};
    currentPlayer = 1;
    excludedChars = [];
    excludedWeapons = {};
    currentBindIndex = 0;
    document.getElementById('playerCount').value = '1';
    document.getElementById('bindCount').value = '1';
    document.getElementById('spinButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('notOwnedButton').classList.add('hidden');
    document.getElementById('nextButton').classList.add('hidden');
    document.getElementById('popup').classList.add('hidden');
    showScreen('startScreen');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 縛り選択画面
function showBindSelection() {
    playerCount = parseInt(document.getElementById('playerCount').value);
    bindCount = parseInt(document.getElementById('bindCount').value);
    selectedBinds = [];
    results = { boss: null, common: [], players: Array(playerCount).fill().map(() => []) };
    showScreen('bindSelection');
    const bindButtons = document.getElementById('bindButtons');
    bindButtons.innerHTML = '';
    binds.forEach(bind => {
        const button = document.createElement('button');
        button.textContent = bind;
        button.onclick = () => {
            if (selectedBinds.length < bindCount) {
                selectedBinds.push(bind);
                button.disabled = true;
                if (selectedBinds.length === bindCount) {
                    mode = 'selected';
                    currentBindIndex = 0;
                    currentPlayer = 1;
                    currentRoulette = selectedBinds[0];
                    items = currentRoulette === 'キャラ武器ルーレット' ? subRoulettes['キャラルーレット'].filter(i => !excludedChars.includes(i)) : subRoulettes[currentRoulette] || [];
                    showScreen('rouletteScreen');
                    drawRoulette();
                }
            }
        };
        bindButtons.appendChild(button);
    });
}

// ルーレット開始
function startRoulette(type) {
    playerCount = parseInt(document.getElementById('playerCount').value);
    bindCount = parseInt(document.getElementById('bindCount').value);
    mode = type;
    selectedBinds = [];
    results = { boss: null, common: [], players: Array(playerCount).fill().map(() => []) };
    currentPlayer = 1;
    currentBindIndex = 0;
    excludedChars = [];
    excludedWeapons = {};
    showScreen('rouletteScreen');
    if (type === 'all') {
        currentRoulette = 'boss';
        items = bosses;
    } else if (type === 'boss') {
        currentRoulette = 'boss';
        items = bosses;
    } else if (type === 'bind') {
        currentRoulette = 'bind';
        items = binds;
    }
    drawRoulette();
}

// ルーレット描画
function drawRoulette() {
    if (!items || items.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const radius = canvas.width / 2 - 20;
    const validItems = items.filter(i => i !== 'x' && i !== ' ' && i !== '');
    if (validItems.length === 0) return;
    const arc = 2 * Math.PI / validItems.length;
    for (let i = 0; i < validItems.length; i++) {
        const startAngle = i * arc + angle;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + arc);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        const gradient = ctx.createLinearGradient(
            canvas.width / 2 + Math.cos(startAngle) * radius,
            canvas.height / 2 + Math.sin(startAngle) * radius,
            canvas.width / 2 + Math.cos(startAngle + arc) * radius,
            canvas.height / 2 + Math.sin(startAngle + arc)
        );
        gradient.addColorStop(0, colors[i % colors.length]);
        gradient.addColorStop(1, colors[(i + 1) % colors.length]);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(startAngle + arc / 2);
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(validItems[i], radius - 10, 0);
        ctx.restore();
    }
    // 三角マーカー（3時位置、頂点左向き、赤）
    ctx.beginPath();
    ctx.moveTo(canvas.width - 40, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width - 40, canvas.height / 2 + 10);
    ctx.lineTo(canvas.width - 20, canvas.height / 2);
    ctx.closePath();
    ctx.fillStyle = '#ff0000';
    ctx.fill();
}

// ルーレット回転
function spinRoulette() {
    if (spinning || !items || items.length === 0) return;
    spinning = true;
    spinSpeed = 0.2; // easy-roulette.com の初速に近似
    document.getElementById('spinButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    document.getElementById('notOwnedButton').classList.add('hidden');
    document.getElementById('nextButton').classList.add('hidden');
    document.getElementById('popup').classList.add('hidden');
    animate();
}

function animate() {
    if (!spinning) return;
    angle += spinSpeed;
    drawRoulette();
    requestAnimationFrame(animate);
}

// ルーレット停止
function stopRoulette() {
    if (!spinning) return;
    const startTime = Date.now();
    const stopDuration = 5000; // 5秒
    const initialSpeed = spinSpeed;
    function slowDown() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / stopDuration, 1);
        spinSpeed = initialSpeed * (1 - progress); // 線形減速
        if (spinSpeed < 0) spinSpeed = 0;
        angle += spinSpeed;
        drawRoulette();
        if (progress < 1) {
            requestAnimationFrame(slowDown);
        } else {
            spinning = false;
            const validItems = items.filter(i => i !== 'x' && i !== ' ' && i !== '');
            const arc = 2 * Math.PI / validItems.length;
            const normalizedAngle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            const index = Math.floor(normalizedAngle / arc);
            const result = validItems[index];
            // 角度を結果セクションの中央に調整
            angle = index * arc + arc / 2;
            drawRoulette();
            showPopup(result);
        }
    }
    requestAnimationFrame(slowDown);
    document.getElementById('stopButton').disabled = true;
}

// ポップアップ表示
function showPopup(result) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.textContent = result;
    popup.classList.remove('hidden');
    document.getElementById('nextButton').classList.add('hidden');
    if (currentRoulette === 'キャラルーレット' || currentRoulette === 'キャラ武器ルーレット' || currentRoulette === 'weapon') {
        document.getElementById('notOwnedButton').classList.remove('hidden');
    }
    const closePopup = () => {
        popup.classList.add('hidden');
        document.getElementById('nextButton').classList.remove('hidden');
        if (currentBindIndex >= bindCount && currentPlayer > playerCount && mode !== 'boss') {
            document.getElementById('nextButton').textContent = '結果を表示';
        }
    };
    popup.onclick = closePopup;
    document.getElementById('closePopupButton').onclick = closePopup;
    setTimeout(closePopup, 5000);
}

// 持っていない
function notOwned() {
    if (spinning || !['キャラルーレット', 'キャラ武器ルーレット', 'weapon'].includes(currentRoulette)) return;
    const validItems = items.filter(i => i !== 'x' && i !== ' ' && i !== '');
    const arc = 2 * Math.PI / validItems.length;
    const normalizedAngle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalizedAngle / arc);
    const currentResult = validItems[index];
    if (currentRoulette === 'キャラルーレット' || currentRoulette === 'キャラ武器ルーレット') {
        excludedChars.push(currentResult);
        results.players[currentPlayer - 1] = results.players[currentPlayer - 1].filter(r => r.detail?.char !== currentResult);
        items = subRoulettes['キャラルーレット'].filter(i => !excludedChars.includes(i));
    } else if (currentRoulette === 'weapon') {
        const char = results.players[currentPlayer - 1].find(r => r.bind === 'キャラ武器ルーレット')?.detail?.char;
        if (char) {
            if (!excludedWeapons[char]) excludedWeapons[char] = [];
            excludedWeapons[char].push(currentResult);
            const weaponType = Object.keys(charWeaponMap).find(w => charWeaponMap[w].includes(char));
            items = weapons[weaponType].filter(w => !excludedWeapons[char]?.includes(w));
        }
    }
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('notOwnedButton').classList.add('hidden');
    drawRoulette();
    spinRoulette();
}

// 結果処理
function processResult(result) {
    if (currentRoulette === 'boss') {
        results.boss = result;
        if (mode === 'all') {
            currentRoulette = 'bind';
            items = binds;
        } else {
            showResults();
            return;
        }
    } else if (currentRoulette === 'bind') {
        if (['☆４キャラ武器', '回復禁止', '恒常☆５縛り', '所持率100％縛り', '初期キャラのみ', '誰か一人が倒れたら負け縛り', '無凸縛り', '聖遺物禁止', '旅人縛り', '☆１、聖遺物なし'].includes(result)) {
            results.common.push(result === '所持率100％縛り' ? '所持率100％（旅人、ガイア、リサ、アンバー、香菱、コレイ、ノエル、バーバラ）' : result);
            currentBindIndex++;
            nextBind();
            return;
        } else if (['国縛り'].includes(result)) {
            results.common.push(`${result}：${subRoulettes[result][Math.floor(Math.random() * subRoulettes[result].length)]}`);
            currentBindIndex++;
            nextBind();
            return;
        } else if (['UI非表示＋リロール', '爆発禁止＋リロール'].includes(result)) {
            results.common.push(result);
            currentBindIndex++;
            nextBind();
            return;
        } else {
            results.players[currentPlayer - 1].push({ bind: result, detail: null });
            currentRoulette = result;
            items = result === 'キャラ武器ルーレット' ? subRoulettes['キャラルーレット'].filter(i => !excludedChars.includes(i)) : subRoulettes[result];
        }
    } else if (currentRoulette === 'キャラ武器ルーレット') {
        let bindResult = results.players[currentPlayer - 1].find(r => r.bind === 'キャラ武器ルーレット');
        if (!bindResult) {
            bindResult = { bind: 'キャラ武器ルーレット', detail: { char: result, weapon: null } };
            results.players[currentPlayer - 1].push(bindResult);
        } else {
            bindResult.detail = { char: result, weapon: null };
        }
        currentRoulette = 'weapon';
        const weaponType = Object.keys(charWeaponMap).find(w => charWeaponMap[w].includes(result));
        items = weaponType ? weapons[weaponType].filter(w => !excludedWeapons[result]?.includes(w)) : [];
    } else if (currentRoulette === 'weapon') {
        const bindResult = results.players[currentPlayer - 1].find(r => r.bind === 'キャラ武器ルーレット');
        if (bindResult && bindResult.detail) {
            bindResult.detail.weapon = result;
        }
        currentPlayer++;
        if (currentPlayer > playerCount) {
            currentPlayer = 1;
            currentBindIndex++;
            nextBind();
            return;
        } else {
            currentRoulette = 'キャラ武器ルーレット';
            items = subRoulettes['キャラルーレット'].filter(i => !excludedChars.includes(i));
        }
    } else {
        results.players[currentPlayer - 1].find(r => r.bind === currentRoulette).detail = result;
        currentPlayer++;
        if (currentPlayer > playerCount) {
            currentPlayer = 1;
            currentBindIndex++;
            nextBind();
            return;
        } else {
            items = subRoulettes[currentRoulette].filter(i => !excludedChars.includes(i));
        }
    }
    document.getElementById('nextButton').classList.add('hidden');
    drawRoulette();
    document.getElementById('spinButton').disabled = false;
}

// 次のステップ
function nextStep() {
    if (spinning || !items || items.length === 0) return;
    const validItems = items.filter(i => i !== 'x' && i !== ' ' && i !== '');
    const arc = 2 * Math.PI / validItems.length;
    const normalizedAngle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalizedAngle / arc);
    const result = validItems[index];
    processResult(result);
}

// 次の縛り
function nextBind() {
    if (mode === 'selected' && currentBindIndex >= selectedBinds.length) {
        showResults();
    } else if (mode !== 'selected' && (results.common.length + selectedBinds.length >= bindCount)) {
        showResults();
    } else if (mode === 'selected') {
        currentRoulette = selectedBinds[currentBindIndex];
        items = currentRoulette === 'キャラ武器ルーレット' ? subRoulettes['キャラルーレット'].filter(i => !excludedChars.includes(i)) : subRoulettes[currentRoulette];
        document.getElementById('nextButton').classList.add('hidden');
        drawRoulette();
        document.getElementById('spinButton').disabled = false;
    } else {
        currentRoulette = 'bind';
        items = binds;
        document.getElementById('nextButton').classList.add('hidden');
        drawRoulette();
        document.getElementById('spinButton').disabled = false;
    }
}

// 結果表示
function showResults() {
    showScreen('resultScreen');
    const resultsDiv = document.getElementById('results');
    let html = '';
    if (results.boss && mode !== 'bind' && mode !== 'selected') {
        html += `<h3>ボス：${results.boss}</h3>`;
    }
    if (results.common.length > 0) {
        html += `<h3>共通の縛り：</h3><ul>`;
        results.common.forEach(c => html += `<li>${c}</li>`);
        html += `</ul>`;
    }
    for (let i = 0; i < playerCount; i++) {
        if (results.players[i].length > 0) {
            html += `<h3>プレイヤー${i + 1}：</h3><ul>`;
            results.players[i].forEach(r => {
                if (r.bind === 'キャラ武器ルーレット') {
                    html += `<li>キャラ武器ルーレット：${r.detail.char}：${r.detail.weapon}</li>`;
                } else if (r.bind === '誕生月' && r.detail) {
                    html += `<li>誕生月：${r.detail}（${birthMonth[r.detail].join(', ')}）</li>`;
                } else if (r.bind === 'アルファベット縛り' && r.detail) {
                    html += `<li>アルファベット縛り：${r.detail}（${alphabet[r.detail].join(', ')}）</li>`;
                } else {
                    html += `<li>${r.bind}：${r.detail}</li>`;
                }
            });
            html += `</ul>`;
        }
    }
    resultsDiv.innerHTML = html;
}
