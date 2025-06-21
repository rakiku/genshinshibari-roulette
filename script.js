// データの定義（提供されたデータをそのまま使用）
const bosses = [
    "鉄甲熔炎帝王", "アンドリアス", "ニニアン", "禍津御建鳴神命", "ディアンナラ", "恒常からくり陣形",
    "無相の炎", "正機の神", "無相の雷", "アペプ", "黄金王獣", "氷風組曲コッペリア", "リアム",
    "急凍樹", "戦羊・鉄爪", "赤璋巡岳府君", "銅の掟", "暴君・金焔のクク竜", "アビサルヴィシャップ",
    "実験用フィールド生成装置", "魔偶剣鬼", "迅電樹", "エンシェントヴィシャップ・岩", "氷風組曲コペリウス",
    "ジャプー", "召使", "微末", "輝ける溶岩の龍像", "千年真珠の海駿", "深罪の浸礼者", "グーシートース",
    "シネアス", "無相の草", "吞星の鯨", "異色三連星", "公子", "バラチコ", "半永久統制マトリックス",
    "純水精霊", "無相の風", "ヴィヴィアン", "山の王・貪食のユムカ竜", "深淵なるミミック・パピラ",
    "秘源機兵・機構デバイス", "山隠れの猊獣", "魔像レガトゥス", "キング＆クイーン", "無相の氷",
    "淑女", "兆載永劫ドレイク", "コシーホ", "秘源機兵・統御デバイス", "爆炎樹", "リライ",
    "迷える霊覚の修権者", "イゾルト", "若陀龍王", "遺跡サーペント", "無相の水", "雷音権現",
    "無相の岩", "水形タルパ", "風食ウェネト", "ロッキー", "マッシュラプトル", "ピーク"
];

const shibariList = [
    "☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ",
    "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り",
    "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り",
    "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし"
];

const countries = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"];
const elements = ["炎", "水", "氷", "岩", "草", "風", "雷"];
const weaponTypes = ["片手剣", "両手剣", "長柄武器", "法器", "弓"];
const versions = ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

// 国別キャラクター
const charactersByCountry = {
    "モンド": ["ミカ", "レザー", "アルベド", "ディオナ", "ディルック", "ノエル", "フィッシュル", "モナ", "バーバラ", "ロサリア", "スクロース", "ジン", "ベネット", "ウェンティ", "アンバー", "クレー", "ガイア", "エウルア", "リサ", "ダリア"],
    "璃月": ["藍硯", "嘉明", "閑雲", "白朮", "ヨォーヨ", "夜蘭", "魈", "香菱", "鍾離", "重雲", "辛炎", "行秋", "胡桃", "申鶴", "甘雨", "煙緋", "北斗", "刻晴", "凝光", "雲菫", "七七"],
    "稲妻": ["夢見月瑞希", "千織", "綺良々", "鹿野院平蔵", "久岐忍", "雷電将軍", "荒瀧一斗", "神里綾華", "神里綾人", "珊瑚宮心海", "楓原万葉", "早柚", "トーマ", "宵宮", "八重神子", "ゴロー", "九条裟羅"],
    "スメール": ["セトス", "カーヴェ", "ディシア", "アルハイゼン", "放浪者", "ファルザン", "レイラ", "ナヒーダ", "キャンディス", "セノ", "ニィロウ", "ドリー", "コレイ", "ティナリ"],
    "フォンテーヌ": ["エスコフィエ", "エミリエ", "シグウィン", "クロリンデ", "シュヴルーズ", "ナヴィア", "シャルロット", "フリーナ", "ヌヴィレット", "リオセスリ", "フレミネ", "リネ", "リネット"],
    "ナタ": ["イファ", "イアンサ", "ヴァレサ", "シトラリ", "マーヴィカ", "チャスカ", "オロルン", "シロネン", "ムアラニ", "カチーナ", "キィニチ"],
    "スネージナヤ": ["アルレッキーノ", "タルタリヤ"],
    "例外": ["旅人", "アーロイ", "スカーク"]
};

