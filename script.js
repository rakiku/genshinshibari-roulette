// グローバル変数
let playerCount, constraintCount, currentStep, currentConstraint, currentPlayer, currentItems, currentResult, excluded;
let bossResult, constraintResults, detailResults;
let mode, detailMode, spinCount, currentSpin, selectedChar;
let isSpinning, angle, speed, deceleration, stopTime;
let canvas, ctx, shuffledItems, originalIndices;

// データ（以前提供されたものをそのまま使用）
const characters = [
    "旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー",
    "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ",
    "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離",
    "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮", "閑雲",
    "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮", "早柚", "雷電将軍", "九条裟羅", "珊瑚宮心海",
    "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵", "綺良々", "夢見月瑞希", "ティナリ", "コレイ",
    "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ", "レイラ", "放浪者", "ファルザン", "アルハイゼン", "ディシア",
    "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット", "リオセスリ", "シャルロット", "フリーナ", "ナヴィア",
    "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ",
    "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ", "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア"
];

const bosses = [
    "無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ",
    "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス",
    "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修雷",
    "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト",
    "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜",
    "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス", "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神",
    "アペプ", "吞星の鯨", "召使", "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム",
    "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ", "ジャプー", "リライ",
    "銅の掟", "ピーク", "戦羊・鉄爪", "微末"
];

const constraints = [
    "☆4キャラ武器", "回復禁止", "恒常☆5縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール",
    "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止",
    "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆1、聖遺物なし"
];

const detailData = {
    "所持率100％縛り": ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"],
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット",
        "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": characters,
    "武器種縛り": ["片手剣", "両手剣", "法器", "長柄武器", "弓"],
    "モノ元素縛り": ["風", "水", "氷", "炎", "雷", "岩", "草"],
    "各1.1縛り": ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
    "誕生月": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "アルファベット縛り": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
    "キャラ武器ルーレット": characters
};

const detailResultsData = {
    "各1.1縛り": {
        "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋",
            "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ",
            "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ",
            "キィニチ", "カチーナ"],
        "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス",
            "ヌヴィレット", "リオセスリ", "シロネン"],
        "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン"],
        "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
        "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
        "n.5": ["エウルア", "煙緋", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
        "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "エスコフィエ", "イファ"],
        "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス", "スカーク", "ダリア"],
        "n.8": ["鹿野院平蔵", "エミリエ"]
    },
    "誕生月": {
        "1月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
        "2月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
        "3月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
        "4月": ["ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック"],
        "5月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "フィッシュル", "セトス"],
        "6月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
        "7月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緋"],
        "8月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
        "9月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
        "10月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
        "11月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ"],
        "12月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
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
        "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク", "シロネン"],
        "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"],
        "V": ["ウェンティ", "ヴァレサ"],
        "W": ["放浪者"],
        "X": ["行秋", "魈", "香菱", "辛炎", "閑雲"],
        "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ"],
        "Z": ["鍾離"]
    }
};

const weapons = {
    "片手剣": [
        "厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "蒼耀",
        "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守",
        "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀",
        "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣",
        "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作",
        "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑",
        "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃",
        "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃"
    ],
    "両手剣": [
        "千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙",
        "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒",
        "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア",
        "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣",
        "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣",
        "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正",
        "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣",
        "傭兵の重剣", "理屈責め"
    ],
    "弓": [
        "冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲",
        "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術",
        "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水",
        "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓",
        "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦",
        "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓",
        "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵",
        "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓",
        "冬極の白星", "文使い"
    ],
    "法器": [
        "ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環",
        "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典",
        "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶",
        "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論",
        "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠",
        "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章",
        "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠",
        "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語",
        "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"
    ],
    "長柄武器": [
        "香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方",
        "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル",
        "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー",
        "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍",
        "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍",
        "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災",
        "旧貴族猟槍", "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍",
        "匣中滅龍", "死闘の槍", "「漁獲」"
    ]
};

