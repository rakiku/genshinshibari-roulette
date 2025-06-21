// データ定義（提供されたデータを一切改変せず使用）
const bosses = [
    "鉄甲熔炎帝王", "アンドリアス", "ニニアン", "禍津御建鳴神命", "ディアンナラ", "恒常からくり陣形", "無相の炎", "正機の神",
    "無相の雷", "アペプ", "黄金王獣", "氷風組曲コッペリア", "リアム", "急凍樹", "戦羊・鉄爪", "赤璋巡岳府君",
    "銅の掟", "暴君・金焔のクク竜", "アビサルヴィシャップ", "実験用フィールド生成装置", "魔偶剣鬼", "迅電樹",
    "エンシェントヴィシャップ・岩", "氷風組曲コペリウス", "ジャプー", "召使", "微末", "輝ける溶岩の龍像",
    "千年真珠の海駿", "深罪の浸礼者", "グーシートース", "シネアス", "無相の草", "吞星の鯨", "異色三連星",
    "公子", "バラチコ", "半永久統制マトリックス", "純水精霊", "無相の風", "ヴィヴィアン", "山の王・貪食のユムカ竜",
    "深淵なるミミック・パピラ", "秘源機兵・機構デバイス", "山隠れの猊獣", "魔像レガトゥス", "キング＆クイーン",
    "無相の氷", "淑女", "兆載永劫ドレイク", "コシーホ", "秘源機兵・統御デバイス", "爆炎樹", "リライ",
    "迷える霊覚の修権者", "イゾルト", "若陀龍王", "遺跡サーペント", "無相の水", "雷音権現", "無相の岩",
    "水形タルパ", "風食ウェネト", "ロッキー", "マッシュラプトル", "ピーク"
];

const constraints = [
    "☆4キャラ武器", "回復禁止", "恒常☆5縛り", "所持率100％縛り", "国縛り", "初期キャラのみ",
    "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット",
    "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り",
    "モノ元素縛り", "各n.1", "誕生月", "アルファベット縛り", "☆1、聖遺物なし"
];

const nations = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"];
const weaponTypes = ["片手剣", "両手剣", "長柄武器", "法器", "弓"];
const elements = ["炎", "水", "氷", "岩", "草", "風", "雷"];
const vers = ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "3.0", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "5.0", "5.1"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

const characters = [
    "ティナリ", "フリーナ", "リサ", "イアンサ", "ドリー", "フレミネ", "ヴァレサ", "ニィロウ", "スクロース", "エスコフィエ",
    "神里綾人", "申鶴", "甘雨", "カーヴェ", "北斗", "スカーク", "シロネン", "重雲", "鍾離", "アンバー",
    "胡桃", "レザー", "閑雲", "マーヴィカ", "雷電将軍", "ベネット", "キャンディス", "アルハイゼン", "香菱", "白朮",
    "コレイ", "セトス", "雲菫", "ヨォーヨ", "ノエル", "ディルック", "宵宮", "フィッシュル", "ロサリア",
    "エウルア", "ミカ", "ナヴィア", "八重神子", "リオセスリ", "神里綾華", "カチーナ", "ムアラニ", "行秋", "辛炎",
    "シュヴルーズ", "ジン", "夜蘭", "楓原万葉", "荒瀧一斗", "リネ", "モナ", "ガイア", "イファ", "ディオナ",
    "アルベド", "刻晴", "久岐忍", "魈", "ゴロー", "九条裟羅", "綺良々", "ヌヴィレット", "藍硯", "シグウィン",
    "シトラリ", "タルタリヤ", "ダリア", "トーマ", "リネット", "放浪者", "夢見月瑞希", "七七", "煙緯",
    "キィニチ", "クロリンデ", "珊瑚宮心海", "ファルザン", "バーバラ", "レイラ", "ナヒーダ", "嘉明", "早柚",
    "ディシア", "ウェンティ", "鹿野院平蔵", "シャルロット", "チャスカ", "アルレッキーノ", "凝光", "クレー",
    "オロルン", "エミリエ", "千織", "旅人", "アーロイ"
];

