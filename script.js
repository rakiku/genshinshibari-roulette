// データ（提供されたリストをそのまま使用）
const bosses = [
    "無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩",
    "純水精霊", "雷音権現", "水形タルパ", "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ",
    "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス",
    "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼",
    "実験用フィールド生成装置", "迷える霊覚の修権者", "爆炎樹", "迅電樹", "急凍樹",
    "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト",
    "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜",
    "山の王・貪食のユムカ竜", "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス",
    "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神", "アペプ", "吞星の鯨", "召使",
    "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム",
    "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ",
    "ジャプー", "リライ", "銅の掟", "ピーク", "戦羊・鉄爪"
];

const constraints = [
    "☆4キャラ武器", "回復禁止", "恒常☆5縛り", "所持率100％", "国縛り", "初期キャラのみ",
    "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット",
    "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り",
    "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし"
];

const characters = [
    "旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ",
    "クレー", "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド",
    "ロサリア", "エウルア", "ミカ", "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴",
    "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "夜蘭", "ヨォーヨ",
    "白朮", "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮", "早柚",
    "雷電将軍", "九条裟羅", "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍",
    "鹿野院平蔵", "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス",
    "ニィロウ", "ナヒーダ", "レイラ", "放浪者", "ファルザン", "アルハイゼン", "ディシア",
    "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット", "リオセスリ",
    "シャルロット", "フリーナ", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ",
    "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ",
    "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ", "ヴァレサ", "イファ", "イアンサ",
    "スカーク", "ダリア"
];

const weapons = {
    "片手剣": [
        "厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "蒼耀",
        "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守",
        "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵",
        "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣",
        "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作",
        "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑",
        "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃",
        "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃"
    ],
    "両手剣": [
        "千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」",
        "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花",
        "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁",
        "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣",
        "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路",
        "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣",
        "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"
    ],
    "弓": [
        "冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦",
        "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍",
        "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦",
        "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓",
        "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓",
        "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ",
        "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"
    ],
    "法器": [
        "ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環",
        "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典",
        "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶",
        "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作",
        "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意",
        "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実",
        "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典",
        "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"
    ],
    "長柄武器": [
        "香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌",
        "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌",
        "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒纓槍",
        "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光",
        "白纓槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍",
        "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍", "匣中滅龍", "死闘の槍", "漁獲"
    ]
};

const charToWeapon = {
    "旅人": "片手剣", "シロネン": "片手剣", "クロリンデ": "片手剣", "千織": "片手剣",
    "フリーナ": "片手剣", "リネット": "片手剣", "綺良々": "片手剣", "アルハイゼン": "片手剣",
    "レイラ": "片手剣", "ニィロウ": "片手剣", "久岐忍": "片手剣", "アルベド": "片手剣",
    "行秋": "片手剣", "神里綾華": "片手剣", "神里綾人": "片手剣", "ジン": "片手剣",
    "ベネット": "片手剣", "楓原万葉": "片手剣", "刻晴": "片手剣", "ガイア": "片手剣",
    "七七": "片手剣", "スカーク": "片手剣", "ダリア": "片手剣",
    "マーヴィカ": "両手剣", "キィニチ": "両手剣", "嘉明": "両手剣", "ナヴィア": "両手剣",
    "フレミネ": "両手剣", "カーヴェ": "両手剣", "ディシア": "両手剣", "ドリー": "両手剣",
    "レザー": "両手剣", "重雲": "両手剣", "ディルック": "両手剣", "辛炎": "両手剣",
    "ノエル": "両手剣", "荒瀧一斗": "両手剣", "早柚": "両手剣", "北斗": "両手剣",
    "エウルア": "両手剣",
    "チャスカ": "弓", "オロルン": "弓", "セトス": "弓", "シグウィン": "弓", "リネ": "弓",
    "ファルザン": "弓", "コレイ": "弓", "ティナリ": "弓", "夜蘭": "弓", "ディオナ": "弓",
    "タルタリヤ": "弓", "フィッシュル": "弓", "甘雨": "弓", "ウェンティ": "弓", "宵宮": "弓",
    "アンバー": "弓", "ゴロー": "弓", "九条裟羅": "弓",
    "イファ": "法器", "ヴァレサ": "法器", "夢見月瑞希": "法器", "藍硯": "法器", "シトラリ": "法器",
    "ムアラニ": "法器", "閑雲": "法器", "シャルロット": "法器", "ヌヴィレット": "法器",
    "リオセスリ": "法器", "白朮": "法器", "放浪者": "法器", "ナヒーダ": "法器",
    "鹿野院平蔵": "法器", "モナ": "法器", "バーバラ": "法器", "スクロース": "法器",
    "珊瑚宮心海": "法器", "煙緋": "法器", "クレー": "法器", "凝光": "法器", "八重神子": "法器",
    "リサ": "法器",
    "エスコフィエ": "長柄武器", "イアンサ": "長柄武器", "カチーナ": "長柄武器", "エミリエ": "長柄武器",
    "アルレッキーノ": "長柄武器", "シュヴルーズ": "長柄武器", "ミカ": "長柄武器", "ヨォーヨ": "長柄武器",
    "キャンディス": "長柄武器", "セノ": "長柄武器", "魈": "長柄武器", "香菱": "長柄武器",
    "雷電将軍": "長柄武器", "鍾離": "長柄武器", "胡桃": "長柄武器", "ロサリア": "長柄武器",
    "申鶴": "長柄武器", "トーマ": "長柄武器", "雲菫": "長柄武器"
};