const charToWeapon = {
    "旅人": "片手剣", "ジン": "片手剣", "アンバー": "弓", "リサ": "法器", "ガイア": "片手剣",
    "バーバラ": "法器", "ディルック": "両手剣", "レザー": "両手剣", "ウェンティ": "弓", "クレー": "法器",
    "ベネット": "片手剣", "ノエル": "両手剣", "フィッシュル": "弓", "スクロース": "法器", "モナ": "法器",
    "ディオナ": "弓", "アルベド": "片手剣", "ロサリア": "長柄武器", "エウルア": "両手剣", "ミカ": "長柄武器",
    "魈": "長柄武器", "北斗": "両手剣", "凝光": "法器", "香菱": "長柄武器", "行秋": "片手剣",
    "重雲": "両手剣", "七七": "片手剣", "刻晴": "片手剣", "タルタリヤ": "弓", "鍾離": "長柄武器",
    "辛炎": "両手剣", "甘雨": "弓", "胡桃": "長柄武器", "煙緋": "法器", "申鶴": "長柄武器",
    "雲菫": "長柄武器", "夜蘭": "弓", "ヨォーヨ": "長柄武器", "白朮": "法器", "閑雲": "法器",
    "嘉明": "両手剣", "藍硯": "法器", "神里綾華": "片手剣", "神里綾人": "片手剣", "楓原万葉": "片手剣",
    "宵宮": "弓", "早柚": "両手剣", "雷電将軍": "長柄武器", "九条裟羅": "弓", "珊瑚宮心海": "法器",
    "トーマ": "長柄武器", "荒瀧一斗": "両手剣", "ゴロー": "弓", "八重神子": "法器", "久岐忍": "片手剣",
    "鹿野院平蔵": "法器", "綺良々": "片手剣", "夢見月瑞希": "法器", "ティナリ": "弓", "コレイ": "弓",
    "ドリー": "両手剣", "セノ": "長柄武器", "キャンディス": "長柄武器", "ニィロウ": "片手剣", "ナヒーダ": "法器",
    "レイラ": "片手剣", "放浪者": "法器", "ファルザン": "弓", "アルハイゼン": "片手剣", "ディシア": "両手剣",
    "カーヴェ": "両手剣", "セトス": "弓", "リネ": "弓", "リネット": "片手剣", "フレミネ": "両手剣",
    "ヌヴィレット": "法器", "リオセスリ": "法器", "シャルロット": "法器", "フリーナ": "片手剣", "ナヴィア": "両手剣",
    "シュヴルーズ": "長柄武器", "千織": "片手剣", "アルレッキーノ": "長柄武器", "クロリンデ": "片手剣",
    "シグウィン": "弓", "エミリエ": "長柄武器", "エスコフィエ": "長柄武器", "ムアラニ": "法器", "カチーナ": "長柄武器",
    "キィニチ": "両手剣", "シロネン": "片手剣", "チャスカ": "弓", "オロルン": "弓", "シトラリ": "法器",
    "マーヴィカ": "両手剣", "ヴァレサ": "法器", "イファ": "法器", "イアンサ": "長柄武器", "スカーク": "片手剣",
    "ダリア": "片手剣"
};