const weapons = {
    "片手剣": [
        "厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣",
        "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨",
        "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣",
        "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル",
        "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑",
        "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣",
        "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"
    ],
    "両手剣": [
        "千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断",
        "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色",
        "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣",
        "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣",
        "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣",
        "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"
    ],
    "弓": [
        "冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ",
        "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞",
        "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ",
        "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い",
        "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵",
        "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"
    ],
    "法器": [
        "ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯",
        "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏",
        "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実",
        "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠",
        "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心",
        "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典",
        "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"
    ],
    "長柄武器": [
        "香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット",
        "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛",
        "ムーンピアサー", "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍",
        "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍", "流月の針", "新米の長槍", "斬波のひれ長",
        "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "「漁獲」", "喜多院十文字槍", "和璞鳶",
        "千岩長槍", "匣中滅龍", "死闘の槍"
    ]
};

const characterWeaponMap = {
    "旅人": "片手剣", "シロネン": "片手剣", "クロリンデ": "片手剣", "千織": "片手剣", "フリーナ": "片手剣",
    "リネット": "片手剣", "綺良々": "片手剣", "アルハイゼン": "片手剣", "レイラ": "片手剣", "ニィロウ": "片手剣",
    "久岐忍": "片手剣", "アルベド": "片手剣", "行秋": "片手剣", "神里綾華": "片手剣", "神里綾人": "片手剣",
    "ジン": "片手剣", "ベネット": "片手剣", "楓原万葉": "片手剣", "刻晴": "片手剣", "ガイア": "片手剣",
    "七七": "片手剣", "スカーク": "片手剣", "ダリア": "片手剣",
    "マーヴィカ": "両手剣", "キィニチ": "両手剣", "嘉明": "両手剣", "ナヴィア": "両手剣", "フレミネ": "両手剣",
    "カーヴェ": "両手剣", "ディシア": "両手剣", "ドリー": "両手剣", "レザー": "両手剣", "重雲": "両手剣",
    "ディルック": "両手剣", "辛炎": "両手剣", "ノエル": "両手剣", "荒瀧一斗": "両手剣", "早柚": "両手剣",
    "北斗": "両手剣", "エウルア": "両手剣",
    "チャスカ": "弓", "オロルン": "弓", "セトス": "弓", "シグウィン": "弓", "リネ": "弓",
    "ファルザン": "弓", "コレイ": "弓", "ティナリ": "弓", "夜蘭": "弓", "ディオナ": "弓",
    "タルタリヤ": "弓", "フィッシュル": "弓", "甘雨": "弓", "ウェンティ": "弓", "宵宮": "弓",
    "アンバー": "弓", "ゴロー": "弓", "九条裟羅": "弓",
    "イファ": "法器", "ヴァレサ": "法器", "夢見月瑞希": "法器", "藍硯": "法器", "シトラリ": "法器",
    "ムアラニ": "法器", "閑雲": "法器", "シャルロット": "法器", "ヌヴィレット": "法器", "リオセスリ": "法器",
    "白朮": "法器", "放浪者": "法器", "ナヒーダ": "法器", "鹿野院平蔵": "法器", "モナ": "法器",
    "バーバラ": "法器", "スクロース": "法器", "珊瑚宮心海": "法器", "煙緯": "法器", "クレー": "法器",
    "凝光": "法器", "八重神子": "法器", "リサ": "法器",
    "エスコフィエ": "長柄武器", "イアンサ": "長柄武器", "カチーナ": "長柄武器", "エミリエ": "長柄武器",
    "アルレッキーノ": "長柄武器", "シュヴルーズ": "長柄武器", "ミカ": "長柄武器", "ヨォーヨ": "長柄武器",
    "キャンディス": "長柄武器", "セノ": "長柄武器", "魈": "長柄武器", "香菱": "長柄武器", "雷電将軍": "長柄武器",
    "鍾離": "長柄武器", "胡桃": "長柄武器", "ロサリア": "長柄武器", "申鶴": "長柄武器", "トーマ": "長柄武器",
    "雲菫": "長柄武器", "アーロイ": "弓"
};