const detailData = {
    "所持率100％": ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"],
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": characters,
    "武器種縛り": ["片手剣", "両手剣", "法器", "長柄武器", "弓"],
    "モノ元素縛り": ["風", "水", "氷", "炎", "雷", "岩", "草"],
    "各1.1縛り": ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
    "誕生月": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
    "アルファベット縛り": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
};

const detailResultsData = {
    "各1.1縛り": {
        "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
        "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス", "ヌヴィレット", "リオセスリ", "シロネン"],
        "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン"],
        "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
        "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
        "n.5": ["エウルア", "煙緋", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
        "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "エスコフィエ", "イファ"],
        "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス"],
        "n.8": ["鹿野院平蔵", "エミリエ"]
    },
    "誕生月": {
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
        "１１月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ"],
        "１２月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
    },
    "アルファベット縛り": {
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
    },
    "国縛り": {
        "モンド": ["モンド"], "璃月": ["璃月"], "稲妻": ["稲妻"], "スメール": ["スメール"],
        "フォンテーヌ": ["フォンテーヌ"], "ナタ": ["ナタ"], "スネージナヤ": ["スネージナヤ"],
        "例外": ["スカーク"]
    }
};

// グローバル状態
let playerCount = null, constraintCount = null, currentStep = null;
let currentConstraint = 1, currentPlayer = 1, currentItems = [];
let currentResult = null, excluded = new Map(); // プレイヤーごとの除外リスト
let bossResult = null, constraintResults = [], detailResults = {};
let mode = null, detailMode = null, spinCount = 0, currentSpin = 0;
let selectedChar = null;
let isSpinning = false, angle = 0, speed = 0, deceleration = null, stopTime = null;
let canvas, ctx, shuffledItems, originalIndices;

// 配列シャッフル
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[i], newArray[j]];
    }
    return newArray;
}

// イージング関数（線形減速）
function easeOutLinear(t) {
    return 1 - t;
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('roulette-canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        alert('キャンバスの初期化に失敗しました');
        return;
    }
    ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Canvas context not available');
        alert('キャンバスの初期化に失敗しました');
        return;
    }
    resetState();
});

// 状態リセット
function resetState() {
    playerCount = null;
    constraintCount = null;
    currentStep = null;
    currentConstraint = 1;
    currentPlayer = 1;
    currentItems = [];
    currentResult = null;
    excluded.clear();
    bossResult = null;
    constraintResults = [];
    detailResults = {};
    mode = null;
    detailMode = null;
    spinCount = 0;
    currentSpin = 0;
    selectedChar = null;
    isSpinning = false;
    angle = 0;
    speed = 0;
    deceleration = null;
    stopTime = null;
    shuffledItems = [];
    originalIndices = [];
    console.log('状態をリセットしました');
    showScreen('start-screen');
}

// 画面切り替え
function showScreen(screenId) {
    ['start-screen', 'roulette-screen', 'detail-select-screen', 'result-screen'].forEach(id => {
        const screen = document.getElementById(id);
        if (screen) screen.style.display = id === screenId ? 'block' : 'none';
    });
    if (screenId === 'roulette-screen') {
        const spinBtn = document.getElementById('spin-btn');
        const stopBtn = document.getElementById('stop-btn');
        const nextBtn = document.getElementById('next-btn');
        const noHaveBtn = document.getElementById('no-have-btn');
        const rerollBtn = document.getElementById('reroll-btn');
        if (spinBtn) spinBtn.disabled = false;
        if (stopBtn) stopBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        if (noHaveBtn) noHaveBtn.style.display = (mode === 'char' || mode === 'weapon') ? 'inline-block' : 'none';
        if (rerollBtn) rerollBtn.style.display = mode === 'boss' ? 'inline-block' : 'none';
    }
}