// 元素別キャラクター
const charactersByElement = {
    "炎": ["マーヴィカ", "アルレッキーノ", "嘉明", "シュヴルーズ", "リネ", "ディシア", "香菱", "ディルック", "辛炎", "胡桃", "ベネット", "煙緋", "トーマ", "宵宮", "アンバー", "クレー"],
    "水": ["ダリア", "ムアラニ", "シグウィン", "フリーナ", "ヌヴィレット", "キャンディス", "ニィロウ", "夜蘭", "タルタリヤ", "行秋", "モナ", "バーバラ", "神里綾人", "珊瑚宮心海"],
    "草": ["キィニチ", "エミリエ", "綺良々", "白朮", "カーヴェ", "アルハイゼン", "ヨォーヨ", "ナヒーダ", "コレイ", "ティナリ"],
    "雷": ["イアンサ", "ヴァレサ", "オロルン", "セトス", "クロリンデ", "セノ", "ドリー", "久岐忍", "雷電将軍", "レザー", "フィッシュル", "北斗", "刻晴", "八重神子", "九条裟羅", "リサ"],
    "風": ["イファ", "夢見月瑞希", "藍硯", "チャスカ", "閑雲", "リネット", "放浪者", "ファルザン", "鹿野院平蔵", "魈", "スクロース", "ジン", "ウェンティ", "楓原万葉", "早柚"],
    "氷": ["スカーク", "エスコフィエ", "シトラリ", "シャルロット", "リオセスリ", "フレミネ", "ミカ", "レイラ", "重雲", "ディオナ", "ロサリア", "神里綾華", "申鶴", "甘雨", "アーロイ", "ガイア", "エウルア", "七七"],
    "岩": ["シロネン", "カチーナ", "鍾離", "千織", "ナヴィア", "アルベド", "荒瀧一斗", "ノエル", "凝光", "ゴロー", "雲菫"]
};

// バージョン別キャラクター
const charactersByVersion = {
    "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
    "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス", "ヌヴィレット", "リオセスリ", "シロネン"],
    "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン"],
    "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
    "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
    "n.5": ["エウルア", "煙緋", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
    "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "アルレッキーノ", "エスコフィエ", "イファ"],
    "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス", "スカーク", "ダリア"],
    "n.8": ["鹿野院平蔵", "エミリエ"]
};

// 誕生月別キャラクター
const charactersByMonth = {
    "1月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
    "2月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
    "3月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
    "4月": ["アーロイ", "ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック"],
    "5月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "フィッシュル", "セトス", "ダリア"],
    "6月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
    "7月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緋"],
    "8月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
    "9月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
    "10月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
    "11月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ", "スカーク"],
    "12月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
};