const nationMap = {
    "モンド": ["ミカ", "レザー", "アルベド", "ディオナ", "ディルック", "ノエル", "フィッシュル", "モナ", "バーバラ", "ロサリア", "スクロース", "ジン", "ベネット", "ウェンティ", "アンバー", "クレー", "ガイア", "エウルア", "リサ", "ダリア"],
    "璃月": ["藍硯", "嘉明", "閑雲", "白朮", "ヨォーヨ", "夜蘭", "魈", "香菱", "鍾離", "重雲", "辛炎", "行秋", "胡桃", "申鶴", "甘雨", "煙緯", "北斗", "刻晴", "凝光", "雲菫", "七七"],
    "稲妻": ["夢見月瑞希", "千織", "綺良々", "鹿野院平蔵", "久岐忍", "雷電将軍", "荒瀧一斗", "神里綾華", "神里綾人", "珊瑚宮心海", "楓原万葉", "早柚", "トーマ", "宵宮", "八重神子", "ゴロー", "九条裟羅"],
    "スメール": ["セトス", "カーヴェ", "ディシア", "アルハイゼン", "放浪者", "ファルザン", "レイラ", "ナヒーダ", "キャンディス", "セノ", "ニィロウ", "ドリー", "コレイ", "ティナリ"],
    "フォンテーヌ": ["エスコフィエ", "エミリエ", "シグウィン", "クロリンデ", "シュヴルーズ", "ナヴィア", "シャルロット", "フリーナ", "ヌヴィレット", "リオセスリ", "フレミネ", "リネ", "リネット"],
    "ナタ": ["イファ", "イアンサ", "ヴァレサ", "シトラリ", "マーヴィカ", "チャスカ", "オロルン", "シロネン", "ムアラニ", "カチーナ", "キィニチ"],
    "スネージナヤ": ["アルレッキーノ", "タルタリヤ"],
    "例外": ["旅人", "アーロイ", "スカーク"]
};

const elementMap = {
    "炎": ["マーヴィカ", "アルレッキーノ", "嘉明", "シュヴルーズ", "リネ", "ディシア", "香菱", "ディルック", "辛炎", "胡桃", "ベネット", "煙緯", "トーマ", "宵宮", "アンバー", "クレー"],
    "水": ["ダリア", "ムアラニ", "シグウィン", "フリーナ", "ヌヴィレット", "キャンディス", "ニィロウ", "夜蘭", "タルタリヤ", "行秋", "モナ", "バーバラ", "神里綾人", "珊瑚宮心海"],
    "草": ["キィニチ", "エミリエ", "綺良々", "白朮", "カーヴェ", "アルハイゼン", "ヨォーヨ", "ナヒーダ", "コレイ", "ティナリ"],
    "雷": ["イアンサ", "ヴァレサ", "オロルン", "セトス", "クロリンデ", "セノ", "ドリー", "久岐忍", "雷電将軍", "レザー", "フィッシュル", "北斗", "刻晴", "八重神子", "九条裟羅", "リサ"],
    "風": ["イファ", "夢見月瑞希", "藍硯", "チャスカ", "閑雲", "リネット", "放浪者", "ファルザン", "鹿野院平蔵", "魈", "スクロース", "ジン", "ウェンティ", "楓原万葉", "早柚"],
    "氷": ["スカーク", "エスコフィエ", "シトラリ", "シャルロット", "リオセスリ", "フレミネ", "ミカ", "レイラ", "重雲", "ディオナ", "ロサリア", "神里綾華", "申鶴", "甘雨", "アーロイ", "ガイア", "エウルア", "七七"],
    "岩": ["シロネン", "カチーナ", "鍾離", "千織", "ナヴィア", "アルベド", "荒瀧一斗", "ノエル", "凝光", "ゴロー", "雲菫"]
};

