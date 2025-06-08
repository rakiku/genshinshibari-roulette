// データ
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

const constraints = [
    "☆4キャラ武器", "回復禁止", "恒常☆5縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール",
    "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止",
    "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆1、聖遺物なし"
];

const detailData = {
    "所持率100％縛り": ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"],
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット",
        "行秋", "凝光", "フィッシュル", "ノエル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": ["旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー",
        "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ",
        "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋",
        "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮", "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮",
        "早柚", "雷電将軍", "九条裟羅", "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵",
        "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ", "レイラ",
        "放浪者", "ファルザン", "アルハイゼン", "ディシア", "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット",
        "リオセスリ", "シャルロット", "フリーナ", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン",
        "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ",
        "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア"],
    "武器種縛り": ["片手剣", "両手剣", "法器", "長柄武器", "弓"],
    "モノ元素縛り": ["風", "水", "氷", "炎", "雷", "岩", "草"],
    "各1.1縛り": ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
    "誕生月": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "アルファベット縛り": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
    "キャラ武器ルーレット": ["旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー",
        "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ",
        "魈", "北斗", "凝光", "香菱", "行秋", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋",
        "申鶴", "雲菫", "夜蘭", "ヨォーヨ", "白朮", "閑雲", "嘉明", "藍硯", "神里綾華", "神里綾人", "楓原万葉", "宵宮",
        "早柚", "雷電将軍", "九条裟羅", "珊瑚宮心海", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "久岐忍", "鹿野院平蔵",
        "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "セノ", "キャンディス", "ニィロウ", "ナヒーダ", "レイラ",
        "放浪者", "ファルザン", "アルハイゼン", "ディシア", "カーヴェ", "セトス", "リネ", "リネット", "フレミネ", "ヌヴィレット",
        "リオセスリ", "シャルロット", "フリーナ", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン",
        "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ",
        "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア"]
};

const detailResultsData = {
    "国縛り": { "例外": ["スカーク"] },
    "各1.1縛り": {
        "n.0": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "ノエル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー", "神里綾華", "宵宮", "早柚", "ティナリ", "コレイ", "ドリー", "リネ", "リネット", "フレミネ", "ムアラニ", "キィニチ", "カチーナ"],
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
        "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"],
        "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"],
        "V": ["ウェンティ", "ヴァレサ"],
        "W": ["放浪者", "リオセスリ"],
        "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"],
        "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ"],
        "Z": ["鍾離"]
    }
};