// アルファベット別キャラクター
const charactersByAlphabet = {
    "A": ["荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー", "アーロイ"],
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

// キャラクターの武器種対応
const charactersByWeapon = {
    "片手剣": ["旅人", "シロネン", "クロリンデ", "千織", "フリーナ", "リネット", "綺良々", "アルハイゼン", "レイラ", "ニィロウ", "久岐忍", "アルベド", "行秋", "神里綾華", "神里綾人", "ジン", "ベネット", "楓原万葉", "刻晴", "ガイア", "七七", "スカーク", "ダリア"],
    "両手剣": ["マーヴィカ", "キィニチ", "嘉明", "ナヴィア", "フレミネ", "カーヴェ", "ディシア", "ドリー", "レザー", "重雲", "ディルック", "辛炎", "ノエル", "荒瀧一斗", "早柚", "北斗", "エウルア"],
    "弓": ["チャスカ", "オロルン", "セトス", "シグウィン", "リネ", "ファルザン", "コレイ", "ティナリ", "夜蘭", "ディオナ", "タルタリヤ", "フィッシュル", "甘雨", "ウェンティ", "宵宮", "アンバー", "ゴロー", "九条裟羅"],
    "法器": ["イファ", "ヴァレサ", "夢見月瑞希", "藍硯", "シトラリ", "ムアラニ", "閑雲", "シャルロット", "ヌヴィレット", "リオセスリ", "白朮", "放浪者", "ナヒーダ", "鹿野院平蔵", "モナ", "バーバラ", "スクロース", "珊瑚宮心海", "煙緋", "クレー", "凝光", "八重神子", "リサ"],
    "長柄武器": ["エスコフィエ", "イアンサ", "カチーナ", "エミリエ", "アルレッキーノ", "シュヴルーズ", "ミカ", "ヨォーヨ", "キャンディス", "セノ", "魈", "香菱", "雷電将軍", "鍾離", "胡桃", "ロサリア", "申鶴", "トーマ", "雲菫"]
};

// 武器種別武器
const weaponsByType = {
    "片手剣": [
        "厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切",
        "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ",
        "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心",
        "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣",
        "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣",
        "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣",
        "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟",
        "冷刃", "蒼耀"
    ],
    "両手剣": [
        "千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」",
        "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花",
        "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁",
        "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇",
        "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正",
        "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣",
        "理屈責め"
    ],
    "弓": [
        "冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦",
        "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍",
        "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌",
        "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩",
        "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人",
        "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ",
        "歴戦の狩猟弓", "冬極の白星", "文使い"
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
        "天空の脊", "「漁獲」", "喜多院十文字槍", "和璞鳶", "千岩長槍", "匣中滅龍", "死闘の槍"
    ]
};

// キャラルーレットのキャラクター
const characterRoulette = [
    "ティナリ", "フリーナ", "リサ", "イアンサ", "ドリー", "フレミネ", "ヴァレサ", "ニィロウ", "スクロース",
    "エスコフィエ", "神里綾人", "申鶴", "甘雨", "カーヴェ", "北斗", "スカーク", "シロネン", "重雲", "鍾離",
    "アンバー", "胡桃", "レザー", "閑雲", "マーヴィカ", "雷電将軍", "ベネット", "キャンディス", "アルハイゼン",
    "香菱", "白朮", "コレイ", "セノ", "雲菫", "ヨォーヨ", "ノエル", "ディルック", "セトス", "宵宮", "フィッシュル",
    "ロサリア", "エウルア", "ミカ", "ナヴィア", "八重神子", "リオセスリ", "神里綾華", "カチーナ", "ムアラニ",
    "行秋", "辛炎", "シュヴルーズ", "ジン", "夜蘭", "楓原万葉", "荒瀧一斗", "リネ", "モナ", "ガイア", "イファ",
    "ディオナ", "アルベド", "刻晴", "久岐忍", "魈", "ゴロー", "九条裟羅", "綺良々", "ヌヴィレット", "藍硯",
    "シグウィン", "シトラリ", "タルタリヤ", "ダリア", "トーマ", "リネット", "放浪者", "夢見月瑞希", "七七", "煙緋",
    "キィニチ", "クロリンデ", "珊瑚宮心海", "ファルザン", "バーバラ", "レイラ", "ナヒーダ", "嘉明", "早柚",
    "ディシア", "ウェンティ", "鹿野院平蔵", "シャルロット", "チャスカ", "アルレッキーノ", "凝光", "クレー",
    "オロルン", "エミリエ", "千織", "旅人"
];

// 所持率100％キャラクター
const owned100 = ["旅人", "香菱", "ガイア", "コレイ", "ノエル", "リサ", "バーバラ", "アンバー"];

// 恒常☆５キャラクター
const standard5Stars = ["ジン", "ディルック", "ディシア", "夢見月瑞希", "七七", "モナ", "ティナリ"];

// 恒常☆５武器
const standard5StarWeapons = [
    "天空の巻", "天空の翼", "天空の脊", "天空の傲", "天空の刃", "和璞鳶", "アモスの弓", "狼の末路",
    "四風原典", "風鷹剣"
];

// ☆５キャラクター
const fiveStarCharacters = [
    "スカーク", "エスコフィエ", "ヴァレサ", "夢見月瑞希", "シトラリ", "マーヴィカ", "チャスカ", "シロネン",
    "ムアラニ", "キィニチ", "エミリエ", "シグウィン", "クロリンデ", "アルレッキーノ", "千織", "閑雲", "ナヴィア",
    "フリーナ", "ヌヴィレット", "リオセスリ", "リネ", "白朮", "ディシア", "アルハイゼン", "放浪者", "ナヒーダ",
    "セノ", "ニィロウ", "ティナリ", "夜蘭", "魈", "雷電将軍", "アルベド", "鍾離", "ディルック", "タルタリヤ",
    "モナ", "荒瀧一斗", "胡桃", "神里綾華", "神里綾人", "申鶴", "甘雨", "ジン", "珊瑚宮心海", "ウェンティ",
    "楓原万葉", "宵宮", "アーロイ", "クレー", "刻晴", "八重神子", "エウルア", "七七", "旅人"
];

// ☆４キャラクター
const fourStarCharacters = [
    "ダリア", "イファ", "イアンサ", "藍硯", "オロルン", "カチーナ", "セトス", "嘉明", "シュヴルーズ",
    "シャルロット", "フレミネ", "リネット", "綺良々", "カーヴェ", "ミカ", "ヨォーヨ", "ファルザン", "レイラ",
    "キャンディス", "ドリー", "コレイ", "鹿野院平蔵", "久岐忍", "香菱", "レザー", "重雲", "ディオナ", "辛炎",
    "ノエル", "行秋", "フィッシュル", "バーバラ", "ロサリア", "スクロース", "ベネット", "煙緋", "早柚",
    "トーマ", "アンバー", "北斗", "ガイア", "凝光", "ゴロー", "雲菫", "九条裟羅", "リサ"
];

// グローバル変数
let currentRoulette = null;
let currentItems = [];
let currentType = "";
let rotation = 0;
let isSpinning = false;
let allResults = {};
let currentStep = 0;
let excludedItems = new Set();
let currentPlayer = 0;
let currentShibariIndex = 0;
let selectedCharacter = null;

// 画面切り替え
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    resetRoulette();
}

