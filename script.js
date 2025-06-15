// データ定義
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
    "ジャプー", "リライ", "銅の掟", "ピーク", "戦羊・鉄爪", "微末"
];

const constraints = [
    "☆4キャラ武器", "回復禁止", "恒常☆5縛り", "所持率100％縛り", "国縛り", "初期キャラのみ",
    "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット",
    "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り",
    "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆1、聖遺物なし"
];

const countries = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"];
const initialCharacters = [
    "旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗",
    "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック",
    "七七", "モナ", "刻晴", "ウェンティ", "クレー"
];
const characters = [
    "旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ",
    "クレー", "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド",
    "ロサリア", "エウルア", "ミカ", "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴",
    "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮",
    "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮", "早柚", "雷電将軍", "九条裟羅",
    "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵", "綺良々",
    "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ",
    "レイラ", "放浪者", "ファルザン", "アルハイゼン", "ディシア", "カーヴェ", "セトス", "リネ",
    "リネット", "フレミネ", "ヌヴィレット", "リオセスリ", "シャルロット", "フリーナ", "ナヴィア",
    "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ",
    "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ",
    "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア", "アーロイ"
];
const weaponTypes = ["片手剣", "両手剣", "長柄武器", "法器", "弓"];
const elements = ["風", "岩", "雷", "草", "水", "炎", "氷"];
const versions = ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

const characterWeaponTypes = {
    "長柄武器": ["エスコフィエ", "イアンサ", "カチーナ", "エミリエ", "アルレッキーノ", "シュヴルーズ", "ミカ", "ヨォーヨ", "キャンディス", "セノ", "魈", "香菱", "雷電将軍", "鍾離", "胡桃", "ロサリア", "申鶴", "トーマ", "雲菫"],
    "法器": ["イファ", "ヴァレサ", "夢見月瑞希", "藍硯", "シトラリ", "ムアラニ", "閑雲", "シャルロット", "ヌヴィレット", "リオセスリ", "白朮", "放浪者", "ナヒーダ", "鹿野院平蔵", "モナ", "バーバラ", "スクロース", "珊瑚宮心海", "煙緋", "クレー", "凝光", "八重神子", "リサ"],
    "弓": ["チャスカ", "オロルン", "セトス", "シグウィン", "リネ", "ファルザン", "コレイ", "ティナリ", "夜蘭", "ディオナ", "タルタリヤ", "フィッシュル", "甘雨", "ウェンティ", "宵宮", "アンバー", "ゴロー", "九条裟羅"],
    "両手剣": ["マーヴィカ", "キィニチ", "嘉明", "ナヴィア", "フレミネ", "カーヴェ", "ディシア", "ドリー", "レザー", "重雲", "ディルック", "辛炎", "ノエル", "荒瀧一斗", "早柚", "北斗", "エウルア"],
    "片手剣": ["旅人", "シロネン", "クロリンデ", "千織", "フリーナ", "リネット", "綺良々", "アルハイゼン", "レイラ", "ニィロウ", "久岐忍", "アルベド", "行秋", "神里綾華", "神里綾人", "ジン", "ベネット", "楓原万葉", "刻晴", "ガイア", "七七", "スカーク", "ダリア", "アーロイ"]
};

const weapons = {
    "長柄武器": ["香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍", "「漁獲」", "匣中滅龍", "死闘の槍"],
    "法器": ["ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"],
    "弓": ["冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"],
    "両手剣": ["千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"],
    "片手剣": ["厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"]
};

const birthMonths = {
    "1月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
    "2月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
    "3月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
    "4月": ["ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック", "アーロイ"],
    "5月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "ダリア", "フィッシュル", "セトス"],
    "6月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
    "7月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緋"],
    "8月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
    "9月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
    "10月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
    "11月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ", "スカーク"],
    "12月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
};

const alphabetsData = {
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

const versionData = {
    "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
    "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス", "ヌヴィレット", "リオセスリ", "シロネン"],
    "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン", "アーロイ"],
    "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
    "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
    "n.5": ["エウルア", "煙緋", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
    "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "エスコフィエ", "イファ"],
    "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス", "スカーク", "ダリア"],
    "n.8": ["鹿野院平蔵", "エミリエ"]
};