// 一括ルーレット開始
function startFullFlow() {
    const pc = parseInt(document.getElementById('player-count').value);
    const cc = parseInt(document.getElementById('constraint-count').value);
    if (isNaN(pc) || pc < 1 || pc > 4) {
        alert('プレイヤー数は1～4で入力してください');
        resetState();
        return;
    }
    if (isNaN(cc) || cc < 1 || cc > 10) {
        alert('縛りの数は1～10で入力してください');
        resetState();
        return;
    }
    playerCount = pc;
    constraintCount = cc;
    currentStep = 'boss';
    bossResult = null;
    constraintResults = [];
    detailResults = {};
    currentConstraint = 1;
    currentPlayer = 1;
    excluded.clear();
    startRoulette('boss', bosses, 'ボスルーレット');
}

// 個別ルーレット開始
function showIndividual(type) {
    const pc = parseInt(document.getElementById('player-count').value);
    if (isNaN(pc) || pc < 1 || pc > 4) {
        alert('プレイヤー数は1～4で入力してください');
        resetState();
        return;
    }
    playerCount = pc;
    currentPlayer = 1;
    spinCount = 1;
    currentSpin = 0;
    mode = type;
    excluded.clear();
    const items = type === 'boss' ? bosses : constraints;
    const title = type === 'boss' ? 'ボスルーレット' : '縛りルーレット';
    startRoulette(type, items, title);
}

// 詳細ルーレット選択画面
function showDetailSelect() {
    showScreen('detail-select-screen');
}

// 詳細ルーレット開始
function startDetailRoulette() {
    const type = document.getElementById('detail-type').value;
    const pc = parseInt(document.getElementById('detail-player-count').value);
    const sc = parseInt(document.getElementById('detail-spin-count').value);
    if (isNaN(pc) || pc < 1 || pc > 4) {
        alert('プレイヤー数は1～4で入力してください');
        resetState();
        return;
    }
    if (isNaN(sc) || sc < 1 || sc > 10) {
        alert('回数は1～10で入力してください');
        resetState();
        return;
    }
    playerCount = pc;
    spinCount = sc;
    currentSpin = 0;
    currentPlayer = 1;
    mode = 'detail';
    detailMode = type;
    excluded.clear();
    selectedChar = null;
    let items = detailData[type] || [];
    if (type === '国縛り' && items.includes("例外")) items = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"];
    startRoulette('detail', items, type);
}

// ルーレット開始
function startRoulette(type, items, title) {
    console.log(`ルーレット開始: ${title}, アイテム数: ${items.length}`);
    if (!canvas || !ctx) {
        console.error('Canvas or context not available');
        alert('キャンバスの初期化に失敗しました');
        resetState();
        return;
    }
    mode = type === 'char' || type === 'weapon' ? mode : type;
    currentItems = items;
    excluded.set(currentPlayer, excluded.get(currentPlayer) || []);
    isSpinning = false;
    angle = 0;
    speed = 0;
    deceleration = null;
    stopTime = null;
    currentResult = null;
    shuffledItems = [];
    originalIndices = [];
    showScreen('roulette-screen');
    const titleElement = document.getElementById('roulette-title');
    if (titleElement) titleElement.textContent = title;
    drawRoulette();
}