const versionMap = {
    "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
    "n.1": ["タルタリヤ", "鍾離", "ディオナ", "辛炎", "雷電将軍", "珊瑚宮心海", "九条裟羅", "セノ", "ニィロウ", "キャンディス", "ヌヴィレット", "リオセスリ", "シロネン"],
    "n.2": ["甘雨", "アルベド", "トーマ", "ナヒーダ", "レイラ", "フリーナ", "シャルロット", "チャスカ", "オロルン"],
    "n.3": ["胡桃", "魈", "荒瀧一斗", "ゴロー", "放浪者", "ファルザン", "ナヴィア", "シュヴルーズ", "マーヴィカ", "シトラリ", "藍硯"],
    "n.4": ["ロサリア", "申鶴", "雲菫", "アルハイゼン", "ヨォーヨ", "閑雲", "嘉明", "夢見月瑞希"],
    "n.5": ["エウルア", "煙緯", "八重神子", "ディシア", "ミカ", "千織", "ヴァレサ", "イアンサ"],
    "n.6": ["楓原万葉", "神里綾人", "白朮", "カーヴェ", "アルレッキーノ", "エスコフィエ", "イファ"],
    "n.7": ["夜蘭", "久岐忍", "綺良々", "クロリンデ", "シグウィン", "セトス", "スカーク", "ダリア"],
    "n.8": ["鹿野院平蔵", "エミリエ"]
};

const monthMap = {
    "1月": ["放浪者", "藍硯", "トーマ", "シュヴルーズ", "ディオナ", "シトラリ", "綺良々", "ロサリア"],
    "2月": ["リネ", "リネット", "アルハイゼン", "北斗", "珊瑚宮心海", "ベネット"],
    "3月": ["七七", "ヨォーヨ", "申鶴", "シロネン", "ジン", "夢見月瑞希", "ノエル", "神里綾人", "シグウィン", "イファ"],
    "4月": ["アーロイ", "ディシア", "シャルロット", "閑雲", "魈", "夜蘭", "カチーナ", "白朮", "ディルック"],
    "5月": ["キャンディス", "コレイ", "ゴロー", "雲菫", "フィッシュル", "セトス", "ダリア"],
    "6月": ["荒瀧一斗", "リサ", "ウェンティ", "宵宮", "セノ", "雷電将軍", "八重神子", "エスコフィエ"],
    "7月": ["バーバラ", "カーヴェ", "九条裟羅", "胡桃", "タルタリヤ", "鹿野院平蔵", "久岐忍", "クレー", "煙緯"],
    "8月": ["ムアラニ", "アンバー", "ミカ", "ナヴィア", "千織", "ファルザン", "アルレッキーノ", "凝光", "マーヴィカ", "モナ", "イアンサ"],
    "9月": ["重雲", "レザー", "アルベド", "クロリンデ", "エミリエ", "フレミネ", "神里綾華"],
    "10月": ["行秋", "フリーナ", "オロルン", "辛炎", "早柚", "エウルア", "ナヒーダ", "楓原万葉"],
    "11月": ["香菱", "キィニチ", "刻晴", "リオセスリ", "スクロース", "ガイア", "ヴァレサ", "スカーク"],
    "12月": ["甘雨", "ニィロウ", "チャスカ", "ヌヴィレット", "レイラ", "ドリー", "嘉明", "ティナリ", "鍾離"]
};