const elementData = {
    "炎": ["マーヴィカ", "アルレッキーノ", "嘉明", "シュヴルーズ", "リネ", "ディシア", "香菱", "ディルック", "辛炎", "胡桃", "ベネット", "煙緋", "トーマ", "宵宮", "アンバー", "クレー"],
    "水": ["ダリア", "ムアラニ", "シグウィン", "フリーナ", "ヌヴィレット", "キャンディス", "ニィロウ", "夜蘭", "タルタリヤ", "行秋", "モナ", "バーバラ", "神里綾人", "珊瑚宮心海"],
    "草": ["キィニチ", "エミリエ", "綺良々", "白朮", "カーヴェ", "アルハイゼン", "ヨォーヨ", "ナヒーダ", "コレイ", "ティナリ"],
    "雷": ["イアンサ", "ヴァレサ", "オロルン", "セトス", "クロリンデ", "セノ", "ドリー", "久岐忍", "雷電将軍", "レザー", "フィッシュル", "北斗", "刻晴", "八重神子", "九条裟羅", "リサ"],
    "風": ["イファ", "夢見月瑞希", "藍硯", "チャスカ", "閑雲", "リネット", "放浪者", "ファルザン", "鹿野院平蔵", "魈", "スクロース", "ジン", "ウェンティ", "楓原万葉", "早柚"],
    "氷": ["スカーク", "エスコフィエ", "シトラリ", "シャルロット", "リオセスリ", "フレミネ", "ミカ", "レイラ", "重雲", "ディオナ", "ロサリア", "神里綾華", "申鶴", "甘雨", "アーロイ", "ガイア", "エウルア", "七七"],
    "岩": ["シロネン", "カチーナ", "鍾離", "千織", "ナヴィア", "アルベド", "荒瀧一斗", "ノエル", "凝光", "ゴロー", "雲菫"]
};

const countryData = {
    "モンド": ["ミカ", "レザー", "アルベド", "ディオナ", "ディルック", "ノエル", "フィッシュル", "モナ", "バーバラ", "ロサリア", "スクロース", "ジン", "ベネット", "ウェンティ", "アンバー", "クレー", "ガイア", "エウルア", "リサ"],
    "璃月": ["藍硯", "嘉明", "閑雲", "白朮", "ヨォーヨ", "夜蘭", "魈", "香菱", "鍾離", "重雲", "辛炎", "行秋", "胡桃", "申鶴", "甘雨", "煙緋", "北斗", "刻晴", "凝光", "雲菫", "七七"],
    "稲妻": ["夢見月瑞希", "千織", "綺良々", "鹿野院平蔵", "久岐忍", "雷電将軍", "荒瀧一斗", "神里綾華", "神里綾人", "珊瑚宮心海", "楓原万葉", "早柚", "トーマ", "宵宮", "八重神子", "ゴロー", "九条裟羅"],
    "スネージナヤ": ["アルレッキーノ", "タルタリヤ"],
    "スメール": ["セトス", "カーヴェ", "ディシア", "アルハイゼン", "放浪者", "ファルザン", "レイラ", "ナヒーダ", "キャンディス", "セノ", "ニィロウ", "ドリー", "コレイ", "ティナリ"],
    "フォンテーヌ": ["エスコフィエ", "エミリエ", "シグウィン", "クロリンデ", "シュヴルーズ", "ナヴィア", "シャルロット", "フリーナ", "ヌヴィレット", "リオセスリ", "フレミネ", "リネ", "リネット"],
    "ナタ": ["イファ", "イアンサ", "ヴァレサ", "シトラリ", "マーヴィカ", "チャスカ", "オロルン", "シロネン", "ムアラニ", "カチーナ", "キィニチ"],
    "例外": ["旅人", "アーロイ", "スカーク"]
};

const elementColors = {
    "水": "#00c0fe", "炎": "#fe6640", "雷": "#cc85ff", "氷": "#74E4E2",
    "風": "#36d6a0", "岩": "#F3AC11", "草": "#8dcc06"
};

// グローバル変数
let players = 1;
let numConstraints = 1;
let currentStep = 0;
let results = [];
let rouletteItems = [];
let spinning = false;
let selectedBoss = "";
let selectedConstraints = [];
let currentPlayer = 0;
let notOwnedItems = [];

// 画面切り替え
function showScreen(screenId) {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('roulette-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('about-screen').style.display = 'none';
    document.getElementById(screenId).style.display = 'block';
    document.getElementById('next').style.display = 'none';
    document.getElementById('show-result').style.display = 'none';
}

// ルーレット生成
function createRoulette(items) {
    const roulette = document.getElementById('roulette');
    roulette.innerHTML = '';
    rouletteItems = items.sort(() => Math.random() - 0.5);
    const angleStep = 360 / items.length;
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'roulette-item';
        div.textContent = item;
        const angle = angleStep * index;
        div.style.transform = `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg)`;
        roulette.appendChild(div);
    });
}

