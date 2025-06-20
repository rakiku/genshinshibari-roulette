// データ（提供されたデータをハードコード）
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
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": ["旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー", "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ", "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮", "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮", "早柚", "雷電将軍", "九条裟羅", "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵", "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ", "レイラ", "放浪者", "ファルザン", "アルハイゼン", "ディシア", "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット", "リオセスリ", "シャルロット", "フリーナ", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ", "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア", "アーロイ"],
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
    "弓": ["チャスカ", "オロルン", "セトス", "シグウィン", "リネ", "ファルザン", "コレイ", "ティナリ", "夜蘭", "ディオナ", "タルタリヤ", "フィッシュル", "甘雨", "ウェンティ", "宵宮", "アンバー", "ゴロー", "九条裟羅", "アーロイ"],
    "両手剣": ["マーヴィカ", "キィニチ", "嘉明", "ナヴィア", "フレミネ", "カーヴェ", "ディシア", "ドリー", "レザー", "重雲", "ディルック", "辛炎", "ノエル", "荒瀧一斗", "早柚", "北斗", "エウルア"],
    "片手剣": ["旅人", "シロネン", "クロリンデ", "千織", "フリーナ", "リネット", "綺良々", "アルハイゼン", "レイラ", "ニィロウ", "久岐忍", "アルベド", "行秋", "神里綾華", "神里綾人", "ジン", "ベネット", "楓原万葉", "刻晴", "ガイア", "七七", "スカーク", "ダリア"]
};

const birthMonth = {
    "１月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
    "２月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
    "３月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
    "４月": ["ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック", "アーロイ"],
    "５月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "フィッシュル", "セトス", "ダリア"],
    "６月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
    "７月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緋"],
    "８月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
    "９月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
    "１０月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
    "１１月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ", "スカーク"],
    "１２月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
};