const alphabetMap = {
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
    "Y": ["煙緯", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ"],
    "Z": ["鍾離"]
};

const owned100 = ["旅人", "香菱", "ガイア", "コレイ", "ノエル", "リサ", "バーバラ", "アンバー"];
const constellationStar5 = ["ジン", "ディルック", "ディシア", "夢見月瑞希", "七七", "モナ", "ティナリ"];
const constellationStar5Weapons = ["天空の巻", "天空の翼", "天空の脊", "天空の傲", "天空の刃", "和璞鳶", "アモスの弓", "狼の末路", "四風原典", "風鷹剣"];
const star5Characters = [
    "スカーク", "エスコフィエ", "ヴァレサ", "夢見月瑞希", "シトラリ", "マーヴィカ", "チャスカ", "シロネン", "ムアラニ",
    "キィニチ", "エミリエ", "シグウィン", "クロリンデ", "アルレッキーノ", "千織", "閑雲", "ナヴィア", "フリーナ",
    "ヌヴィレット", "リオセスリ", "リネ", "白朮", "ディシア", "アルハイゼン", "放浪者", "ナヒーダ", "セノ",
    "ニィロウ", "ティナリ", "夜蘭", "魈", "雷電将軍", "アルベド", "鍾離", "ディルック", "タルタリヤ", "モナ",
    "荒瀧一斗", "胡桃", "神里綾華", "神里綾人", "申鶴", "甘雨", "ジン", "珊瑚宮心海", "ウェンティ", "楓原万葉",
    "宵宮", "アーロイ", "クレー", "刻晴", "八重神子", "エウルア", "七七", "旅人"
];
const star4Characters = [
    "ダリア", "イファ", "イアンサ", "藍硯", "オロルン", "カチーナ", "セトス", "嘉明", "シュヴルーズ", "シャルロット",
    "フレミネ", "リネット", "綺良々", "カーヴェ", "ミカ", "ヨォーヨ", "ファルザン", "レイラ", "キャンディス", "ドリー",
    "コレイ", "鹿野院平蔵", "久岐忍", "香菱", "レザー", "重雲", "ディオナ", "辛炎", "ノエル", "行秋", "フィッシュル",
    "バーバラ", "ロサリア", "スクロース", "ベネット", "煙緯", "早柚", "トーマ", "アンバー", "北斗", "ガイア",
    "凝光", "ゴロー", "雲菫", "九条裟羅", "リサ"
];

// グローバル変数
let currentRouletteType = "";
let currentDetailType = "";
let currentItems = [];
let rotation = 0;
let speed = 0;
let intervalId = null;
let isStopping = false;
let currentPlayer = 0;
let currentConstraintIndex = 0;
let results = { boss: "", constraints: [], playerResults: [] };
let excludedItems = [];

// 画面遷移
function goToMain() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("main-screen").style.display = "block";
    resetState();
}

function goToBossRoulette() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("boss-roulette-screen").style.display = "block";
    initializeRoulette("boss");
}

function goToConstraintRoulette() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("constraint-roulette-screen").style.display = "block";
    initializeRoulette("constraint");
}

function goToSelectConstraint() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("select-constraint-screen").style.display = "block";
}

function goToDetailRoulette(type) {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("detail-roulette-screen").style.display = "block";
    document.getElementById("detail-roulette-title").textContent = type;
    initializeRoulette("detail");
}

function goToAbout() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("about-screen").style.display = "block";
}

// 状態リセット
function resetState() {
    currentRouletteType = "";
    currentDetailType = "";
    currentItems = [];
    rotation = 0;
    speed = 0;
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
    isStopping = false;
    currentPlayer = 0;
    currentConstraintIndex = 0;
    results = { boss: "", constraints: [], playerResults: [] };
    excludedItems = [];
}

// ルーレット初期化
function initializeRoulette(type) {
    const roulette = document.getElementById(`${type}-roulette`);
    roulette.innerHTML = "";
    currentItems = getItemsForRoulette(type);
    if (currentItems.length === 0) {
        alert("選択可能な項目がありません。前のステップに戻ります。");
        goToMain();
        return;
    }
    const itemCount = currentItems.length;
    const angleStep = 360 / itemCount;
    const radius = roulette.offsetWidth / 2; // 動的に半径を取得

    currentItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "roulette-item";
        div.style.transform = `rotate(${index * angleStep}deg) translateY(-${radius}px) rotate(-${index * angleStep}deg)`;
        div.textContent = item;
        roulette.appendChild(div);
    });
}