// ルーレットのリセット
function resetRoulette() {
    currentRoulette = null;
    currentItems = [];
    currentType = "";
    rotation = 0;
    isSpinning = false;
    selectedCharacter = null;
    document.querySelectorAll('.roulette-wheel').forEach(wheel => {
        wheel.innerHTML = "";
        wheel.style.transform = "rotate(0deg)";
    });
    document.querySelectorAll('button[id^="start-"]').forEach(btn => btn.disabled = false);
    document.querySelectorAll('button[id^="stop-"]').forEach(btn => btn.disabled = true);
}

// ルーレットの初期化
function initRoulette(type, items) {
    if (items.length === 0) {
        alert("選択可能な項目がありません。条件を再確認してください。");
        showScreen('home');
        return;
    }
    currentType = type;
    currentItems = [...items];
    const wheel = document.getElementById(`${type}-roulette-wheel`);
    wheel.innerHTML = "";
    const angleStep = 360 / items.length;
    items.forEach((item, index) => {
        const span = document.createElement('span');
        span.textContent = item;
        span.style.transform = `rotate(${angleStep * index}deg) translateY(-130px) rotate(-${angleStep * index}deg)`;
        wheel.appendChild(span);
    });
    currentRoulette = wheel;
}

// ルーレットの開始
function startRoulette(type) {
    if (isSpinning) return;
    isSpinning = true;
    document.getElementById(`start-${type}`).disabled = true;
    document.getElementById(`stop-${type}`).disabled = false;

    rotation += 360 * (5 + Math.random() * 3); // 5～8回転
    currentRoulette.style.transition = "transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)";
    currentRoulette.style.transform = `rotate(${rotation}deg)`;
}

// ルーレットの停止
function stopRoulette(type) {
    if (!isSpinning) return;
    isSpinning = false;
    document.getElementById(`stop-${type}`).disabled = true;

    // 選択された項目の計算
    const angle = rotation % 360;
    const itemCount = currentItems.length;
    const angleStep = 360 / itemCount;
    const selectedIndex = Math.floor((360 - angle + angleStep / 2) / angleStep) % itemCount;
    const selectedItem = currentItems[selectedIndex];

    showPopup(selectedItem);
}

// ポップアップ表示
function showPopup(result) {
    document.getElementById('popup-result').textContent = result;
    document.getElementById('popup').classList.add('active');
}

// ポップアップを閉じる
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

// 結果ポップアップを閉じる
function closeResultPopup() {
    document.getElementById('result-popup').classList.remove('active');
    showScreen('home');
}