const alphabet = {
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

const version = {
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

const elements = {
    "炎": ["マーヴィカ", "アルレッキーノ", "嘉明", "シュヴルーズ", "リネ", "ディシア", "香菱", "ディルック", "辛炎", "胡桃", "ベネット", "煙緋", "トーマ", "宵宮", "アンバー", "クレー"],
    "水": ["ダリア", "ムアラニ", "シグウィン", "フリーナ", "ヌヴィレット", "キャンディス", "ニィロウ", "夜蘭", "タルタリヤ", "行秋", "モナ", "バーバラ", "神里綾人", "珊瑚宮心海"],
    "草": ["キィニチ", "エミリエ", "綺良々", "白朮", "カーヴェ", "アルハイゼン", "ヨォーヨ", "ナヒーダ", "コレイ", "ティナリ"],
    "雷": ["イアンサ", "ヴァレサ", "オロルン", "セトス", "クロリンデ", "セノ", "ドリー", "久岐忍", "雷電将軍", "レザー", "フィッシュル", "北斗", "刻晴", "八重神子", "九条裟羅", "リサ"],
    "風": ["イファ", "夢見月瑞希", "藍硯", "チャスカ", "閑雲", "リネット", "放浪者", "ファルザン", "鹿野院平蔵", "魈", "スクロース", "ジン", "ウェンティ", "楓原万葉", "早柚"],
    "氷": ["スカーク", "エスコフィエ", "シトラリ", "シャルロット", "リオセスリ", "フレミネ", "ミカ", "レイラ", "重雲", "ディオナ", "ロサリア", "神里綾華", "申鶴", "甘雨", "アーロイ", "ガイア", "エウルア", "七七"],
    "岩": ["シロネン", "カチーナ", "鍾離", "千織", "ナヴィア", "アルベド", "荒瀧一斗", "ノエル", "凝光", "ゴロー", "雲菫"]
};

const countries = {
    "モンド": ["ミカ", "レザー", "アルベド", "ディオナ", "ディルック", "ノエル", "フィッシュル", "モナ", "バーバラ", "ロサリア", "スクロース", "ジン", "ベネット", "ウェンティ", "アンバー", "クレー", "ガイア", "エウルア", "リサ", "ダリア"],
    "璃月": ["藍硯", "嘉明", "閑雲", "白朮", "ヨォーヨ", "夜蘭", "魈", "香菱", "鍾離", "重雲", "辛炎", "行秋", "胡桃", "申鶴", "甘雨", "煙緋", "北斗", "刻晴", "凝光", "雲菫", "七七"],
    "稲妻": ["夢見月瑞希", "千織", "綺良々", "鹿野院平蔵", "久岐忍", "雷電将軍", "荒瀧一斗", "神里綾華", "神里綾人", "珊瑚宮心海", "楓原万葉", "早柚", "トーマ", "宵宮", "八重神子", "ゴロー", "九条裟羅"],
    "スメール": ["セトス", "カーヴェ", "ディシア", "アルハイゼン", "放浪者", "ファルザン", "レイラ", "ナヒーダ", "キャンディス", "セノ", "ニィロウ", "ドリー", "コレイ", "ティナリ"],
    "フォンテーヌ": ["エスコフィエ", "エミリエ", "シグウィン", "クロリンデ", "シュヴルーズ", "ナヴィア", "シャルロット", "フリーナ", "ヌヴィレット", "リオセスリ", "フレミネ", "リネ", "リネット"],
    "ナタ": ["イファ", "イアンサ", "ヴァレサ", "シトラリ", "マーヴィカ", "チャスカ", "オロルン", "シロネン", "ムアラニ", "カチーナ", "キィニチ"],
    "スネージナヤ": ["アルレッキーノ", "タルタリヤ", "スカーク"],
    "例外": ["旅人", "アーロイ", "スカーク"]
};

const constantFiveStar = ["ティナリ", "ディシア", "ディルック", "刻晴", "七七", "ジン", "夢見月瑞希"];
const owned100 = ["旅人", "ガイア", "リサ", "アンバー", "香菱", "コレイ", "ノエル", "バーバラ"];

const elementColors = {
    "水": "#00c0fe",
    "炎": "#fe6640",
    "雷": "#cc85ff",
    "氷": "#74E4E2",
    "風": "#36d6a0",
    "岩": "#F3AC11",
    "草": "#8dcc06"
};

// グローバル変数
let playerCount = 1;
let bindCount = 1;
let currentRoulette = null;
let rouletteItems = [];
let currentPlayer = 0;
let results = [];
let selectedBoss = null;
let selectedBinds = [];
let availableBinds = [...binds];
let isSpinning = false;
let spinAngle = 0;
let spinSpeed = 0;
const canvas = document.getElementById('roulette-canvas');
const ctx = canvas.getContext('2d');

// 画面切り替え
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function backToHome() {
    showScreen('home-screen');
    resetRoulette();
}

function showAboutPage() {
    showScreen('about-screen');
}

// ルーレット初期化
function resetRoulette() {
    playerCount = parseInt(document.getElementById('player-count').value);
    bindCount = parseInt(document.getElementById('bind-count').value);
    currentRoulette = null;
    rouletteItems = [];
    currentPlayer = 0;
    results = [];
    selectedBoss = null;
    selectedBinds = [];
    availableBinds = [...binds];
    isSpinning = false;
    spinAngle = 0;
    spinSpeed = 0;
    document.getElementById('not-owned-button').classList.add('hidden');
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('result-button').classList.add('hidden');
}

// ルーレット開始
function startOneShotRoulette() {
    resetRoulette();
    currentRoulette = { type: 'boss', items: bosses };
    rouletteItems = [...bosses];
    showScreen('roulette-screen');
    document.getElementById('roulette-title').textContent = 'ボス選択';
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    drawRoulette();
}

function startBossRoulette() {
    resetRoulette();
    currentRoulette = { type: 'boss', items: bosses };
    rouletteItems = [...bosses];
    showScreen('roulette-screen');
    document.getElementById('roulette-title').textContent = 'ボス選択';
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    drawRoulette();
}

function startBindRoulette() {
    resetRoulette();
    currentRoulette = { type: 'bind', index: 0 };
    rouletteItems = [...availableBinds];
    showScreen('roulette-screen');
    document.getElementById('roulette-title').textContent = `縛り${currentRoulette.index + 1}選択`;
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    drawRoulette();
}

function selectBindManually() {
    resetRoulette();
    showScreen('bind-select-screen');
    const select = document.getElementById('manual-bind-select');
    select.innerHTML = '';
    binds.forEach(bind => {
        const option = document.createElement('option');
        option.value = bind;
        option.textContent = bind;
        select.appendChild(option);
    });
}

function confirmManualBind() {
    const select = document.getElementById('manual-bind-select');
    const selected = Array.from(select.selectedOptions).map(option => option.value);
    if (selected.length > bindCount) {
        alert(`縛りは${bindCount}つまで選択可能です`);
        return;
    }
    selectedBinds = selected;
    availableBinds = binds.filter(b => !selectedBinds.includes(b));
    if (selectedBinds.length === 0) {
        showScreen('home-screen');
        return;
    }
    currentRoulette = { type: 'bind-sub', bind: selectedBinds[0], index: 0, player: 0 };
    startSubRoulette(selectedBinds[0], 0, 0);
}

// サブルーレット開始
function startSubRoulette(bind, bindIndex, player) {
    if (subRoulettes[bind]) {
        rouletteItems = [...subRoulettes[bind]];
        document.getElementById('roulette-title').textContent = `${bind}（プレイヤー${player + 1}）`;
        if (bind === 'キャラ武器ルーレット') {
            currentRoulette = { type: 'char-weapon-char', bind, bindIndex, player };
            rouletteItems = [...subRoulettes['キャラルーレット']].filter(c => !results.some(r => (r.type === 'char-weapon-char' || r.type === 'キャラルーレット') && r.value === c));
        } else {
            currentRoulette = { type: 'bind-sub', bind, bindIndex, player };
        }
    } else if (bind === 'UI非表示＋リロール' || bind === '爆発禁止＋リロール') {
        currentRoulette = { type: 'bind', index: bindIndex };
        rouletteItems = [...availableBinds];
        document.getElementById('roulette-title').textContent = `縛り${bindIndex + 1}選択（リロール）`;
    } else {
        results.push({ type: 'bind', bind, bindIndex, player, value: bind });
        nextRoulette();
        return;
    }
    showScreen('roulette-screen');
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    drawRoulette();
}

// ルーレット描画
function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const arc = 2 * Math.PI / rouletteItems.length;

    rouletteItems.forEach((item, i) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, i * arc + spinAngle, (i + 1) * arc + spinAngle);
        ctx.lineTo(centerX, centerY);
        const gradient = ctx.createLinearGradient(centerX, centerY - radius, centerX, centerY + radius);
        gradient.addColorStop(0, '#0000FF');
        gradient.addColorStop(1, '#800080');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = '#FFD700';
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(i * arc + arc / 2 + spinAngle);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Yu Gothic';
        ctx.textAlign = 'right';
        ctx.fillText(item, radius - 10, 5);
        ctx.restore();
    });
}