// ルーレット回転
function spinRoulette() {
    if (spinning) return;
    spinning = true;
    document.getElementById('spin').style.display = 'none';
    document.getElementById('stop').style.display = 'inline-block';
    let angle = 0;
    const fastSpin = setInterval(() => {
        angle += 20;
        document.getElementById('roulette').style.transform = `rotate(${angle}deg)`;
    }, 50);
    setTimeout(() => {
        clearInterval(fastSpin);
    }, 3000);
}

// ルーレット停止
function stopRoulette() {
    if (!spinning) return;
    spinning = false;
    document.getElementById('stop').style.display = 'none';
    let angle = parseFloat(document.getElementById('roulette').style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    const slowSpin = setInterval(() => {
        angle += 5;
        document.getElementById('roulette').style.transform = `rotate(${angle}deg)`;
    }, 50);
    setTimeout(() => {
        clearInterval(slowSpin);
        const totalAngle = angle % 360;
        const itemAngle = 360 / rouletteItems.length;
        const selectedIndex = Math.floor((360 - totalAngle) / itemAngle) % rouletteItems.length;
        const result = rouletteItems[selectedIndex];
        showPopup(result);
        handleResult(result);
    }, 5000);
}

// ポップアップ表示
function showPopup(result) {
    const popup = document.getElementById('popup');
    let color = '#FFFFFF';
    if (currentStep === 1 || (selectedConstraints[currentStep - 2] === "キャラルーレット") || 
        (selectedConstraints[currentStep - 2] === "キャラ武器ルーレット" && currentStep % 2 === 1)) {
        const charElement = Object.keys(elementData).find(e => elementData[e].includes(result));
        color = charElement ? elementColors[charElement] : '#FFFFFF';
    }
    popup.innerHTML = `結果: <span style="color: ${color}">${result}</span>`;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
        document.getElementById('next').style.display = 'inline-block';
        if (currentStep === 1 || selectedConstraints[currentStep - 2] === "キャラルーレット" || 
            selectedConstraints[currentStep - 2] === "キャラ武器ルーレット") {
            document.getElementById('not-owned').style.display = 'inline-block';
        }
    }, 5000);
}