// 次のステップへ
function nextStep() {
    const result = document.getElementById('popup-result').textContent;
    closePopup();

    if (currentType === "boss") {
        allResults.boss = result;
        if (currentType === "all") {
            runNextAllStep();
        }
    } else if (currentType === "shibari" || (currentType === "all" && currentStep <= allResults.shibariCount + 1)) {
        allResults.players[currentPlayer] = allResults.players[currentPlayer] || { shibari: [] };
        allResults.players[currentPlayer].shibari.push({ name: result });
        handleShibariResult(result);
    } else if (currentType === "select") {
        allResults.selected = result;
    } else if (currentType === "all" && currentStep > allResults.shibariCount + 1) {
        const player = allResults.players[currentPlayer];
        const lastShibari = player.shibari[player.shibari.length - 1];
        if (lastShibari.name === "キャラ武器ルーレット" && !lastShibari.weapon) {
            lastShibari.character = result;
            selectedCharacter = result;
            const weaponType = Object.keys(charactersByWeapon).find(type =>
                charactersByWeapon[type].includes(result)
            );
            currentItems = applyWeaponConstraints(weaponsByType[weaponType]);
            startRoulette("all");
        } else {
            lastShibari.detail = result;
            runNextAllStep();
        }
    }
}

// 所持していない場合の処理
function excludeAndRedraw() {
    const result = document.getElementById('popup-result').textContent;
    excludedItems.add(result);
    currentItems = currentItems.filter(item => !excludedItems.has(item));
    if (currentItems.length === 0) {
        alert("選択可能な項目がありません。条件を再確認してください。");
        showScreen('home');
        return;
    }
    closePopup();
    resetRoulette();
    initRoulette(currentType, currentItems);
    startRoulette(currentType);
}

// 縛りの結果を処理
function handleShibariResult(shibari) {
    const shibariIndex = shibariList.indexOf(shibari) + 1;
    const detailedShibari = ["5", "10", "11", "12", "16", "17", "18", "19"];
    if (detailedShibari.includes(shibariIndex.toString())) {
        let items = [];
        switch (shibariIndex) {
            case 5:
                items = countries;
                break;
            case 10:
                items = applyCharacterConstraints(characterRoulette);
                break;
            case 11:
                items = weaponTypes;
                break;
            case 12:
                items = applyCharacterConstraints(characterRoulette);
                break;
            case 16:
                items = elements;
                break;
            case 17:
                items = versions;
                break;
            case 18:
                items = months;
                break;
            case 19:
                items = alphabets;
                break;
        }
        if (currentType === "all") {
            currentItems = items;
            initRoulette("all", items);
            startRoulette("all");
        } else {
            initRoulette("shibari", items);
            startRoulette("shibari");
        }
    } else if (currentType === "all") {
        runNextAllStep();
    }
}

// キャラクターの制約を適用
function applyCharacterConstraints(items) {
    let filtered = [...items];
    const player = allResults.players[currentPlayer];
    if (player && player.shibari.some(s => s.name === "恒常☆５縛り")) {
        filtered = filtered.filter(item => standard5Stars.includes(item));
    }
    if (player && player.shibari.some(s => s.name === "所持率100％縛り")) {
        filtered = filtered.filter(item => owned100.includes(item));
    }
    if (player && player.shibari.some(s => s.name === "国縛り" && s.detail)) {
        filtered = filtered.filter(item => charactersByCountry[s.detail].includes(item));
    }
    if (player && player.shibari.some(s => s.name === "モノ元素縛り" && s.detail)) {
        filtered = filtered.filter(item => charactersByElement[s.detail].includes(item));
    }
    if (player && player.shibari.some(s => s.name === "各1.1縛り" && s.detail)) {
        filtered = filtered.filter(item => charactersByVersion[s.detail].includes(item));
    }
    if (player && player.shibari.some(s => s.name === "誕生月" && s.detail)) {
        filtered = filtered.filter(item => charactersByMonth[s.detail].includes(item));
    }
    if (player && player.shibari.some(s => s.name === "アルファベット縛り" && s.detail)) {
        filtered = filtered.filter(item => charactersByAlphabet[s.detail].includes(item));
    }
    if (player && player.shibari.some(s => s.name === "☆４キャラ武器")) {
        filtered = filtered.filter(item => fourStarCharacters.includes(item));
    }
    if (player && player.shibari.some(s => s.name === "初期キャラのみ")) {
        filtered = filtered.filter(item => owned100.includes(item));
    }
    filtered = filtered.filter(item => !excludedItems.has(item));
    return filtered.length > 0 ? filtered : items;
}