// ルーレット回転
function spinRoulette() {
    if (isSpinning) return;
    isSpinning = true;
    spinSpeed = Math.PI / 30; // 1秒に2周
    document.getElementById('spin-button').disabled = true;
    document.getElementById('stop-button').disabled = false;
    if (currentRoulette.type === 'char-weapon-char' || currentRoulette.type === 'char-weapon-weapon' || currentRoulette.type === 'キャラルーレット') {
        document.getElementById('not-owned-button').classList.remove('hidden');
    }
    animateRoulette();
}

function animateRoulette() {
    if (!isSpinning) return;
    spinAngle += spinSpeed;
    if (spinAngle >= 2 * Math.PI) spinAngle -= 2 * Math.PI;
    drawRoulette();
    requestAnimationFrame(animateRoulette);
}

function stopRoulette() {
    if (!isSpinning) return;
    isSpinning = false;
    let decelerationTime = 5000; // 5秒減速
    const initialSpeed = spinSpeed;
    const startTime = Date.now();

    function decelerate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / decelerationTime;
        if (progress >= 1) {
            spinSpeed = 0;
            showResultPopup();
            return;
        }
        spinSpeed = initialSpeed * (1 - progress);
        spinAngle += spinSpeed;
        if (spinAngle >= 2 * Math.PI) spinAngle -= 2 * Math.PI;
        drawRoulette();
        requestAnimationFrame(decelerate);
    }
    decelerate();
}