const weapons = {
    "片手剣": ["厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "蒼耀", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃"],
    "両手剣": ["千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"],
    "弓": ["冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"],
    "法器": ["ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の剣", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"],
    "長柄": ["香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍", "流月の針", "新米の長", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "喜多院十文字剣", " ", "千岩長剣", " ", "死闘の槍", " ", "漁獲"]
};

const charToWeapon = {
    "旅人": "片手剣", "シロネン": "片手剣", " ":クロリンデート", "片手剣", "千織": " ", ""片手剣: "", "フリーナ", "片手"", "リネット": "",剣 "綺麗り": "",剣 "アルハイゼン": "",剣 "レイラ": "",剣 "ニィロウ": "",剣 "久岐忍": "",剣 "" : ""アルベド"", "片手剣"", "行秋": "",剣 "神里綾華": "", " ",剣神里": "", " " ",剣": "",ジン "", " ",剣": "", " ", "ベネット": "",剣 "楓原万葉": "", " ",剣": "", "":刻晴", "片手", " ",剣":ガイア "", " ",剣": "", ", "七七", ": "" ",剣ス":カーク ", "片", "剣 ": "", ":ダリア", "", ":片手剣",
            " ": ママーヴィカ"", ": "", "両手剣"", "キィニチ": "",両手剣": "嘉明", " ", ":両手剣刀", "",ナヴィ": "",両手剣": "フレア", ": "",両手剣": "", "カーヴェ", " ", ":両手剣", "ディシア": "", "", ": "", "",手剣": "ドレ": "", " ",両":剣
        "レザー": "", " ", ":両手剣": "",重雲": " ", "",剣": "", " ", ":ルックディル": "", "", " " ": "", ": 罪炎": "", "", " ": "", ":ノエル", ": ": "", "", ":剣手両": "", "",荒瀧": "", " ", ":早一斗": "", "", " ": "", ":ヨー柚": "", " ", ":北斗", " ":両手剣", "", ":エ", " ", "", ":ウ"", ":ルーア"", ": "", "", ":両手剣": ""。

3. **チャンスカ**: "", " ", ":弓 "", "", "", "",オル": "",弓 " ", " ",セトス", " ": "", ": 弓シ":グウィン", " ", ":弓", "",リネー": "", " ", ":弓": "", "",ファルザー": "", " ", ":弓 ", ":コレイ": "", " ", ":弓 T":T"ナリ", ": "", ":弓": ":1 I ", "夜": "", "", ":弓 ": ": "",ディラン": "", "", " ":A ", ":  ", " ":弓タ",", ": "", " ",リヤ": "", "", ":フィシュー": "", " ", ":弓 ": "", "",ガニ": "", "", ": "", "", "", "", "", ":ウウェントベ": "", " ", ":弓 ", ":ヨ", " ", " ",宮ミカ": "", " ", ":弓 ", ":A ", ": ", ":A ", ":B ", ":A ", ":弓A", ", ":B ", ":C",
    "イフ": "", ": "" "", "", "", ":V"", ": "", ": "", "", "", ": "" "", ": ", ""レ"", ":",
    " ", ": "", "", "", "", "", "", ": ", "", "", "", ": ", "" "", "" "", "", "", ": ",,
    "エフ": "", "ショフィエ": "", " ", ":I", ": ", "", " ":A ", ":S", "", "", ":カチカ": "", "", ":I ", ": ", "", "", "",エ":ミリエ", ": ", "", "",アルレッキー": "", "", " ":ノヴシューズ": "", "", ": ", "", "",ミカ ": ", ": ", "", "",ヨー": "", "", ":Y ", "C", ": ", "",センディス": " ", ": ", ":セノ", ": ", "", "", "", "", ": ", "", "",X": "", X "", "", "",香": "", "", ": ", "雷": "", "", "", ": ", "", "", "", Z": "", "", ":鍾", "", "", ": ", "", "", "", "", "",ロサリア": "", "", ": ", "", "",申": "", "", ": ", "", "",ト ": "", "", "", ": ", "", "",雲 ": "", "", "", "", "", ": ", "", "", "", "", "", "", ": ", "", "", "", "", "", "", "", "", ": ", "", "", "", "", "", ": ",,

// 状態管理
let playerCount, constraintCount, currentStep, constraintResults, currentPlayer, currentItems, currentResult, excluded = [];
let bossResult = null, constraintResults = [], detailResults = {};
let mode = null, spinCount = 0, currentSpin = 0;
let isSpinning = false, angle = 0, speed = 0, deceleration = 0;
const canvas = document.getElementById('roulette-canvas');
const ctx = canvas.getContext('2d');

// フル流れ開始
function startFullFlow() {
    playerCount = Math.max(1, Math.min(4, parseInt(document.getElementById('player-count').value)));
    constraintCount = Math.max(1, Math.min(10, parseInt(document.getElementById('constraint-count').value)));
    currentStep = 'boss';
    bossResult = null;
    constraintResults = [];
    detailResults = [];
    excluded = [];
    showRoulette('ボスルーレット', bosses);
}

// 個別スキルレット選択
function showIndividual(type) {
    mode = type;
    document.getElementById('start-screen').style.display = 'none';
    if (type === 'detail') {
        document.getElementById('detail-select-screen').style.display = 'block';
    } else {
        playerCount = Math.max(1, Math.min(4, parseInt(document.getElementById('player-count').value)));
        constraintCount = Math.max(1, Math.min(1, parseInt(document.getElementById('constraint-count').value)));
        bossResult = null;
        constraintResults = [];
        constraintResults = [];
        excluded = [];
        showVos('ルーレット：' + (type === 'boss' ? 'ボスルーレット' : '縛り役'), type === 'boss' ? bosses : constraints);
    }
}

// 縛りのディテールルーレッタ開始
function startDetailRoulette(type) {
    playerCount = Math.max(1, Math.min(4, parseInt(document.getElementById('detail-player-count').value || document.getElementById('player-count').value)));
    constraintCount = Math.max(1, Math.min(10, parseInt(document.getElementById('detail-spin-count').value)));
    bossResult = null;
    constraintResults = [];
    detailResults = [];
    excluded = [];
    currentStep = type;
    if (type === 'キャラ武器ルーレット') {
        currentStep = 'character';
        showRoulette('キャラルーレット', detailData['キャラ武器レット'] || []);
    } else {
        showRoulette('縛りの詳細ルーレット: ' + type, detailData[type] || []);
    }
}

// ルーレット画面表示
function showRoulette(title, items) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('detail-select-screen').style.display = 'none';
    document.getElementById('roulette-screen').style.display = 'block';
    document.getElementById('roulette-title').textContent = title;
    currentItems = items.filter(item => !excluded.includes(item));
    currentResult = null;
    document.getElementById('result').style.display = 'none';
    document.getElementById('spin-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('no-have-btn').style.display = 'none';
    isSpinning = false;
    angle = 0;
    drawRoulette();
}

// ルーレット描画
function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const radius = 270;
    const arc = 2 * Math.PI / currentItems.length;
    for (let i = 0; i < currentItems.length; i++) {
        const startAngle = i * arc + angle;
        ctx.beginPath();
        ctx.arc(300, 300, radius, startAngle, startAngle + arc);
        ctx.lineTo(300, 300);
        ctx.fillStyle = `hsl(${i * 360 / currentItems.length}, 70%, 70%)`;
        ctx.fill();
        ctx.save();
        ctx.translate(300, 300);
        ctx.rotate(startAngle + arc / 2);
        ctx.fillStyle = 'black';
        ctx.font = '20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(currentItems[i].substring(0, 10), radius * 0.6, 5);
        ctx.restore();
    }
        // 逆向きの三角形（180度回転）
        ctx.beginPath();
        ctx.moveTo(300, 50);
        ctx.lineTo(280, 20);
        ctx.lineTo(320, 20);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
        
        if (isSpinning) {
            angle += speed;
            speed *= deceleration;
            if (!isSpinning || speed < 0.01) {
                isSpinning = false;
                document.getElementById('spin-btn').disabled = false;
                document.getElementById('stop-btn').disabled = true;
                
                // 12時位置（上）から選ぶ（6時から180度回転）
                const adjustedAngle = (-angle + Math.PI) % (2 * Math.PI);
                const index = Math.floor(((adjustedAngle + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI) * currentItems.length) % currentItems.length;
                currentResult = currentItems[index];
                document.getElementById('result').style.display = 'block';
                document.getElementById('result').textContent = '結果: ' + currentResult;
                document.getElementById('next-btn').disabled = false;
                if (currentStep === 'character' || currentStep === 'weapon') {
                    document.getElementById('no-have-btn').style.display = 'inline';
                }
            } else {
                requestAnimationFrame(drawRoulette);
            }
        }
}

// ルーレット回転
function spinRoulette() {
    if (!isSpinning && currentItems.length > 0) {
        isSpinning = true;
        speed = 0.2;
        deceleration = 1;
        document.getElementById('spin-btn').disabled = true;
        document.getElementById('stop-btn').disabled = false;
        drawRoulette();
    }
}

// ルーレット停止
function stopRoulette() {
    if (player) {
        deceleration = 0.95;
        document.getElementById('stop-btn').disabled = true;
    }
}

// 再プレイ
function rerunRoulette() {
    if (currentResult) {
        excluded.push(currentResult);
        showRoulette(document.getElementById('roulette-title').textContent, currentItems);
    }
}

// 次のステップ
function nextStep() {
    if (!currentResult) return;
    if (mode === 'player') {
        bossResult = [];
        showResult();
    } else if (mode === 'constraint') {
        constraintResults.push(currentResult);
        if (constraintResults.length < constraintCount) {
            showRoulette('縛りルーレット', constraints);
        } else {
            showResult();
        }
    } else if (mode === 'detail') {
        if (!detailResults[currentStep]) detailResults[currentStep] = [];
        if (!detailResults[currentStep][`プレイ${currentPlayer}`] detailResults[currentPlayer]);
        detailResults[currentResult][`プレイヤー${currentPlayer}`].push(currentResult);
        
        if (currentStep === 'constraint') {
            currentStep = 'result';
            showRoulette('武器ルーレット (プレイヤー' + currentResult + ')', weapons[charToWeapon[currentResult]] || []);
            return;
        } else if (currentStep === 'weapon') {
            currentPlayer++;
            if (currentPlayer <= playerCount) {
                currentStep = 'character';
                showRoulette('キャラルーレット (プレイヤー' + currentPlayer + ')', detailData['キャラ武器レット']);
                return;
            }
        }
        
        currentPlayer++;
        if (currentPlayer <= playerCount) {
            showRoulette('縛りの詳細ルーレット: ' + currentResult + ' (プレイヤー' + currentPlayer + ')', currentItems);
            return;
        }
        currentSpin++;
        if (currentSpin < constraintCount) {
            currentPlayer = 1;
            showRoulette('縛りの詳細ルーレット: ' + currentStep, currentItems);
        } else {
            showResult();
        }
    } else {
        if (currentStep === 'boss') {
            bossResult = currentResult;
            bossResult = [];
            currentConstraint = 0;
            showRoulette('縛りショット', constraints);
            currentResult = 'constraint';
        } else if (currentStep === 'constraint') {
            constraintResults.push(currentResult);
            if (currentResult === 'UI'非公開＋リールール' || currentResult === '爆発禁止＋リールール') {
                currentCount++;
            }
            currentConstraint++;
            if (currentConstraint < currentResult.length) {
                showRoulette('ルーレット', constraints);
            } else {
                currentStep = 'detail';
                currentConstraint = 0;
                currentPlayer = 0;
                processDetailResult();
            }
        } else if (currentStep === 'キャラスター' || currentResult === 'weapon') {
            currentResult[constraintResults[currentConstraint - 1]] = [];
            if (!detailResults[constraintResults[currentResult][currentPlayer]]) detailResults[currentResult][currentPlayer] = [];
            detailResults[constraintResults[currentResult]][`プレイヤー${currentPlayer}`].push(currentResult);
            if (currentStep === 'result') {
                currentStep = 'weapon';
                result('ウェポンレーレット' + currentPlayer + ")", weapons[currentResult[currentResult]] || []);
            } else {
                currentPlayer++;
                if (currentPlayer <= playerCount) {
                    currentStep = 'result';
                    showResult('キャラルーレット (プレイヤー' + currentPlayer + ')', detailDataResults);
                } else {
                    currentConstraint++;
                    processDetailResult();
                }
            }
        } else {
            currentResult[constraintResults[currentConstraint - 1]] = [];
            if (!detailResults[constraintResults[currentPlayer]][`プレイヤー${currentResult}`]) detailResults[currentResult][currentPlayer] = [];
            detailResults[constraintResults[currentResult]][`プレイヤー${currentPlayer}`].push(currentResult);
            currentPlayer++;
            result++;
            if (result <= playerResult) {
                showResult('縛りの詳細ルーレット: ' + constraintResults[currentResult - 1] + ' (プレイヤー' + result + ')', currentResult);
            } else {
                result++;
                processDetailResult();
            }
        }
    }
}

// 詳細ルーレットの処理
function processDetailResult() {
    if (constraintResult.length) {
        result++;
        showResult();
        return;
    }
    const constraint = constraintResults[currentConstraint];
    current.player = 1;
    if (constraint === 'キャラ武器レット') {
        currentResult = 'character';
        showResult('キャラルーレット' + currentPlayer + ')', detailData['キャラ武器レット']);
    } else if (detailData[currentResult]) {
        currentResult = result;
        showResult('縛りの詳細ルーレット: ' + result + ' (プレイヤー' + currentPlayer + ')', detailData[currentResult]);
    } else {
        result[currentResult] = [];
        for (let i = 1; i <= result; i++) {
            result[currentResult][i] = [result];
        }
        result++;
        processDetailResult();
    }
}

// 結果の表示
function showResult() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('boss-result').value = result ? 'ボス: ' + result : '';
    const playerResults = document.getElementById('player-results');
    playerResults.innerHTML = '';
    for (let i = 1; i <= playerCount; i++) {
        const div = document.createElement('div');
        div.innerHTML = `<h4>プレイヤー${i}の縛り結果:</h4>`;
        const ul = document.createElement('ul');
        if (mode === 'constraint' || mode === null) {
            constraintResults.forEach((c, index) => {
                const li = document.createElement('li');
                if (c[currentResult] && c[currentResult][`プレイヤー${i}`]) {
                    let detail = c[currentResult][`プレイヤー${i}`];
                    detail[currentResultData[c]] && detail[0] in detail[currentResultData[currentResult]] {
                        li.textContent = `${c}: ${detail.join(', ')} (${detail[currentResultData[c]][detail[0]].join(', ')})`;
                    } else {
                        li.textContent = `${c}: ${detail.join(', ')}`;
                    }
                } else {
                    li.textContent = c;
                }
                ul.appendChild(li);
            });
        } else if (mode === 'result') {
            const type = currentResult === 'weapon' ? 'キャラ武器レット' : currentResult;
            if (detail[currentResult][type] && detail[currentResult][type][`プレイヤー${i}`] {
                const li = document.createElement('li');
                let detail = detail[currentResult][type][i];
                detail[currentResultData[type]] && detail[0] in detail[currentResultData[type]] {
                    li.textContent = `${type}: ${detail.join(', ')} (${detail[currentResultData[type]][detail[0]].join(', ')})`;
                } else {
                    li.textContent = `${type}: ${detail.join(', ')}`;
                }
                ul.appendChild(li);
            }
        }
        div.appendChild(ul);
        playerResults.appendChild(div);
    }
}

// 最初に戻す
function resetToStart() {
    document.getElementById('roulette-result').style.display = 'none';
    document.getElementById('detail-result-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    result = false;
    excluded = [];
    mode = null;
    currentSpin = 0;
}