// ルーレット描画
function drawRoulette() {
    if (!canvas || !ctx) {
        console.error('Canvas or context not available');
        alert('キャンバスの初期化に失敗しました');
        resetState();
        return;
    }
    const items = currentItems.filter(item => !excluded.get(currentPlayer)?.includes(item));
    if (items.length === 0) {
        alert('選択可能なアイテムがありません');
        resetToStart();
        return;
    }
    shuffledItems = shuffleArray(items);
    originalIndices = shuffledItems.map(item => currentItems.indexOf(item));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const radius = canvas.width / 2 - 60;

    const arc = 2 * Math.PI / shuffledItems.length;
    shuffledItems.forEach((item, i) => {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, arc * i - angle, arc * (i + 1) - angle);
        ctx.fillStyle = `hsl(${i * 360 / shuffledItems.length}, 70%, 80%)`;
        ctx.fill();
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(arc * (i + 0.5) - angle);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        let displayText = item;
        if (mode === 'boss' && item.length > 10) displayText = item.slice(0, 10); // ボス名のみ10文字制限
        ctx.fillText(displayText, radius - 10, 0);
        ctx.restore();
    });

    // 赤い三角形（上部中央）
    const triangleSize = 20;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 10);
    ctx.lineTo(canvas.width / 2 - triangleSize, 40);
    ctx.lineTo(canvas.width / 2 + triangleSize, 40);
    ctx.fillStyle = 'red';
    ctx.fill();

    if (!isSpinning && currentResult) {
        const selectedIndex = shuffledItems.indexOf(currentResult);
        if (selectedIndex !== -1) {
            const startAngle = selectedIndex * arc - angle;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + arc);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 5;
            ctx.stroke();
        }
    }
}

// ルーレット回転
function spinRoulette() {
    if (isSpinning) return;
    isSpinning = true;
    angle = 0;
    speed = 0.3 + Math.random() * 0.1;
    deceleration = 0.001;
    stopTime = Date.now() + 5000;
    document.getElementById('spin-btn').disabled = true;
    document.getElementById('stop-btn').disabled = false;
    document.getElementById('next-btn').disabled = true;
    animate();
}

// ルーレットアニメーション
function animate() {
    if (!isSpinning) return;
    angle += speed;
    speed -= deceleration;
    if (speed <= 0 || Date.now() >= stopTime) {
        stopRoulette();
        return;
    }
    drawRoulette();
    requestAnimationFrame(animate);
}

// ルーレット停止
function stopRoulette() {
    if (!isSpinning) return;
    isSpinning = false;
    const arc = 2 * Math.PI / shuffledItems.length;
    const normalizedAngle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalizedAngle / arc) % shuffledItems.length;
    currentResult = shuffledItems[index];
    drawRoulette();
    document.getElementById('spin-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
    showPopup(currentResult);
}

// ポップアップ表示
function showPopup(result) {
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = `結果: ${result}`;
    popup.style.display = 'block';
    popup.style.opacity = '1';
    ['spin-btn', 'stop-btn', 'next-btn', 'no-have-btn', 'reroll-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.disabled = true;
    });
    setTimeout(closePopup, 5000); // 5秒後自動閉鎖
}

// ポップアップ閉じる
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
        ['spin-btn', 'stop-btn', 'next-btn', 'no-have-btn', 'reroll-btn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.disabled = false;
        });
        if (currentStep === 'boss' && mode === 'boss') {
            setTimeout(nextStep, 3000); // 3秒後次へ
        }
    }, 300);
}

// 「持っていない」処理
function rerunRoulette() {
    if (!currentResult) return;
    const playerExclusions = excluded.get(currentPlayer) || [];
    playerExclusions.push(currentResult);
    excluded.set(currentPlayer, playerExclusions);
    currentResult = null;
    closePopup();
    drawRoulette();
}

// 次へ進む
function nextStep() {
    if (!currentResult) return;
    if (mode === 'boss' && currentStep === 'boss') {
        bossResult = currentResult;
        currentStep = 'constraint';
        currentResult = null;
        excluded.clear();
        startRoulette('constraint', constraints, '縛りルーレット');
    } else if (mode === 'constraint' && currentStep === 'constraint') {
        constraintResults.push(currentResult);
        if (currentConstraint < constraintCount) {
            currentConstraint++;
            currentResult = null;
            excluded.clear();
            startRoulette('constraint', constraints, '縛りルーレット');
        } else {
            currentStep = 'detail';
            currentConstraint = 1;
            currentPlayer = 1;
            proceedToDetail();
        }
    } else if (mode === 'detail' && currentStep === 'detail') {
        if (detailMode === 'キャラ武器ルーレット') {
            if (!selectedChar) {
                selectedChar = currentResult;
                currentResult = null;
                excluded.set(currentPlayer, []);
                startRoulette('char', characters, 'キャラ選択');
            } else {
                saveDetailResult(`${selectedChar} - ${currentResult}`);
                selectedChar = null;
                proceedToNextPlayerOrConstraint();
            }
        } else {
            let result = currentResult;
            if (['各1.1縛り', '誕生月', 'アルファベット縛り'].includes(detailMode)) {
                result = detailResultsData[detailMode][currentResult].join(', ');
            } else if (detailMode === '国縛り' && currentResult === '例外') {
                result = 'スカーク';
            }
            saveDetailResult(result);
            proceedToNextPlayerOrConstraint();
        }
    } else if (mode === 'char' || mode === 'weapon') {
        saveDetailResult(currentResult);
        proceedToNextPlayerOrConstraint();
    }
}