function showResultPopup() {
    const arc = 2 * Math.PI / rouletteItems.length;
    const index = Math.floor(((2 * Math.PI - spinAngle) % (2 * Math.PI)) / arc);
    const result = rouletteItems[index];
    const popupText = document.getElementById('popup-text');
    popupText.textContent = `結果：${result}`;
    if (currentRoulette.type === 'char-weapon-char' || currentRoulette.type === 'char-weapon-weapon' || currentRoulette.type === 'キャラルーレット') {
        const charElement = Object.keys(elements).find(e => elements[e].includes(result));
        popupText.style.color = charElement ? elementColors[charElement] : '#FFFFFF';
    } else {
        popupText.style.color = '#FFFFFF';
    }
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').disabled = false;
    setTimeout(() => {
        if (!document.getElementById('popup').classList.contains('hidden')) {
            closePopup();
        }
    }, 5000);

    // 結果保存
    if (currentRoulette.type === 'boss') {
        selectedBoss = result;
        results.push({ type: 'boss', value: result });
    } else if (currentRoulette.type === 'bind') {
        selectedBinds[currentRoulette.index] = result;
        availableBinds = availableBinds.filter(b => b !== result);
        results.push({ type: 'bind', bind: result, bindIndex: currentRoulette.index, player: 0, value: result });
    } else if (currentRoulette.type === 'bind-sub') {
        results.push({ type: 'bind-sub', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player, value: result });
    } else if (currentRoulette.type === 'char-weapon-char') {
        results.push({ type: 'char-weapon-char', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player, value: result });
    } else if (currentRoulette.type === 'char-weapon-weapon') {
        results.push({ type: 'char-weapon-weapon', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player, value: result });
    }

    // 矛盾チェック
    if (checkContradiction()) {
        document.getElementById('popup-text').textContent = 'この縛りではキャラが選択できません。リロールします';
        document.getElementById('popup').classList.remove('hidden');
        setTimeout(() => {
            removeAndReroll(true);
        }, 2000);
    } else {
        document.getElementById('next-button').classList.remove('hidden');
        if (isLastRoulette()) {
            document.getElementById('next-button').classList.add('hidden');
            document.getElementById('result-button').classList.remove('hidden');
        }
    }
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('not-owned-button').disabled = true;
}

function removeAndReroll(isContradiction = false) {
    if (isContradiction && currentRoulette.type === 'bind') {
        selectedBinds.pop();
        availableBinds = binds.filter(b => !selectedBinds.includes(b));
        results = results.filter(r => !(r.type === 'bind' && r.bindIndex === currentRoulette.index));
        rouletteItems = [...availableBinds];
    } else {
        const index = Math.floor(((2 * Math.PI - spinAngle) % (2 * Math.PI)) / (2 * Math.PI / rouletteItems.length));
        rouletteItems.splice(index, 1);
        results.pop();
    }
    if (rouletteItems.length === 0) {
        alert('これ以上選択可能な項目がありません。最初に戻ります');
        backToHome();
        return;
    }
    closePopup();
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    spinAngle = 0;
    drawRoulette();
}