// ルーレット項目取得
function getItemsForRoulette(type) {
    let items = [];
    if (type === "boss") {
        items = bosses.filter(item => !excludedItems.includes(item));
    } else if (type === "constraint") {
        items = constraints.filter(item => !results.constraints.includes(item));
    } else if (type === "detail") {
        switch (currentDetailType) {
            case "国縛り":
                items = nations.filter(item => !excludedItems.includes(item));
                break;
            case "キャラルーレット":
                items = characters.filter(item => !excludedItems.includes(item) && !Object.values(results.playerResults).some(p => p.character === item));
                break;
            case "武器種縛り":
                items = weaponTypes;
                break;
            case "キャラ武器ルーレット":
                items = characters.filter(item => !excludedItems.includes(item) && !Object.values(results.playerResults).some(p => p.character === item));
                break;
            case "武器ルーレット":
                items = weapons[characterWeaponMap[results.playerResults[currentPlayer].character]].filter(w => !excludedItems.includes(w));
                break;
            case "モノ元素縛り":
                items = elements;
                break;
            case "各n.1":
                items = vers;
                break;
            case "誕生月":
                items = months;
                break;
            case "アルファベット縛り":
                items = alphabets;
                break;
        }
    }
    // 矛盾チェック
    if (type === "detail" && ["国縛り", "モノ元素縛り", "各n.1", "誕生月", "アルファベット縛り"].includes(currentDetailType)) {
        items = items.filter(item => {
            const chars = getCharactersForConstraint(currentDetailType, item);
            return chars.length > 0 && chars.some(c => !excludedItems.includes(c));
        });
    }
    return items;
}

// ルーレット開始
function startRoulette(type) {
    if (intervalId || isStopping) return;
    currentRouletteType = type;
    initializeRoulette(type);
    if (currentItems.length === 0) {
        alert("選択可能な項目がありません。前のステップに戻ります。");
        goToMain();
        return;
    }
    speed = 10;
    isStopping = false;

    const startButton = document.querySelector(`#${type}-roulette-screen button[onclick="startRoulette('${type}')"]`);
    const stopButton = document.querySelector(`#${type}-roulette-screen button[onclick="stopRoulette('${type}')"]`);
    startButton.disabled = true;
    stopButton.disabled = false;

    intervalId = setInterval(() => {
        rotation += speed;
        document.getElementById(`${type}-roulette`).style.transform = `rotate(${rotation}deg)`;
    }, 16);
}

// ルーレット停止
function stopRoulette(type) {
    if (!intervalId || isStopping) return;
    isStopping = true;
    const stopButton = document.querySelector(`#${type}-roulette-screen button[onclick="stopRoulette('${type}')"]`);
    stopButton.disabled = true;

    const deceleration = setInterval(() => {
        speed *= 0.95;
        if (speed <= 0.1) {
            clearInterval(deceleration);
            clearInterval(intervalId);
            intervalId = null;
            isStopping = false;
            showResult(type);
            const startButton = document.querySelector(`#${type}-roulette-screen button[onclick="startRoulette('${type}')"]`);
            startButton.disabled = false;
        }
    }, 100);
}