// 武器の制約を適用
function applyWeaponConstraints(items) {
    let filtered = [...items];
    const player = allResults.players[currentPlayer];
    if (player && player.shibari.some(s => s.name === "恒常☆５縛り")) {
        filtered = filtered.filter(item => standard5StarWeapons.includes(item));
    }
    filtered = filtered.filter(item => !excludedItems.has(item));
    return filtered.length > 0 ? filtered : items;
}

// 縛りを選んでルーレット
function startSelectedShibari() {
    const selected = document.getElementById('shibari-select').value;
    let items = [];
    switch (parseInt(selected)) {
        case 5:
            items = countries;
            break;
        case 10:
            items = applyCharacterConstraints(characterRoulette);
            break;
        case 11:
            items = weaponTypes;
            break;
        case 12:
            items = applyCharacterConstraints(characterRoulette);
            break;
        case 16:
            items = elements;
            break;
        case 17:
            items = versions;
            break;
        case 18:
            items = months;
            break;
        case 19:
            items = alphabets;
            break;
    }
    initRoulette("select", items);
    document.getElementById('start-select').style.display = "inline-block";
    document.getElementById('stop-select').style.display = "inline-block";
}

// 一括ルーレットの開始
function startAllInOne() {
    allResults = {
        boss: null,
        players: Array.from({ length: parseInt(document.getElementById('player-count').value) }, () => ({
            shibari: []
        })),
        playerCount: parseInt(document.getElementById('player-count').value),
        shibariCount: parseInt(document.getElementById('shibari-count').value)
    };
    currentStep = 0;
    currentPlayer = 0;
    currentShibariIndex = 0;
    excludedItems.clear();
    currentType = "all";
    runNextAllStep();
}

// 一括ルーレットのステップ数
function getAllSteps() {
    let steps = 1; // ボス
    allResults.players.forEach(player => {
        steps += allResults.shibariCount;
        player.shibari.forEach(shibari => {
            const idx = shibariList.indexOf(shibari.name) + 1;
            if (["5", "10", "11", "12", "16", "17", "18", "19"].includes(idx.toString())) {
                steps++;
            }
            if (shibari.name === "キャラ武器ルーレット") {
                steps++; // 武器ルーレット
            }
        });
    });
    return steps;
}

// 一括ルーレットの次のステップ
function runNextAllStep() {
    currentStep++;
    if (currentStep === 1) {
        // ボスルーレット
        initRoulette("all", bosses);
        startRoulette("all");
    } else if (currentShibariIndex < allResults.shibariCount) {
        // 縛りルーレット
        initRoulette("all", shibariList.filter(s => !allResults.players[currentPlayer].shibari.some(p => p.name === s)));
        startRoulette("all");
        currentShibariIndex++;
    } else if (currentPlayer < allResults.playerCount - 1) {
        // 次のプレイヤーへ
        currentPlayer++;
        currentShibariIndex = 0;
        runNextAllStep();
    } else {
        // 結果表示
        showResult();
    }
}

// 結果表示
function showResult() {
    let resultText = `<strong>ボス:</strong> ${allResults.boss}<br><br>`;
    resultText += "<strong>全体共通の縛り:</strong><br>";
    const commonShibari = new Set();
    allResults.players.forEach(player => {
        player.shibari.forEach(s => {
            if (["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "初期キャラのみ",
                 "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "聖遺物禁止",
                 "爆発禁止＋リロール", "旅人縛り", "☆１、聖遺物なし"].includes(s.name)) {
                commonShibari.add(s.name);
            }
        });
    });
    if (commonShibari.size === 0) {
        resultText += "なし<br>";
    } else {
        commonShibari.forEach(s => {
            resultText += `- ${s}<br>`;
        });
    }

    allResults.players.forEach((player, index) => {
        resultText += `<br><strong>プレイヤー${index + 1}:</strong><br>`;
        player.shibari.forEach(s => {
            if (["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り",
                 "各1.1縛り", "誕生月", "アルファベット縛り"].includes(s.name)) {
                resultText += `- ${s.name}`;
                if (s.detail) {
                    resultText += `: ${s.detail}`;
                }
                if (s.name === "キャラ武器ルーレット" && s.character && s.weapon) {
                    resultText += ` (キャラ: ${s.character}, 武器: ${s.weapon})`;
                }
                resultText += "<br>";
            }
        });
    });

    document.getElementById('result-content').innerHTML = resultText;
    document.getElementById('result-popup').classList.add('active');
}