// 配列シャッフル関数
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// イージング関数 (easeOutQuad)
function easeOutQuad(t) {
    return t * (2 - t);
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('roulette-canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    ctx = canvas.getContext('2d');
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
    excluded = [];
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
    stopTime = 0;
    shuffledItems = [];
    originalIndices = [];
    console.log('状態をリセットしました');
    document.getElementById('result').style.display = 'none';
    document.getElementById('popup').classList.remove('active');
}

// 画面表示切り替え
function showScreen(screenId) {
    ['start-screen', 'roulette-screen', 'detail-select-screen', 'result-screen'].forEach(id => {
        const screen = document.getElementById(id);
        if (screen) screen.style.display = id === screenId ? 'block' : 'none';
    });
    if (screenId === 'roulette-screen') {
        document.getElementById('spin-btn').disabled = false;
        document.getElementById('stop-btn').disabled = true;
        document.getElementById('next-btn').disabled = true;
        document.getElementById('no-have-btn').style.display = 'none';
        document.getElementById('reroll-btn').style.display = 'none';
    }
}

// 一括ルーレット開始
function startFullFlow() {
    console.log('一括ルーレット開始');
    const pc = parseInt(document.getElementById('player-count').value);
    const cc = parseInt(document.getElementById('constraint-count').value);
    if (isNaN(pc) || pc < 1 || pc > 4) {
        alert('プレイヤー数は1～4で入力してください');
        return;
    }
    if (isNaN(cc) || cc < 1 || cc > 10) {
        alert('縛りの数は1～10で入力してください');
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
    startRoulette('boss', bosses, 'ボスルーレット');
}

// 個別ルーレット開始
function showIndividual(type) {
    console.log(`個別ルーレット: ${type}`);
    if (type === 'detail') {
        showScreen('detail-select-screen');
    } else {
        const pc = parseInt(document.getElementById('player-count').value);
        if (isNaN(pc) || pc < 1 || pc > 4) {
            alert('プレイヤー数は1～4で入力してください');
            return;
        }
        playerCount = pc;
        currentPlayer = 1;
        spinCount = 1;
        currentSpin = 0;
        mode = type;
        const items = type === 'boss' ? bosses : constraints;
        const title = type === 'boss' ? 'ボスルーレット' : '縛りルーレット';
        startRoulette(type, items, title);
    }
}

// 詳細ルーレット開始
function startDetailRoulette(type) {
    console.log(`詳細ルーレット: ${type}`);
    const pc = parseInt(document.getElementById('detail-player-count').value);
    const sc = parseInt(document.getElementById('detail-spin-count').value);
    if (isNaN(pc) || pc < 1 || pc > 4) {
        alert('プレイヤー数は1～4で入力してください');
        return;
    }
    if (isNaN(sc) || sc < 1 || sc > 10) {
        alert('回数は1～10で入力してください');
        return;
    }
    playerCount = pc;
    spinCount = sc;
    currentSpin = 0;
    currentPlayer = 1;
    mode = 'detail';
    detailMode = type;
    excluded = [];
    selectedChar = null;
    if (type === 'キャラ武器ルーレット') {
        startRoulette('char', detailData[type], 'キャラ選択');
    } else {
        startRoulette('detail', detailData[type], type);
    }
}

// ルーレット開始
function startRoulette(type, items, title) {
    console.log(`ルーレット開始: ${title}, アイテム数: ${items.length}`);
    mode = type === 'char' || type === 'weapon' ? mode : type;
    currentItems = items;
    excluded = excluded || [];
    showScreen('roulette-screen');
    const titleElement = document.getElementById('roulette-title');
    if (titleElement) titleElement.textContent = title;
    const noHaveBtn = document.getElementById('no-have-btn');
    if (noHaveBtn) noHaveBtn.style.display = (type === 'char' || type === 'weapon') ? 'inline-block' : 'none';
    const rerollBtn = document.getElementById('reroll-btn');
    if (rerollBtn && type === 'boss') rerollBtn.style.display = 'inline-block';
    drawRoulette();
}

// ルーレット描画
function drawRoulette() {
    if (!ctx) {
        console.error('Canvas context not available');
        return;
    }
    const items = currentItems.filter(item => !excluded.includes(item));
    if (items.length === 0) {
        alert('選択可能なアイテムがありません');
        resetToStart();
        return;
    }
    shuffledItems = shuffleArray(items);
    originalIndices = shuffledItems.map(item => currentItems.indexOf(item));
    console.log('シャッフル済みアイテム:', shuffledItems);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const radius = canvas.width / 2;
    const arc = 2 * Math.PI / shuffledItems.length;
    shuffledItems.forEach((item, i) => {
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius - 10, arc * i, arc * (i + 1));
        ctx.fillStyle = `hsl(${i * 360 / shuffledItems.length}, 70%, 80%)`;
        ctx.fill();
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(arc * (i + 0.5));
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.fillText(item, radius - 20, 0);
        ctx.restore();
    });

    // 赤い三角形 (改善点4)
    ctx.beginPath();
    ctx.moveTo(radius, 10);
    ctx.lineTo(radius - 15, 30);
    ctx.lineTo(radius + 15, 30);
    ctx.fillStyle = 'red';
    ctx.fill();

    // 選択項目の赤い枠線 (改善点3)
    if (!isSpinning && currentResult) {
        const selectedIndex = shuffledItems.indexOf(currentResult);
        const startAngle = selectedIndex * arc;
        ctx.beginPath();
        ctx.arc(radius, radius, radius - 10, startAngle, startAngle + arc);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}

// ルーレット回転
function spinRoulette() {
    if (isSpinning) return;
    isSpinning = true;
    speed = Math.random() * 0.2 + 0.2;
    deceleration = 0.0005; // 初期減速
    document.getElementById('spin-btn').classList.add('disabled');
    document.getElementById('stop-btn').classList.remove('disabled');
    document.getElementById('next-btn').classList.add('disabled');
    animate();
}

// ルーレットアニメーション
function animate() {
    if (!isSpinning) return;
    angle += speed;
    speed -= deceleration;
    if (speed <= 0 || (stopTime && Date.now() >= stopTime)) {
        stopRoulette();
        return;
    }
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    drawRoulette();
    ctx.restore();
    requestAnimationFrame(animate);
}

// ルーレット停止
function stopRoulette() {
    if (!isSpinning) return;
    stopTime = Date.now() + (2000 + Math.random() * 3000); // 2～5秒 (改善点3)
    const progress = (Date.now() - (stopTime - (2000 + Math.random() * 3000))) / (2000 + Math.random() * 3000);
    speed = easeOutQuad(1 - progress) * (Math.random() * 0.2 + 0.2); // 滑らかな減速
    if (speed <= 0) {
        isSpinning = false;
        const adjustedAngle = (-angle + Math.PI) % (2 * Math.PI);
        const arc = 2 * Math.PI / shuffledItems.length;
        const index = Math.floor((2 * Math.PI - adjustedAngle) / arc) % shuffledItems.length;
        currentResult = shuffledItems[index];
        console.log('ルーレット結果:', currentResult);
        document.getElementById('spin-btn').classList.remove('disabled');
        document.getElementById('stop-btn').classList.add('disabled');
        document.getElementById('next-btn').classList.remove('disabled');
        showPopup(currentResult); // 改善点5
    } else {
        requestAnimationFrame(animate);
    }
}

// ポップアップ表示 (改善点5)
function showPopup(result) {
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = `結果: ${result}`;
    popup.classList.add('active');
    document.getElementById('spin-btn').classList.add('disabled');
    document.getElementById('stop-btn').classList.add('disabled');
    document.getElementById('next-btn').classList.add('disabled');
    document.getElementById('no-have-btn').classList.add('disabled');
    document.getElementById('reroll-btn').classList.add('disabled');
}

// ポップアップ閉じる (改善点5)
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
    document.getElementById('spin-btn').classList.remove('disabled');
    document.getElementById('stop-btn').classList.remove('disabled');
    document.getElementById('next-btn').classList.remove('disabled');
    document.getElementById('no-have-btn').classList.remove('disabled');
    document.getElementById('reroll-btn').classList.remove('disabled');
    if (mode === 'char' && detailMode === 'キャラ武器ルーレット') {
        selectedChar = currentResult;
        currentResult = null;
        excluded = [];
        startRoulette('weapon', weapons[charToWeapon[selectedChar]], '武器選択');
    } else if (excluded.length > 0) {
        currentResult = null;
        drawRoulette();
    }
}

// 「持っていない」ボタン
function rerunRoulette() {
    if (!currentResult) return;
    const titleElement = document.getElementById('roulette-title');
    if (!titleElement) return;
    excluded.push(currentResult);
    console.log('除外アイテム:', excluded);
    currentResult = null;
    closePopup();
    drawRoulette();
}

// 次へ進む
function nextStep() {
    if (!currentResult) return;
    console.log(`次へ: モード=${mode}, 詳細モード=${detailMode}, プレイヤー=${currentPlayer}, 縛り=${currentConstraint}`);
    if (mode === 'boss') {
        bossResult = currentResult;
        currentStep = 'constraint';
        currentResult = null;
        excluded = [];
        startRoulette('constraint', constraints, '縛りルーレット');
    } else if (mode === 'constraint') {
        constraintResults.push(currentResult);
        if (currentConstraint < constraintCount) {
            currentConstraint++;
            currentResult = null;
            excluded = [];
            startRoulette('constraint', constraints, '縛りルーレット');
        } else {
            currentStep = 'detail';
            currentConstraint = 1;
            currentPlayer = 1;
            proceedToDetail();
        }
    } else if (mode === 'detail') {
        if (detailMode === 'キャラ武器ルーレット') {
            if (!selectedChar) {
                selectedChar = currentResult;
                currentResult = null;
                excluded = [];
                startRoulette('weapon', weapons[charToWeapon[selectedChar]], '武器選択');
            } else {
                saveDetailResult(`${selectedChar} - ${currentResult}`);
                selectedChar = null;
                proceedToNextPlayerOrConstraint();
            }
        } else {
            let result = currentResult;
            if (detailMode === '各1.1縛り' || detailMode === '誕生月' || detailMode === 'アルファベット縛り') {
                result = detailResultsData[detailMode][currentResult].join(', ');
            }
            saveDetailResult(result);
            proceedToNextPlayerOrConstraint();
        }
    } else if (mode === 'boss' || mode === 'constraint') {
        saveIndividualResult();
    }
}

// 詳細ルーレットに進む
function proceedToDetail() {
    if (constraintResults.length === 0 || currentConstraint > constraintResults.length) {
        showResultScreen();
        return;
    }
    const constraint = constraintResults[currentConstraint - 1];
    if (!detailData[constraint]) {
        currentConstraint++;
        proceedToDetail();
        return;
    }
    detailMode = constraint;
    currentResult = null;
    excluded = [];
    selectedChar = null;
    startRoulette('detail', detailData[constraint], constraint);
}

// 詳細結果保存
function saveDetailResult(result) {
    if (!detailResults[currentConstraint]) {
        detailResults[currentConstraint] = {};
    }
    if (!detailResults[currentConstraint][currentPlayer]) {
        detailResults[currentConstraint][currentPlayer] = [];
    }
    detailResults[currentConstraint][currentPlayer].push(result);
}

// 個別結果保存
function saveIndividualResult() {
    detailResults[1] = detailResults[1] || {};
    detailResults[1][currentPlayer] = detailResults[1][currentPlayer] || [];
    detailResults[1][currentPlayer].push(currentResult);
    proceedToNextPlayerOrConstraint();
}

// 次のプレイヤーまたは縛りに進む
function proceedToNextPlayerOrConstraint() {
    currentResult = null;
    excluded = [];
    currentSpin++;
    if (currentSpin < spinCount || mode !== 'detail') {
        currentPlayer++;
        if (currentPlayer > playerCount) {
            currentPlayer = 1;
            currentSpin = 0;
            if (mode === 'detail') {
                currentConstraint++;
                if (currentConstraint > constraintCount || mode !== 'detail') {
                    showResultScreen();
                    return;
                }
                proceedToDetail();
            } else {
                showResultScreen();
            }
        } else {
            if (mode === 'detail' && detailMode === 'キャラ武器ルーレット') {
                startRoulette('char', detailData[detailMode], 'キャラ選択');
            } else {
                startRoulette(mode, currentItems, document.getElementById('roulette-title').textContent);
            }
        }
    } else {
        currentConstraint++;
        currentSpin = 0;
        currentPlayer = 1;
        if (currentConstraint > constraintCount || mode !== 'detail') {
            showResultScreen();
            return;
        }
        proceedToDetail();
    }
}

// ボス再ルーレット (改善点8)
function rerollBoss() {
    bossResult = null;
    currentStep = 'boss';
    currentConstraint = 1;
    currentPlayer = 1;
    constraintResults = [];
    detailResults = {};
    excluded = [];
    showScreen('roulette-screen');
    startRoulette('boss', bosses, 'ボスルーレット');
}

// 結果画面表示
function showResultScreen() {
    showScreen('result-screen');
    const bossResultElement = document.getElementById('boss-result');
    if (bossResultElement) {
        bossResultElement.textContent = bossResult ? `ボス: ${bossResult}` : '';
    }
    const playerResultsElement = document.getElementById('player-results');
    if (playerResultsElement) {
        playerResultsElement.innerHTML = '';
        for (let p = 1; p <= playerCount; p++) {
            const playerDiv = document.createElement('div');
            playerDiv.innerHTML = `<h4>プレイヤー${p}</h4>`;
            let results = '';
            if (mode === 'boss' || mode === 'constraint') {
                if (detailResults[1] && detailResults[1][p]) {
                    results = detailResults[1][p].join(', ');
                }
            } else {
                for (let c = 1; c <= constraintResults.length; c++) {
                    if (detailResults[c] && detailResults[c][p]) {
                        if (c === 1 && (constraintResults[c-1] === '国縛り' || constraintResults[c-1] === 'モノ元素縛り')) {
                            results += `${constraintResults[c-1]}: ${detailResults[c][p].join(', ')} (全プレイヤー)<br/>`;
                        } else {
                            results += `${constraintResults[c-1]}: ${detailResults[c][p].join(', ')}<br/>`;
                        }
                    }
                }
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