// 結果表示
function showResult(type) {
    const itemCount = currentItems.length;
    const angleStep = 360 / itemCount;
    const normalizedRotation = rotation % 360;
    const index = Math.floor((360 - normalizedRotation) / angleStep) % itemCount;
    const selectedItem = currentItems[index];

    document.getElementById("modal-title").textContent = `${type === "boss" ? "ボス" : currentDetailType === "武器ルーレット" ? "武器" : currentDetailType}の結果`;
    document.getElementById("modal-result").textContent = selectedItem;
    const notOwnedButton = document.getElementById("modal-not-owned");
    if (type === "detail" && ["キャラルーレット", "キャラ武器ルーレット", "武器ルーレット"].includes(currentDetailType)) {
        notOwnedButton.style.display = "block";
    } else {
        notOwnedButton.style.display = "none";
    }
    document.getElementById("modal").style.display = "flex";

    if (type === "boss") {
        results.boss = selectedItem;
    } else if (type === "constraint") {
        results.constraints[currentConstraintIndex] = selectedItem;
    } else if (type === "detail") {
        if (!results.playerResults[currentPlayer]) results.playerResults[currentPlayer] = {};
        if (currentDetailType === "キャラ武器ルーレット") {
            results.playerResults[currentPlayer].character = selectedItem;
        } else if (currentDetailType === "武器ルーレット") {
            results.playerResults[currentPlayer].weapon = selectedItem;
        } else {
            results.playerResults[currentPlayer][currentDetailType] = selectedItem;
        }
    }
}

// モーダル操作
function modalNext() {
    document.getElementById("modal").style.display = "none";
    if (currentRouletteType === "boss") {
        goToConstraintRoulette();
    } else if (currentRouletteType === "constraint") {
        if (["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各n.1", "誕生月", "アルファベット縛り"].includes(results.constraints[currentConstraintIndex])) {
            currentDetailType = results.constraints[currentConstraintIndex];
            goToDetailRoulette(currentDetailType);
        } else {
            currentConstraintIndex++;
            if (currentConstraintIndex < parseInt(document.getElementById("constraint-count").value)) {
                goToConstraintRoulette();
            } else {
                showResultScreen();
            }
        }
    } else if (currentRouletteType === "detail") {
        if (currentDetailType === "キャラ武器ルーレット" && !results.playerResults[currentPlayer].weapon) {
            currentDetailType = "武器ルーレット";
            goToDetailRoulette("武器ルーレット");
        } else {
            currentPlayer++;
            if (currentPlayer < parseInt(document.getElementById("player-count").value)) {
                if (["キャラルーレット", "キャラ武器ルーレット"].includes(currentDetailType)) {
                    goToDetailRoulette(currentDetailType);
                } else {
                    currentPlayer = 0;
                    currentConstraintIndex++;
                    if (currentConstraintIndex < parseInt(document.getElementById("constraint-count").value)) {
                        goToConstraintRoulette();
                    } else {
                        showResultScreen();
                    }
                }
            } else {
                currentPlayer = 0;
                currentConstraintIndex++;
                if (currentConstraintIndex < parseInt(document.getElementById("constraint-count").value)) {
                    goToConstraintRoulette();
                } else {
                    showResultScreen();
                }
            }
        }
    }
}