function nextRoulette() {
    closePopup();
    if (currentRoulette.type === 'boss') {
        if (document.getElementById('home-screen').classList.contains('hidden') && selectedBinds.length < bindCount) {
            currentRoulette = { type: 'bind', index: selectedBinds.length };
            rouletteItems = [...availableBinds];
            document.getElementById('roulette-title').textContent = `縛り${selectedBinds.length + 1}選択`;
        } else {
            showResult();
            return;
        }
    } else if (currentRoulette.type === 'bind') {
        const bind = selectedBinds[currentRoulette.index];
        if (bind === 'UI非表示＋リロール' || bind === '爆発禁止＋リロール') {
            currentRoulette = { type: 'bind', index: currentRoulette.index };
            rouletteItems = [...availableBinds];
            document.getElementById('roulette-title').textContent = `縛り${currentRoulette.index + 1}選択（リロール）`;
        } else {
            startSubRoulette(bind, currentRoulette.index, 0);
            return;
        }
    } else if (currentRoulette.type === 'bind-sub') {
        if (currentRoulette.player + 1 < playerCount && subRoulettes[currentRoulette.bind]) {
            currentRoulette = { type: 'bind-sub', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player + 1 };
            rouletteItems = [...subRoulettes[currentRoulette.bind]].filter(c => !results.some(r => (r.type === 'bind-sub' && r.bind === currentRoulette.bind && r.value === c)));
            document.getElementById('roulette-title').textContent = `${currentRoulette.bind}（プレイヤー${currentRoulette.player + 1}）`;
        } else if (currentRoulette.bindIndex + 1 < selectedBinds.length) {
            currentRoulette = { type: 'bind-sub', bind: selectedBinds[currentRoulette.bindIndex + 1], bindIndex: currentRoulette.bindIndex + 1, player: 0 };
            startSubRoulette(selectedBinds[currentRoulette.bindIndex + 1], currentRoulette.bindIndex + 1, 0);
            return;
        } else if (currentRoulette.bindIndex + 1 < bindCount) {
            currentRoulette = { type: 'bind', index: currentRoulette.bindIndex + 1 };
            rouletteItems = [...availableBinds];
            document.getElementById('roulette-title').textContent = `縛り${currentRoulette.bindIndex + 2}選択`;
        } else {
            showResult();
            return;
        }
    } else if (currentRoulette.type === 'char-weapon-char') {
        const char = results.find(r => r.type === 'char-weapon-char' && r.bindIndex === currentRoulette.bindIndex && r.player === currentRoulette.player).value;
        const weaponType = Object.keys(charWeaponMap).find(w => charWeaponMap[w].includes(char));
        currentRoulette = { type: 'char-weapon-weapon', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player };
        rouletteItems = [...weapons[weaponType]];
        document.getElementById('roulette-title').textContent = `${currentRoulette.bind}（プレイヤー${currentRoulette.player + 1}：${char}の武器）`;
    } else if (currentRoulette.type === 'char-weapon-weapon') {
        if (currentRoulette.player + 1 < playerCount) {
            currentRoulette = { type: 'char-weapon-char', bind: currentRoulette.bind, bindIndex: currentRoulette.bindIndex, player: currentRoulette.player + 1 };
            rouletteItems = [...subRoulettes['キャラルーレット']].filter(c => !results.some(r => (r.type === 'char-weapon-char' || r.type === 'キャラルーレット') && r.value === c));
            document.getElementById('roulette-title').textContent = `${currentRoulette.bind}（プレイヤー${currentRoulette.player + 1}）`;
        } else if (currentRoulette.bindIndex + 1 < selectedBinds.length) {
            currentRoulette = { type: 'bind-sub', bind: selectedBinds[currentRoulette.bindIndex + 1], bindIndex: currentRoulette.bindIndex + 1, player: 0 };
            startSubRoulette(selectedBinds[currentRoulette.bindIndex + 1], currentRoulette.bindIndex + 1, 0);
            return;
        } else if (currentRoulette.bindIndex + 1 < bindCount) {
            currentRoulette = { type: 'bind', index: currentRoulette.bindIndex + 1 };
            rouletteItems = [...availableBinds];
            document.getElementById('roulette-title').textContent = `縛り${currentRoulette.bindIndex + 2}選択`;
        } else {
            showResult();
            return;
        }
    }
    document.getElementById('spin-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('not-owned-button').classList.add('hidden');
    spinAngle = 0;
    drawRoulette();
}

function isLastRoulette() {
    if (currentRoulette.type === 'boss' && selectedBinds.length < bindCount) return false;
    if (currentRoulette.type === 'bind' && currentRoulette.index + 1 < bindCount) return false;
    if (currentRoulette.type === 'bind-sub' && (currentRoulette.player + 1 < playerCount || currentRoulette.bindIndex + 1 < selectedBinds.length)) return false;
    if (currentRoulette.type === 'char-weapon-char') return false;
    if (currentRoulette.type === 'char-weapon-weapon' && (currentRoulette.player + 1 < playerCount || currentRoulette.bindIndex + 1 < selectedBinds.length)) return false;
    return true;
}

function checkContradiction() {
    let availableChars = [...subRoulettes['キャラルーレット']];
    selectedBinds.forEach((bind, bindIndex) => {
        const bindResults = results.filter(r => (r.type === 'bind-sub' || r.type === 'char-weapon-char') && r.bindIndex === bindIndex);
        let bindChars = [];
        if (subRoulettes[bind]) {
            bindResults.forEach(r => {
                if (bind === '国縛り') {
                    bindChars = [...countries[r.value]];
                } else if (bind === 'モノ元素縛り') {
                    bindChars = [...elements[r.value]];
                } else if (bind === '誕生月') {
                    bindChars = [...birthMonth[r.value]];
                } else if (bind === 'アルファベット縛り') {
                    bindChars = [...alphabet[r.value]];
                } else if (bind === '各1.1縛り') {
                    bindChars = [...version[r.value]];
                } else if (bind === '初期キャラのみ') {
                    bindChars = [...subRoulettes['初期キャラのみ']];
                } else if (bind === 'キャラルーレット' || bind === 'キャラ武器ルーレット') {
                    bindChars = [r.value];
                }
            });
        } else if (bind === '恒常☆５縛り') {
            bindChars = [...constantFiveStar];
        } else if (bind === '所持率100％縛り') {
            bindChars = [...owned100];
        } else if (bind === '旅人縛り') {
            bindChars = ['旅人'];
        } else if (bind === '☆４キャラ武器') {
            bindChars = subRoulettes['キャラルーレット'].filter(c => !constantFiveStar.includes(c) && c !== 'アーロイ');
        }
        availableChars = availableChars.filter(c => bindChars.includes(c));
    });
    return availableChars.length === 0;
}

function showResult() {
    showScreen('result-screen');
    let resultText = `ボス：${selectedBoss || '未選択'}\n\n`;
    const commonBinds = selectedBinds.filter(b => !subRoulettes[b] && b !== 'キャラ武器ルーレット' && b !== 'UI非表示＋リロール' && b !== '爆発禁止＋リロール');
    if (commonBinds.length > 0) {
        resultText += '共通の縛り：\n';
        commonBinds.forEach(b => {
            if (b === '所持率100％縛り') {
                resultText += `${b}（${owned100.join('、') || 'なし'}）\n`;
            } else if (b === '恒常☆５縛り') {
                resultText += `${b}（${constantFiveStar.join('、') || 'なし'}）\n`;
            } else if (b === '旅人縛り') {
                resultText += `${b}（旅人）\n`;
            } else {
                resultText += `${b}\n`;
            }
        });
        resultText += '\n';
    }
    for (let i = 0; i < playerCount; i++) {
        resultText += `プレイヤー${i + 1}：\n`;
        selectedBinds.forEach((bind, bindIndex) => {
            if (subRoulettes[bind] || bind === 'キャラ武器ルーレット') {
                const bindResult = results.find(r => (r.type === 'bind-sub' || r.type === 'char-weapon-char') && r.bindIndex === bindIndex && r.player === i);
                if (bindResult) {
                    let displayText = bindResult.value;
                    let availableChars = [];
                    if (bind === '国縛り') {
                        availableChars = countries[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === 'モノ元素縛り') {
                        availableChars = elements[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === '誕生月') {
                        availableChars = birthMonth[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === 'アルファベット縛り') {
                        availableChars = alphabet[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === '各1.1縛り') {
                        availableChars = version[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === '初期キャラのみ') {
                        availableChars = subRoulettes['初期キャラのみ'] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    } else if (bind === 'キャラルーレット') {
                        displayText = `キャラ：${bindResult.value}`;
                    } else if (bind === 'キャラ武器ルーレット') {
                        const weapon = results.find(r => r.type === 'char-weapon-weapon' && r.bindIndex === bindIndex && r.player === i);
                        displayText = `キャラ：${bindResult.value}、武器：${weapon ? weapon.value : '未選択'}`;
                    } else if (bind === '武器種縛り') {
                        availableChars = charWeaponMap[bindResult.value] || [];
                        displayText += `（${availableChars.join('、') || 'なし'}）`;
                    }
                    resultText += `  ${bind}：${displayText}\n`;
                }
            }
        });
        // 選択可能なキャラを表示
        let availableChars = [...subRoulettes['キャラルーレット']];
        selectedBinds.forEach((bind, bindIndex) => {
            const bindResult = results.find(r => (r.type === 'bind-sub' || r.type === 'char-weapon-char') && r.bindIndex === bindIndex && r.player === i);
            let bindChars = [];
            if (bind === '国縛り' && bindResult) {
                bindChars = countries[bindResult.value] || [];
            } else if (bind === 'モノ元素縛り' && bindResult) {
                bindChars = elements[bindResult.value] || [];
            } else if (bind === '誕生月' && bindResult) {
                bindChars = birthMonth[bindResult.value] || [];
            } else if (bind === 'アルファベット縛り' && bindResult) {
                bindChars = alphabet[bindResult.value] || [];
            } else if (bind === '各1.1縛り' && bindResult) {
                bindChars = version[bindResult.value] || [];
            } else if (bind === '初期キャラのみ' && bindResult) {
                bindChars = subRoulettes['初期キャラのみ'] || [];
            } else if (bind === 'キャラルーレット' && bindResult) {
                bindChars = [bindResult.value];
            } else if (bind === 'キャラ武器ルーレット' && bindResult) {
                bindChars = [bindResult.value];
            } else if (bind === '武器種縛り' && bindResult) {
                bindChars = charWeaponMap[bindResult.value] || [];
            } else if (bind === '恒常☆５縛り') {
                bindChars = constantFiveStar;
            } else if (bind === '所持率100％縛り') {
                bindChars = owned100;
            } else if (bind === '旅人縛り') {
                bindChars = ['旅人'];
            } else if (bind === '☆４キャラ武器') {
                bindChars = subRoulettes['キャラルーレット'].filter(c => !constantFiveStar.includes(c) && c !== 'アーロイ');
            }
            if (bindChars.length > 0) {
                availableChars = availableChars.filter(c => bindChars.includes(c));
            }
        });
        resultText += `  選択可能なキャラ：${availableChars.length > 0 ? availableChars.join('、') : 'なし'}\n\n`;
    }
    document.getElementById('result-content').textContent = resultText;
}

// 初期描画
drawRoulette();