// 結果処理
function handleResult(result) {
    if (currentStep === 0) {
        selectedBoss = result;
    } else {
        const constraint = selectedConstraints[currentStep - 2];
        if (currentStep === 1) {
            selectedConstraints.push(result);
        } else if (["国縛り", "キャラルーレット", "武器種縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].includes(constraint)) {
            results[currentPlayer].constraints[constraint] = result;
        } else if (constraint === "キャラ武器ルーレット") {
            if (currentStep % 2 === 0) {
                results[currentPlayer].constraints[constraint] = { character: results[currentPlayer].constraints[constraint], weapon: result };
            } else {
                results[currentPlayer].constraints[constraint] = result;
            }
        }
    }
}

// 次のステップへ
function nextStep() {
    document.getElementById('not-owned').style.display = 'none';
    currentStep++;
    const totalSteps = 1 + numConstraints * players + selectedConstraints.filter(c => c === "キャラ武器ルーレット").length * players;
    if (currentStep >= totalSteps) {
        checkContradictions();
        document.getElementById('next').style.display = 'none';
        document.getElementById('show-result').style.display = 'inline-block';
        return;
    }
    if (currentStep === 1 && currentPlayer === 0) {
        createRoulette(constraints.filter(c => !selectedConstraints.includes(c)));
    } else if (currentStep > 1) {
        const constraint = selectedConstraints[currentStep - 2];
        let items = [];
        switch (constraint) {
            case "国縛り": items = countries; break;
            case "初期キャラのみ": items = initialCharacters; break;
            case "キャラルーレット": items = characters.filter(c => !notOwnedItems.includes(c)); break;
            case "武器種縛り": items = weaponTypes; break;
            case "キャラ武器ルーレット":
                if (currentStep % 2 === 0) {
                    const char = results[currentPlayer].constraints[constraint];
                    const weaponType = Object.keys(characterWeaponTypes).find(type => characterWeaponTypes[type].includes(char));
                    items = weapons[weaponType].filter(w => !notOwnedItems.includes(w));
                } else {
                    items = characters.filter(c => !notOwnedItems.includes(c));
                }
                break;
            case "モノ元素縛り": items = elements; break;
            case "各1.1縛り": items = versions; break;
            case "誕生月": items = months; break;
            case "アルファベット縛り": items = alphabets; break;
            case "UI非表示＋リロール":
            case "爆発禁止＋リロール":
                selectedConstraints.pop();
                currentStep--;
                createRoulette(constraints.filter(c => !selectedConstraints.includes(c)));
                return;
        }
        createRoulette(items);
    }
    if ((currentStep - 1) % (numConstraints + (selectedConstraints.filter(c => c === "キャラ武器ルーレット").length)) === 0 && currentStep > 1) {
        currentPlayer++;
    }
    showScreen('roulette-screen');
}

// 矛盾チェック
function checkContradictions() {
    for (let p = 0; p < players; p++) {
        let availableChars = characters.slice();
        const playerConstraints = results[p].constraints;
        Object.keys(playerConstraints).forEach(constraint => {
            const value = playerConstraints[constraint];
            let filteredChars = [];
            switch (constraint) {
                case "☆4キャラ武器":
                    filteredChars = characters.filter(c => !["エスコフィエ", "ヴァレサ", "夢見月瑞希", "シトラリ", "マーヴィカ", "チャスカ", "シロネン", "ムアラニ", "キィニチ", "エミリエ", "シグウィン", "クロリンデ", "アルレッキーノ", "千織", "閑雲", "ナヴィア", "フリーナ", "ヌヴィレット", "リオセスリ", "リネ", "白朮", "ディシア", "アルハイゼン", "放浪者", "ナヒーダ", "セノ", "ニィロウ", "ティナリ", "夜蘭", "魈", "雷電将軍", "アルベド", "鍾離", "ディルック", "タルタリヤ", "モナ", "荒瀧一斗", "胡桃", "神里綾華", "神里綾人", "申鶴", "甘雨", "ジン", "珊瑚宮心海", "ウェンティ", "楓原万葉", "宵宮", "アーロイ", "クレー", "刻晴", "八重神子", "エウルア", "七七", "旅人"].includes(c));
                    break;
                case "恒常☆5縛り":
                    filteredChars = ["ティナリ", "ディシア", "ディルック", "刻晴", "七七", "ジン", "夢見月瑞希"];
                    break;
                case "所持率100％縛り":
                    filteredChars = ["旅人", "ガイア", "リサ", "アンバー", "香菱", "コレイ", "ノエル", "バーバラ"];
                    break;
                case "国縛り":
                    filteredChars = countryData[value];
                    break;
                case "初期キャラのみ":
                    filteredChars = initialCharacters;
                    break;
                case "キャラルーレット":
                    filteredChars = [value];
                    break;
                case "武器種縛り":
                    filteredChars = characterWeaponTypes[value];
                    break;
                case "キャラ武器ルーレット":
                    filteredChars = [value.character];
                    break;
                case "旅人縛り":
                    filteredChars = ["旅人"];
                    break;
                case "モノ元素縛り":
                    filteredChars = elementData[value];
                    break;
                case "各1.1縛り":
                    filteredChars = versionData[value];
                    break;
                case "誕生月":
                    filteredChars = birthMonths[value];
                    break;
                case "アルファベット縛り":
                    filteredChars = alphabetsData[value];
                    break;
            }
            availableChars = availableChars.filter(c => filteredChars.includes(c));
        });
        if (availableChars.length === 0) {
            const lastConstraint = selectedConstraints.pop();
            results[p].constraints = {};
            currentStep = 1 + p * numConstraints;
            currentPlayer = p;
            createRoulette(constraints.filter(c => !selectedConstraints.includes(c)));
            showScreen('roulette-screen');
            document.getElementById('next').style.display = 'none';
            alert("この縛りではキャラが選択できません。リロールします");
            return;
        }
    }
}

// リザルト表示
function showResult() {
    const resultScreen = document.getElementById('result-screen');
    let html = `<h2>ルーレット結果</h2><p>ボス: ${selectedBoss}</p>`;
    for (let p = 0; p < players; p++) {
        html += `<h3>プレイヤー${p + 1}</h3>`;
        const playerConstraints = results[p].constraints;
        Object.keys(playerConstraints).forEach(constraint => {
            let value = playerConstraints[constraint];
            let details = "";
            if (constraint === "キャラ武器ルーレット") {
                details = `${value.character}: ${value.weapon}`;
            } else if (["所持率100％縛り"].includes(constraint)) {
                details = value + "（旅人、ガイア、リサ、アンバー、香菱、コレイ、ノエル、バーバラ）";
            } else if (["国縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].includes(constraint)) {
                const charList = constraint === "国縛り" ? countryData[value] :
                                constraint === "モノ元素縛り" ? elementData[value] :
                                constraint === "各1.1縛り" ? versionData[value] :
                                constraint === "誕生月" ? birthMonths[value] :
                                alphabetsData[value];
                details = `${value}（${charList.join(", ")}）`;
            } else {
                details = value;
            }
            html += `<p>${constraint}: ${details}</p>`;
        });
    }
    resultScreen.innerHTML = html;
    showScreen('result-screen');
}

// 「このルーレットについて」ページ
function showAbout() {
    const aboutScreen = document.getElementById('about-screen');
    aboutScreen.innerHTML = `
        <h2>このルーレットについて</h2>
        <p>このルーレットは、普段遊んでいるサーバーでやっている縛りのルーレットをやりやすくしたいという目的のもと作成しています。できることはボスの抽選、縛りプレイの抽選、縛りの内容の抽選です。プレイ人数は原神のマルチできる人数1～4人、縛りの数は現実的に可能な4つまでとしています。</p>
        <p>このルーレットにおけるデータなどは作者が一人で追加しています。そのため、ミスなどがあるかもしれませんが発見した場合作者Twitter(<a href="https://x.com/rakiku_genshin">@rakiku_genshin</a>)に報告をお願いします。また、このルーレットを作成するにあたってAIを活用していますが、外部データ・推察・自動取得などは使用していません。</p>
        <h3>FAQ</h3>
        <p>Q: 所持していない武器が出たら？<br>A: 「持っていない」ボタンで項目を削除し再抽選。</p>
        <p>Q: キャラルーレットで被ったら？<br>A: 重複しないよう設計。</p>
        <p>Q: 縛りの重複はどう処理？<br>A: 重複しないよう設計。</p>
        <p>Q: 条件の矛盾が出た場合は？<br>A: 後に出た縛りを再抽選。詳しくは<a href="https://x.com/raku_genshin">@rakiku_genshin</a>まで。</p>
        <p>これは非公式のファンメイドとなっています。アップデート等は作者がやりたいときに頑張ります。</p>
    `;
    showScreen('about-screen');
}

// イベントリスナー
document.getElementById('all-roulette').addEventListener('click', () => {
    players = parseInt(document.getElementById('players').value);
    numConstraints = parseInt(document.getElementById('constraints').value);
    results = Array(players).fill().map(() => ({ constraints: {} }));
    currentStep = 0;
    currentPlayer = 0;
    selectedBoss = "";
    selectedConstraints = [];
    notOwnedItems = [];
    createRoulette(bosses);
    showScreen('roulette-screen');
});

document.getElementById('boss-roulette').addEventListener('click', () => {
    players = 1;
    numConstraints = 0;
    results = [{ constraints: {} }];
    currentStep = 0;
    currentPlayer = 0;
    createRoulette(bosses);
    showScreen('roulette-screen');
});

document.getElementById('constraint-roulette').addEventListener('click', () => {
    players = parseInt(document.getElementById('players').value);
    numConstraints = parseInt(document.getElementById('constraints').value);
    results = Array(players).fill().map(() => ({ constraints: {} }));
    currentStep = 1;
    currentPlayer = 0;
    selectedConstraints = [];
    createRoulette(constraints);
    showScreen('roulette-screen');
});

document.getElementById('select-constraint').addEventListener('click', () => {
    // 手動選択の実装は省略（要望があれば追加）
    alert("この機能は未実装です。");
});

document.getElementById('about').addEventListener('click', showAbout);
document.getElementById('spin').addEventListener('click', spinRoulette);
document.getElementById('stop').addEventListener('click', stopRoulette);
document.getElementById('next').addEventListener('click', nextStep);
document.getElementById('show-result').addEventListener('click', showResult);
document.getElementById('back').addEventListener('click', () => showScreen('initial-screen'));

document.getElementById('not-owned').addEventListener('click', () => {
    const lastResult = currentStep === 1 ? selectedConstraints[selectedConstraints.length - 1] : 
                      selectedConstraints[currentStep - 2] === "キャラ武器ルーレット" && currentStep % 2 === 0 ? 
                      results[currentPlayer].constraints["キャラ武器ルーレット"].weapon : 
                      results[currentPlayer].constraints[selectedConstraints[currentStep - 2]];
    notOwnedItems.push(lastResult);
    if (currentStep === 1) {
        selectedConstraints.pop();
        createRoulette(constraints.filter(c => !selectedConstraints.includes(c)));
    } else {
        delete results[currentPlayer].constraints[selectedConstraints[currentStep - 2]];
        nextStep();
    }
    showScreen('roulette-screen');
});