function modalNotOwned() {
    const selectedItem = document.getElementById("modal-result").textContent;
    excludedItems.push(selectedItem);
    document.getElementById("modal").style.display = "none";
    initializeRoulette(currentRouletteType);
    startRoulette(currentRouletteType);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// 一括ルーレット
function startBatchRoulette() {
    resetState();
    results.boss = bosses[Math.floor(Math.random() * bosses.length)];
    for (let i = 0; i < parseInt(document.getElementById("constraint-count").value); i++) {
        let availableConstraints = constraints.filter(c => !results.constraints.includes(c));
        if (availableConstraints.length === 0) break;
        const constraint = availableConstraints[Math.floor(Math.random() * availableConstraints.length)];
        results.constraints.push(constraint);
    }
    for (let i = 0; i < parseInt(document.getElementById("player-count").value); i++) {
        results.playerResults[i] = {};
        results.constraints.forEach(constraint => {
            let items = [];
            switch (constraint) {
                case "国縛り":
                    items = nations.filter(n => getCharactersForConstraint("国縛り", n).length > 0);
                    break;
                case "キャラルーレット":
                    items = characters.filter(c => !excludedItems.includes(c) && !Object.values(results.playerResults).some(p => p.character === c));
                    break;
                case "武器種縛り":
                    items = weaponTypes;
                    break;
                case "キャラ武器ルーレット":
                    items = characters.filter(c => !excludedItems.includes(c) && !Object.values(results.playerResults).some(p => p.character === c));
                    if (items.length > 0) {
                        results.playerResults[i].character = items[Math.floor(Math.random() * items.length)];
                        results.playerResults[i].weapon = weapons[characterWeaponMap[results.playerResults[i].character]][Math.floor(Math.random() * weapons[characterWeaponMap[results.playerResults[i].character]].length)];
                    }
                    break;
                case "モノ元素縛り":
                    items = elements.filter(e => getCharactersForConstraint("モノ元素縛り", e).length > 0);
                    break;
                case "各1.1♂":
                    items = vers.filter(v => getCharactersForConstraint("各n.1", v).length > 0);
                    break;
                case "誕生月":
                    items = months.filter(m => getCharactersForConstraint("誕生月", m).length > 0);
                    break;
                case "アルファベット縛り":
                    items = alphabets.filter(a => getCharactersForConstraint("アルファベット縛り", a).length > 0);
                    break;
                default:
                    break;
            }
            if (items.length > 0 && constraint !== "キャラ武器ルーレット") {
                results.playerResults[i][constraint] = items[Math.floor(Math.random() * items.length)];
            }
        });
    }
    showResultScreen();
}

// 結果画面表示
function showResultScreen() {
    document.querySelectorAll("div[id$='-screen']").forEach(screen => screen.style.display = "none");
    document.getElementById("result-screen").style.display = "block";
    const content = document.getElementById("result-content");
    content.innerHTML = `<p><b>ボス</b>: ${results.boss}</p>`;
    content.innerHTML += `<h2>全体共通の縛り</h2><p>${results.constraints.filter(c => !["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各n.1", "誕生月", "アルファベット縛り"].includes(c)).join(", ") || "なし"}</p>`;
    results.playerResults.forEach((player, index) => {
        content.innerHTML += `<h2>プレイヤー${index + 1}</h2>`;
        Object.entries(player).forEach(([key, value]) => {
            if (key === "character") {
                content.innerHTML += `<p>キャラクター: ${value} (武器: ${player.weapon || "未選択"})</p>`;
            } else if (["国縛り", "モノ元素縛り", "各n.1", "誕生月", "アルファベット縛り"].includes(key)) {
                const characters = getCharactersForConstraint(key, value);
                content.innerHTML += `<p>${key}: ${value} (${characters.join(", ")})</p>`;
            } else if (key !== "weapon") {
                content.innerHTML += `<p>${key}: ${value}</p>`;
            }
        });
    });
}

function getCharactersForConstraint(constraint, value) {
    let chars = [];
    switch (constraint) {
        case "国縛り": chars = nationMap[value] || []; break;
        case "モノ元素縛り": chars = elementMap[value] || []; break;
        case "各n.1": chars = versionMap[value] || []; break;
        case "誕生月": chars = monthMap[value] || []; break;
        case "アルファベット縛り": chars = alphabetMap[value] || []; break;
    }
    // 所持率100％縛りや恒常☆5縛りの適用
    results.constraints.forEach(c => {
        if (c === "所持率100％縛り") {
            chars = chars.filter(char => owned100.includes(char));
        } else if (c === "恒常☆5縛り") {
            chars = chars.filter(char => constellationStar5.includes(char));
        } else if (c === "☆4キャラ武器") {
            chars = chars.filter(char => star4Characters.includes(char));
        } else if (c === "初期キャラのみ") {
            chars = chars.filter(char => owned100.includes(char));
        } else if (c === "旅人縛り") {
            chars = chars.filter(char => char === "旅人");
        }
    });
    return chars;
}

// 縛り選択ルーレット
function startSelectedConstraint() {
    currentDetailType = document.getElementById("constraint-select").value;
    goToDetailRoulette(currentDetailType);
}