// 詳細ルーレット処理
function proceedToDetail() {
    if (currentConstraint > constraintResults.length) {
        showResultScreen();
        return;
    }
    const constraint = constraintResults[currentConstraint - 1];
    detailMode = constraint;
    currentResult = null;
    excluded.set(currentPlayer, []);
    selectedChar = null;
    let items = detailData[constraint] || [];
    if (constraint === '国縛り' && items.includes("例外")) items = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"];
    if (constraint === 'UI非表示＋リロール' || constraint === '爆発禁止＋リロール') {
        currentConstraint++;
        proceedToDetail();
        return;
    }
    startRoulette('detail', items, constraint);
}

// 詳細結果保存
function saveDetailResult(result) {
    detailResults[currentConstraint] = detailResults[currentConstraint] || {};
    detailResults[currentConstraint][currentPlayer] = detailResults[currentConstraint][currentPlayer] || [];
    const existing = detailResults[currentConstraint][currentPlayer];
    if (!existing.includes(result)) existing.push(result); // 重複防止
}

// 個別結果保存
function saveIndividualResult() {
    detailResults[1] = detailResults[1] || {};
    detailResults[1][currentPlayer] = detailResults[1][currentPlayer] || [];
    const existing = detailResults[1][currentPlayer];
    if (!existing.includes(currentResult)) existing.push(currentResult); // 重複防止
    proceedToNextPlayerOrConstraint();
}

// 次のプレイヤー/縛りへ
function proceedToNextPlayerOrConstraint() {
    currentResult = null;
    excluded.set(currentPlayer, excluded.get(currentPlayer) || []);
    currentSpin++;
    if (currentSpin < spinCount || mode !== 'detail') {
        currentPlayer++;
        if (currentPlayer > playerCount) {
            currentPlayer = 1;
            currentSpin = 0;
            if (mode === 'detail') {
                currentConstraint++;
                if (currentConstraint > constraintCount) {
                    showResultScreen();
                    return;
                }
                proceedToDetail();
            } else {
                showResultScreen();
            }
        } else {
            if (mode === 'detail' && detailMode === 'キャラ武器ルーレット' && !selectedChar) {
                startRoulette('char', characters, 'キャラ選択');
            } else if (mode === 'weapon') {
                startRoulette(mode, weapons[charToWeapon[selectedChar]], '武器選択');
            } else {
                startRoulette(mode, currentItems, document.getElementById('roulette-title').textContent);
            }
        }
    } else {
        currentConstraint++;
        currentSpin = 0;
        currentPlayer = 1;
        if (currentConstraint > constraintCount) {
            showResultScreen();
            return;
        }
        proceedToDetail();
    }
}

// ボス再ルーレット
function rerollBoss() {
    bossResult = null;
    currentStep = 'boss';
    currentConstraint = 1;
    currentPlayer = 1;
    constraintResults = [];
    detailResults = {};
    excluded.clear();
    startRoulette('boss', bosses, 'ボスルーレット');
}

// 結果画面
function showResultScreen() {
    showScreen('result-screen');
    const bossResultElement = document.getElementById('boss-result');
    if (bossResultElement) bossResultElement.textContent = bossResult ? `ボス: ${bossResult}` : '';
    const playerResultsElement = document.getElementById('player-results');
    if (playerResultsElement) {
        playerResultsElement.innerHTML = '';
        for (let p = 1; p <= playerCount; p++) {
            const playerDiv = document.createElement('div');
            playerDiv.innerHTML = `<h3>プレイヤー${p}</h3>`;
            let results = '';
            for (let c = 1; c <= (mode === 'boss' || mode === 'constraint' ? 1 : constraintResults.length); c++) {
                const constraint = mode === 'boss' || mode === 'constraint' ? constraints[0] : constraintResults[c - 1];
                const details = detailResults[c]?.[p] || [];
                if (details.length) results += `${constraint}: ${details.join(', ')}<br>`;
            }
            playerDiv.innerHTML += `<p>${results}</p>`;
            playerResultsElement.appendChild(playerDiv);
        }
    }
}

// 最初に戻る
function resetToStart() {
    resetState();
    showScreen('start-screen');
}
