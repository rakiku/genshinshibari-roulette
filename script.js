document.addEventListener('DOMContentLoaded', function() {

    // (データベース部分は変更ないので省略)
    const characters = [
        // モンド
        { name: "ジン", country: "モンド", weapon: "片手剣", element: "風", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "アンバー", country: "モンド", weapon: "弓", element: "炎", birth_month: "８月", version: "n.0", rarity: ['☆４'] },
        { name: "リサ", country: "モンド", weapon: "法器", element: "雷", birth_month: "６月", version: "n.0", rarity: ['☆４'] },
        { name: "ガイア", country: "モンド", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "バーバラ", country: "モンド", weapon: "法器", element: "水", birth_month: "７月", version: "n.0", rarity: ['☆４'] },
        { name: "ディルック", country: "モンド", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "レザー", country: "モンド", weapon: "両手剣", element: "雷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "ウェンティ", country: "モンド", weapon: "弓", element: "風", birth_month: "６月", version: "n.0", rarity: ['☆５'] },
        { name: "クレー", country: "モンド", weapon: "法器", element: "炎", birth_month: "７月", version: "n.0", rarity: ['☆５'] },
        { name: "ベネット", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "ノエル", country: "モンド", weapon: "両手剣", element: "岩", birth_month: "３月", version: "n.0", rarity: ['☆４'] },
        { name: "フィッシュル", country: "モンド", weapon: "弓", element: "雷", birth_month: "５月", version: "n.0", rarity: ['☆４'] },
        { name: "スクロース", country: "モンド", weapon: "法器", element: "風", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "モナ", country: "モンド", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "ディオナ", country: "モンド", weapon: "弓", element: "氷", birth_month: "１月", version: "n.1", rarity: ['☆４'] },
        { name: "アルベド", country: "モンド", weapon: "片手剣", element: "岩", birth_month: "９月", version: "n.2", rarity: ['☆５'] },
        { name: "ロサリア", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "１月", version: "n.4", rarity: ['☆４'] },
        { name: "エウルア", country: "モンド", weapon: "両手剣", element: "氷", birth_month: "１０月", version: "n.5", rarity: ['☆５'] },
        { name: "ミカ", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "８月", version: "n.5", rarity: ['☆４'] },
        { name: "ダリア", country: "モンド", weapon: "片手剣", element: "水", birth_month: "その他", version: "n.7", rarity: ['☆４'] },
        // 璃月
        { name: "魈", country: "璃月", weapon: "長柄武器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'] },
        { name: "北斗", country: "璃月", weapon: "両手剣", element: "雷", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "凝光", country: "璃月", weapon: "法器", element: "岩", birth_month: "８月", version: "n.0", rarity: ['☆４'] },
        { name: "香菱", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "行秋", country: "璃月", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.0", rarity: ['☆４'] },
        { name: "重雲", country: "璃月", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "七七", country: "璃月", weapon: "片手剣", element: "氷", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "刻晴", country: "璃月", weapon: "片手剣", element: "雷", birth_month: "１１月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "鍾離", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "辛炎", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１０月", version: "n.1", rarity: ['☆４'] },
        { name: "甘雨", country: "璃月", weapon: "弓", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆５'] },
        { name: "胡桃", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "７月", version: "n.3", rarity: ['☆５'] },
        { name: "煙緋", country: "璃月", weapon: "法器", element: "炎", birth_month: "７月", version: "n.5", rarity: ['☆４'] },
        { name: "申鶴", country: "璃月", weapon: "長柄武器", element: "氷", birth_month: "３月", version: "n.4", rarity: ['☆５'] },
        { name: "雲菫", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆４'] },
        { name: "夜蘭", country: "璃月", weapon: "弓", element: "水", birth_month: "４月", version: "n.7", rarity: ['☆５'] },
        { name: "ヨォーヨ", country: "璃月", weapon: "長柄武器", element: "草", birth_month: "３月", version: "n.4", rarity: ['☆４'] },
        { name: "白朮", country: "璃月", weapon: "法器", element: "草", birth_month: "４月", version: "n.6", rarity: ['☆５'] },
        { name: "閑雲", country: "璃月", weapon: "法器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'] },
        { name: "嘉明", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１２月", version: "n.4", rarity: ['☆４'] },
        { name: "藍硯", country: "璃月", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'] },
        // 稲妻
        { name: "神里綾華", country: "稲妻", weapon: "片手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆５'] },
        { name: "神里綾人", country: "稲妻", weapon: "片手剣", element: "水", birth_month: "３月", version: "n.6", rarity: ['☆５'] },
        { name: "楓原万葉", country: "稲妻", weapon: "片手剣", element: "風", birth_month: "１０月", version: "n.6", rarity: ['☆５'] },
        { name: "宵宮", country: "稲妻", weapon: "弓", element: "炎", birth_month: "６月", version: "n.0", rarity: ['☆５'] },
        { name: "早柚", country: "稲妻", weapon: "両手剣", element: "風", birth_month: "１０月", version: "n.0", rarity: ['☆４'] },
        { name: "雷電将軍", country: "稲妻", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'] },
        { name: "九条裟羅", country: "稲妻", weapon: "弓", element: "雷", birth_month: "７月", version: "n.1", rarity: ['☆４'] },
        { name: "珊瑚宮心海", country: "稲妻", weapon: "法器", element: "水", birth_month: "２月", version: "n.1", rarity: ['☆５'] },
        { name: "トーマ", country: "稲妻", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.2", rarity: ['☆４'] },
        { name: "荒瀧一斗", country: "稲妻", weapon: "両手剣", element: "岩", birth_month: "６月", version: "n.3", rarity: ['☆５'] },
        { name: "ゴロー", country: "稲妻", weapon: "弓", element: "岩", birth_month: "５月", version: "n.3", rarity: ['☆４'] },
        { name: "八重神子", country: "稲妻", weapon: "法器", element: "雷", birth_month: "６月", version: "n.5", rarity: ['☆５'] },
        { name: "久岐忍", country: "稲妻", weapon: "片手剣", element: "雷", birth_month: "７月", version: "n.7", rarity: ['☆４'] },
        { name: "鹿野院平蔵", country: "稲妻", weapon: "法器", element: "風", birth_month: "７月", version: "n.8", rarity: ['☆４'] },
        { name: "綺良々", country: "稲妻", weapon: "片手剣", element: "草", birth_month: "１月", version: "n.7", rarity: ['☆４'] },
        { name: "千織", country: "稲妻", weapon: "片手剣", element: "岩", birth_month: "８月", version: "n.5", rarity: ['☆５'] },
        { name: "夢見月瑞希", country: "稲妻", weapon: "法器", element: "風", birth_month: "３月", version: "n.4", rarity: ['☆５', '恒常☆５'] },
        // スメール
        { name: "ティナリ", country: "スメール", weapon: "弓", element: "草", birth_month: "１２月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "コレイ", country: "スメール", weapon: "弓", element: "草", birth_month: "５月", version: "n.0", rarity: ['☆４'] },
        { name: "ドリー", country: "スメール", weapon: "両手剣", element: "雷", birth_month: "１２月", version: "n.0", rarity: ['☆４'] },
        { name: "セノ", country: "スメール", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'] },
        { name: "キャンディス", country: "スメール", weapon: "長柄武器", element: "水", birth_month: "５月", version: "n.1", rarity: ['☆４'] },
        { name: "ニィロウ", country: "スメール", weapon: "片手剣", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "ナヒーダ", country: "スメール", weapon: "法器", element: "草", birth_month: "１０月", version: "n.2", rarity: ['☆５'] },
        { name: "レイラ", country: "スメール", weapon: "片手剣", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆４'] },
        { name: "放浪者", country: "スメール", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆５'] },
        { name: "ファルザン", country: "スメール", weapon: "弓", element: "風", birth_month: "８月", version: "n.3", rarity: ['☆４'] },
        { name: "アルハイゼン", country: "スメール", weapon: "片手剣", element: "草", birth_month: "２月", version: "n.4", rarity: ['☆５'] },
        { name: "ディシア", country: "スメール", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.5", rarity: ['☆５', '恒常☆５'] },
        { name: "カーヴェ", country: "スメール", weapon: "両手剣", element: "草", birth_month: "７月", version: "n.6", rarity: ['☆４'] },
        { name: "セトス", country: "スメール", weapon: "弓", element: "雷", birth_month: "５月", version: "n.7", rarity: ['☆４'] },
        // フォンテーヌ
        { name: "リネ", country: "フォンテーヌ", weapon: "弓", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆５'] },
        { name: "リネット", country: "フォンテーヌ", weapon: "片手剣", element: "風", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "フレミネ", country: "フォンテーヌ", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "ヌヴィレット", country: "フォンテーヌ", weapon: "法器", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "リオセスリ", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.1", rarity: ['☆５'] },
        { name: "シャルロット", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆４'] },
        { name: "フリーナ", country: "フォンテーヌ", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.2", rarity: ['☆５'] },
        { name: "ナヴィア", country: "フォンテーヌ", weapon: "両手剣", element: "岩", birth_month: "８月", version: "n.3", rarity: ['☆５'] },
        { name: "シュヴルーズ", country: "フォンテーヌ", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.3", rarity: ['☆４'] },
        { name: "クロリンデ", country: "フォンテーヌ", weapon: "片手剣", element: "雷", birth_month: "９月", version: "n.7", rarity: ['☆５'] },
        { name: "シグウィン", country: "フォンテーヌ", weapon: "弓", element: "水", birth_month: "３月", version: "n.7", rarity: ['☆５'] },
        { name: "エミリエ", country: "フォンテーヌ", weapon: "長柄武器", element: "草", birth_month: "９月", version: "n.8", rarity: ['☆５'] },
        { name: "エスコフィエ", country: "フォンテーヌ", weapon: "長柄武器", element: "氷", birth_month: "６月", version: "n.6", rarity: ['☆５'] },
        // ナタ
        { name: "イアンサ", country: "ナタ", weapon: "長柄武器", element: "雷", birth_month: "８月", version: "n.5", rarity: ['☆４'] },
        { name: "チャスカ", country: "ナタ", weapon: "弓", element: "風", birth_month: "１２月", version: "n.2", rarity: ['☆５'] },
        { name: "ムアラニ", country: "ナタ", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５'] },
        { name: "オロルン", country: "ナタ", weapon: "弓", element: "雷", birth_month: "１０月", version: "n.2", rarity: ['☆４'] },
        { name: "キィニチ", country: "ナタ", weapon: "両手剣", element: "草", birth_month: "１１月", version: "n.0", rarity: ['☆５'] },
        { name: "カチーナ", country: "ナタ", weapon: "長柄武器", element: "岩", birth_month: "４月", version: "n.0", rarity: ['☆４'] },
        { name: "シトラリ", country: "ナタ", weapon: "法器", element: "氷", birth_month: "１月", version: "n.3", rarity: ['☆５'] },
        { name: "マーヴィカ", country: "ナタ", weapon: "両手剣", element: "炎", birth_month: "８月", version: "n.3", rarity: ['☆５'] },
        { name: "ヴァレサ", country: "ナタ", weapon: "法器", element: "雷", birth_month: "１１月", version: "n.5", rarity: ['☆５'] },
        { name: "イファ", country: "ナタ", weapon: "法器", element: "風", birth_month: "３月", version: "n.5", rarity: ['☆４'] },
        { name: "シロネン", country: "ナタ", weapon: "片手剣", element: "岩", birth_month: "３月", version: "n.1", rarity: ['☆５'] },
        // スネージナヤ
        { name: "タルタリヤ", country: "スネージナヤ", weapon: "弓", element: "水", birth_month: "７月", version: "n.1", rarity: ['☆５'] },
        { name: "アルレッキーノ", country: "スネージナヤ", weapon: "長柄武器", element: "炎", birth_month: "８月", version: "n.6", rarity: ['☆５'] },
        // 例外
        { name: "旅人", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.0", rarity: ['☆５'] },
        { name: "スカーク", country: "例外", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.7", rarity: ['☆５'] },
        { name: "イネファ", country: "例外", weapon: "長柄武器", element: "雷", birth_month: "４月", version: "n.8", rarity: ['☆５'] },
        { name: "アーロイ", country: "例外", weapon: "弓", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆５'] }
    ];

    const star5Weapons = ["千烈の日輪", "ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "星鷲の紅き羽", "岩峰を巡る歌", "サーフィンタイム", "山の王の長牙", "ルミドゥースの挽歌", "赦罪", "白雨心弦", "赤月のシルエット", "有楽御簾切", "鶴鳴の余韻", "裁断", "静水流転の輝き", "凛流の監視者", "久遠流転の大典", "始まりの大魔術", "碧落の瓏", "葦海の標", "翠光の裁葉", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "聖顕の鍵", "赤砂の杖", "狩人の道", "若水", "飛来の鳴弦", "風鷹剣", "霧切の廻光", "アモスの弓", "赤角石塵滅砕", "破天の槍", "草薙の稲光", "蒼古なる自由への誓い", "終焉を嘆く詩", "神楽の真意", "盤岩結緑", "狼の末路", "波乱月白経津", "松韻の響く頃", "無工の剣", "斬山の刃", "護摩の杖", "息災", "天空の脊", "浮世の錠", "天空の翼", "天空の巻", "天空の刃", "天空の傲", "四風原典", "和璞鳶", "冬極の白星", "不滅の月華", "砕け散る光輪"];
    const allWeapons = {"長柄武器": ["香りのシンフォニスト", "砕け散る光輪", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒缨槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白缨槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍", "「漁獲」", "匣中滅龍", "死闘の槍"], "法器": ["ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"], "弓": ["冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "ael", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"], "両手剣": ["千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"], "片手剣": ["厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"]};
    const bosses = ["無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ", "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス", "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修権者", "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト", "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜", "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス", "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神", "アペプ", "吞星の鯨", "召使", "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム", "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ", "ジャプー", "リライ", "銅の掟", "ピーク", "戦羊・鉄爪", "微末", "最後のテノチズトク人"];
    const binds = ["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし", "武器縛り"];
    const initialCharacters = ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"];
    const ownership100Characters = ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"];
    const alphabetData = {"A": ["荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー", "アーロイ"], "B": ["バーバラ", "白朮", "ベネット", "北斗"], "C": ["キャンディス", "クロリンデ", "コレイ", "シャルロット", "シュヴルーズ", "シトラリ", "セノ", "千織", "チャスカ", "重雲"], "D": ["ドリー", "ディシア", "ディルック", "ディオナ", "ダリア"], "E": ["エミリエ", "エウルア", "エスコフィエ"], "F": ["ファルザン", "フリーナ", "フレミネ", "フィッシュル"], "G": ["嘉明", "甘雨", "ゴロー"], "H": ["胡桃"], "I": ["イアンサ", "イファ", "イネファ"], "J": ["ジン"], "K": ["神里綾華", "神里綾人", "キィニチ", "綺良々", "久岐忍", "九条裟羅", "クレー", "刻晴", "カチーナ", "カーヴェ"], "L": ["リサ", "リネ", "リネット", "レイラ", "藍硯"], "M": ["ミカ", "ムアラニ", "モナ", "マーヴィカ"], "N": ["ナヴィア", "ナヒーダ", "ニィロウ", "ヌヴィレット", "ノエル"], "O": ["オロルン"], "Q": ["七七"], "R": ["雷電将軍", "レザー", "ロサリア", "リオセスリ"], "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"], "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"], "V": ["ウェンティ", "ヴァレサ"], "W": ["放浪者"], "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"], "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ", "夢見月瑞希"], "Z": ["鍾離"]};

    const subRoulettes = {
        "国縛り": [...new Set(characters.map(c => c.country))].sort(),
        "モノ元素縛り": [...new Set(characters.filter(c => c.element !== "その他").map(c => c.element))].sort(),
        "武器種縛り": [...new Set(characters.map(c => c.weapon))].sort(),
        "誕生月": [...new Set(characters.filter(c => c.birth_month !== "その他").map(c => c.birth_month))].sort((a,b) => parseInt(a) - parseInt(b)),
        "各1.1縛り": [...new Set(characters.map(c => c.version))].filter(v => v !== 'その他').sort(),
        "アルファベット縛り": Object.keys(alphabetData).sort(),
        "武器縛り": Object.values(allWeapons).flat()
    };
    
    const playerBindTypes = ["キャラルーレット", "キャラ武器ルーレット"];

    let playerCount, bindCount, mode, currentRoulette, currentBindName, items, angle = 0, spinning = false, selectedBinds = [], results = {}, currentPlayer = 1, lastResult;
    let rerolledChars, rerolledWeapons;

    const canvas = document.getElementById('rouletteCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#00c0fe', '#36d6a0', '#fe6640', '#8dcc06', '#74E4E2', '#cc85ff', '#F3AC11'];

    document.getElementById('startAllButton').addEventListener('click', () => startRoulette('all'));
    document.getElementById('startBossButton').addEventListener('click', () => startRoulette('boss'));
    document.getElementById('startBindButton').addEventListener('click', () => startRoulette('bind'));
    document.getElementById('showBindSelectionButton').addEventListener('click', () => showBindSelection());
    document.getElementById('homeButton').addEventListener('click', backToStart);
    document.getElementById('executeSelectionButton').addEventListener('click', executeBinds);

    document.getElementById('spinButton').addEventListener('click', spinRoulette);
    document.getElementById('stopButton').addEventListener('click', stopRoulette);
    document.getElementById('nextButton').addEventListener('click', nextStep);
    document.getElementById('notOwnedButton').addEventListener('click', notOwned);
    document.getElementById('backToStartButton').addEventListener('click', backToStart);

    function showScreen(screenId) {
        ['startScreen', 'bindSelection', 'rouletteScreen', 'resultScreen'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }
    
    function initialize() {
        playerCount = parseInt(document.getElementById('playerCount').value) || 1;
        bindCount = parseInt(document.getElementById('bindCount').value) || 1;
        results = { boss: null, common: {}, players: Array(playerCount).fill(0).map(() => ({})) };
        currentPlayer = 1;
        currentBindIndex = 0;
        lastResult = null;
        rerolledChars = Array(playerCount + 1).fill(0).map(() => []);
        rerolledWeapons = Array(playerCount + 1).fill(0).map(() => ({}));
    }

    function showBindSelection() {
        initialize();
        mode = 'selected';
        selectedBinds = [];
        showScreen('bindSelection');
        const bindButtons = document.getElementById('bindButtons');
        bindButtons.innerHTML = '';
        
        binds.forEach(bind => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = bind;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(bind));
            bindButtons.appendChild(label);
        });
    }

    function executeBinds() {
        selectedBinds = Array.from(document.querySelectorAll('#bindButtons input:checked')).map(cb => cb.value);
        if (selectedBinds.length === 0) {
            alert("縛りを1つ以上選択してください。");
            return;
        }
        
        selectedBinds.sort((a, b) => {
            const aIsPlayerBind = playerBindTypes.includes(a);
            const bIsPlayerBind = playerBindTypes.includes(b);
            if (aIsPlayerBind && !bIsPlayerBind) return 1;
            if (!aIsPlayerBind && bIsPlayerBind) return -1;
            return 0;
        });
        startNextSelectedBind();
    }
    
    function startNextSelectedBind() {
        if(currentBindIndex >= selectedBinds.length) {
            showResults();
            return;
        }
        currentBindName = selectedBinds[currentBindIndex];
        setupRouletteForBind(currentBindName);
    }
    
    function startRoulette(type) {
        initialize();
        mode = type;
        showScreen('rouletteScreen');
        if (type === 'all' || type === 'boss') {
            currentRoulette = 'boss';
            items = bosses.slice().sort(() => Math.random() - 0.5);
        } else if (type === 'bind') {
            currentRoulette = 'bind';
            items = getAvailableBinds();
        }
        document.getElementById('spinButton').disabled = false;
        drawRoulette();
    }
    
    function setupRouletteForBind(bindName) {
        currentBindName = bindName;
        if (subRoulettes[bindName]) {
            currentRoulette = 'sub';
            let subItems = subRoulettes[bindName];

            if(bindName !== '武器縛り') {
                const tempFilters = {...results.common, ...results.players[currentPlayer - 1]};
                 subItems = subItems.filter(option => {
                    const tempWithOption = {...tempFilters};
                    tempWithOption[bindName] = option;
                    return characters.some(char => checkCharEligibility(char, tempWithOption));
                 });
            }
            items = subItems.slice().sort(() => Math.random() - 0.5);

        } else if (playerBindTypes.includes(bindName)) {
            currentRoulette = 'character';
            
            const playerHasCharRoulette = hasPlayerBind('キャラルーレット');
            if (bindName === 'キャラ武器ルーレット' && playerHasCharRoulette) {
                const charName = results.players[currentPlayer - 1]['キャラルーレット'];
                const charData = characters.find(c => c.name === charName);
                currentRoulette = 'weapon';
                items = getFilteredWeapons(charData.weapon, charName);
                results.players[currentPlayer - 1][bindName] = { char: charName, weapon: null };
            } else {
                 items = getFilteredCharacters().map(c => c.name).sort(() => Math.random() - 0.5);
            }
        } else {
            results.common[bindName] = true;
            if(bindName.includes("リロール")){
                bindCount++;
            }
            proceedToNext();
            return;
        }

        if (items.length === 1) {
            lastResult = items[0];
            showPopup(lastResult);
            setTimeout(() => { // ポップアップが一瞬で消えないように
                if(document.getElementById('popup').style.display === 'block'){
                    document.getElementById('popup').click();
                }
            }, 1500);
        } else {
            document.getElementById('spinButton').disabled = false;
            showScreen('rouletteScreen');
            drawRoulette();
        }
    }
    
    function checkCharEligibility(char, filters) {
        for (const bindName in filters) {
            const value = filters[bindName];
            if (!value) continue;
            let match = false;
            switch(bindName) {
                case "国縛り": if (char.country === value) match = true; break;
                case "モノ元素縛り": if (char.element === value) match = true; break;
                case "武器種縛り": if (char.weapon === value) match = true; break;
                case "誕生月": if (char.birth_month === value) match = true; break;
                case "各1.1縛り": if (char.version === value) match = true; break;
                case "アルファベット縛り": if (alphabetData[value].includes(char.name)) match = true; break;
                case "恒常☆５縛り": if (char.rarity.includes('恒常☆５')) match = true; break;
                case "☆４キャラ武器": if (char.rarity.includes('☆４')) match = true; break;
                case "初期キャラのみ": if (initialCharacters.includes(char.name)) match = true; break;
                case "旅人縛り": if (char.name === "旅人") match = true; break;
                case "所持率100％縛り": if (ownership100Characters.includes(char.name)) match = true; break;
                default: match = true; break;
            }
            if (!match) return false;
        }
        return true;
    }
    
    function getFilteredCharacters(customFilters = null, player = currentPlayer) {
        const filters = customFilters ? customFilters : {...results.common, ...results.players[player - 1]};
        const rerolled = rerolledChars[player];
        let filtered = characters.filter(c => !rerolled.includes(c.name));
        return filtered.filter(c => checkCharEligibility(c, filters));
    }

    function getFilteredWeapons(weaponType, charName) {
        let filtered = allWeapons[weaponType];
        if (results.common["☆４キャラ武器"]) {
            filtered = filtered.filter(w => !star5Weapons.includes(w));
        }
        const currentPlayerRerolledWeapons = rerolledWeapons[currentPlayer][charName] || [];
        filtered = filtered.filter(w => !currentPlayerRerolledWeapons.includes(w));
        return filtered.slice().sort(() => Math.random() - 0.5);
    }
    
    function drawRoulette() {
        if (!items || items.length === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#000';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('対象アイテムがありません', canvas.width / 2, canvas.height / 2);
             if (items && items.length === 0) {
                 setTimeout(() => {
                    proceedToNext();
                 }, 100);
            }
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const radius = canvas.width / 2 - 20;
        const arc = 2 * Math.PI / items.length;
        for (let i = 0; i < items.length; i++) {
            const startAngle = i * arc + angle;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + arc);
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            const gradient = ctx.createLinearGradient(canvas.width / 2 + Math.cos(startAngle) * radius, canvas.height / 2 + Math.sin(startAngle) * radius, canvas.width / 2 + Math.cos(startAngle + arc) * radius, canvas.height / 2 + Math.sin(startAngle + arc) * radius);
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
            ctx.fillText(items[i], radius - 10, 0);
            ctx.restore();
        }
        
        const arrowBaseX = canvas.width / 2 + radius;
        ctx.beginPath();
        ctx.moveTo(arrowBaseX - 20, canvas.height / 2);
        ctx.lineTo(arrowBaseX, canvas.height / 2 - 10);
        ctx.lineTo(arrowBaseX, canvas.height / 2 + 10);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
    };
    
    function spinRoulette() {
        if (spinning || !items || items.length === 0) return;
        spinning = true;
        spinSpeed = 0.2 + Math.random() * 0.1;
        document.getElementById('spinButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        document.getElementById('notOwnedButton').classList.add('hidden');
        document.getElementById('nextButton').classList.add('hidden');
        animate();
    };
    function animate() {
        if (!spinning) return;
        angle += spinSpeed;
        drawRoulette();
        if (spinSpeed > 0.001) { requestAnimationFrame(animate); }
    };
    function stopRoulette() {
        if (!spinning || spinSpeed === 0) return;
        const stopInterval = setInterval(() => {
            spinSpeed *= 0.96;
            angle += spinSpeed;
            drawRoulette();
            if (spinSpeed < 0.005) {
                spinSpeed = 0;
                spinning = false;
                clearInterval(stopInterval);
                const arc = 2 * Math.PI / items.length;
                const index = Math.floor(((2 * Math.PI - (angle % (2 * Math.PI))) % (2 * Math.PI)) / arc);
                lastResult = items[index];
                showPopup(lastResult);
            }
        }, 20);
        document.getElementById('stopButton').disabled = true;
    };
    function showPopup(text) {
        const popup = document.getElementById('popup');
        popup.textContent = text;
        popup.style.display = 'block';
        const clickHandler = () => {
            popup.style.display = 'none';
            document.getElementById('nextButton').classList.remove('hidden');
            if(currentRoulette === 'character' || currentRoulette === 'weapon') {
                document.getElementById('notOwnedButton').classList.remove('hidden');
            }
            popup.removeEventListener('click', clickHandler);
        };
        popup.addEventListener('click', clickHandler);
    };
    
    function nextStep() {
        processResult();
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('notOwnedButton').classList.add('hidden');
    }

    function processResult() {
        const isCommonFilter = subRoulettes[currentBindName] && !playerBindTypes.includes(currentBindName) && currentBindName !== 'アルファベット縛り';

        if (currentRoulette === 'boss') {
            results.boss = lastResult;
            if (mode === 'boss') { showResults(); return; }
            proceedToNext();
        } else if (currentRoulette === 'bind') {
            setupRouletteForBind(lastResult);
        } else if (currentRoulette === 'sub') {
            (isCommonFilter ? results.common : results.players[currentPlayer - 1])[currentBindName] = lastResult;
            proceedToNextPlayer();
        } else if (currentRoulette === 'character') {
            if (currentBindName === 'キャラ武器ルーレット') {
                results.players[currentPlayer - 1][currentBindName] = { char: lastResult, weapon: null };
                currentRoulette = 'weapon';
                const charData = characters.find(c => c.name === lastResult);
                items = getFilteredWeapons(charData.weapon, charData.name);
                document.getElementById('spinButton').disabled = false;
                drawRoulette();
            } else {
                results.players[currentPlayer - 1][currentBindName] = lastResult;
                proceedToNextPlayer();
            }
        } else if (currentRoulette === 'weapon') {
            results.players[currentPlayer - 1]['キャラ武器ルーレット'].weapon = lastResult;
            proceedToNextPlayer();
        }
    }
    
    function hasPlayerBind(bindName, player = currentPlayer) {
        return !!results.players[player - 1][bindName];
    }

    function proceedToNextPlayer() {
        const isCommonFilter = subRoulettes[currentBindName] && !playerBindTypes.includes(currentBindName) && currentBindName !== 'アルファベット縛り';
        currentPlayer++;
        if (currentPlayer > playerCount || isCommonFilter) {
            currentPlayer = 1;
            proceedToNext();
        } else {
            setupRouletteForBind(currentBindName);
        }
    }
    
    function proceedToNext() {
        if (mode === 'all' && currentRoulette === 'boss') {
             currentRoulette = 'bind';
             items = getAvailableBinds();
             document.getElementById('spinButton').disabled = false;
             drawRoulette();
             return;
        }

        if (mode === 'selected') {
            currentBindIndex++;
            startNextSelectedBind();
        } else {
            const totalBinds = Object.keys(results.common).length + Object.keys(results.players[0]).length;
            if (totalBinds < bindCount) {
                currentRoulette = 'bind';
                items = getAvailableBinds();
                document.getElementById('spinButton').disabled = false;
                drawRoulette();
            } else {
                showResults();
            }
        }
    }

    function getAvailableBinds() {
        let available = [...binds];
        const allSelectedBinds = [...Object.keys(results.common), ...Object.keys(results.players.flat().reduce((acc, obj) => ({...acc, ...obj}), {}))];
        
        available = available.filter(b => !allSelectedBinds.includes(b));

        const hasCharBind = allSelectedBinds.some(b => playerBindTypes.includes(b));
        if (hasCharBind) {
            const charFilterBinds = Object.keys(subRoulettes).filter(b => b !== '武器縛り');
            available = available.filter(b => !charFilterBinds.includes(b) && !playerBindTypes.includes(b));
        }
        if (results.common['☆１、聖遺物なし']) {
            available = available.filter(b => b !== 'キャラ武器ルーレット' && b !== '武器縛り');
        }
        if (results.common['恒常☆５縛り']) available = available.filter(b => b !== '☆４キャラ武器');
        if (results.common['☆４キャラ武器']) available = available.filter(b => b !== '恒常☆５縛り');
        
        return available.filter(bind => {
            const tempFilters = { ...results.common };
            if (playerBindTypes.includes(bind) || subRoulettes[bind]) {
                 if (subRoulettes[bind]) {
                     return subRoulettes[bind].some(option => {
                         const tempSubFilters = {...tempFilters, [bind]: option};
                         return characters.some(char => checkCharEligibility(char, tempSubFilters));
                     });
                 }
                 return getFilteredCharacters({ ...tempFilters }).length > 0;
            }
            return true;
        }).slice().sort(() => Math.random() - 0.5);
    }
    
    function notOwned() {
        if(currentRoulette === 'character') {
            rerolledChars[currentPlayer].push(lastResult);
            items = getFilteredCharacters().map(c => c.name).sort(() => Math.random() - 0.5);
        } else if (currentRoulette === 'weapon') {
            const charName = results.players[currentPlayer - 1]['キャラ武器ルーレット'].char;
            if (!rerolledWeapons[currentPlayer][charName]) rerolledWeapons[currentPlayer][charName] = [];
            rerolledWeapons[currentPlayer][charName].push(lastResult);
            const weaponType = characters.find(c => c.name === charName).weapon;
            items = getFilteredWeapons(weaponType, charName);
        }
        
        if (items.length === 0) {
            alert("候補がいなくなりました！");
            proceedToNext();
            return;
        }
        document.getElementById('notOwnedButton').classList.add('hidden');
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('spinButton').disabled = false;
        drawRoulette();
    }

    function showResults() {
        showScreen('resultScreen');
        const resultsDiv = document.getElementById('results');
        let html = `<h2>ボス：${results.boss || "未選択"}</h2>`;
        
        const commonKeys = Object.keys(results.common);
        if (commonKeys.length > 0) {
            html += `<h3>共通の縛り：</h3><ul>`;
            commonKeys.forEach(key => {
                let resultText = key;
                const resultValue = results.common[key];
                if (resultValue !== true) resultText += `：${resultValue}`;
                html += `<li>${resultText}</li>`;
            });
            html += `</ul>`;
        }

        for (let i = 0; i < playerCount; i++) {
            const playerBinds = results.players[i];
            const playerBindKeys = Object.keys(playerBinds);
            if (playerBindKeys.length > 0) {
                html += `<h3>プレイヤー${i + 1}の縛り：</h3><ul>`;
                playerBindKeys.forEach(bindName => {
                    const resultDetail = playerBinds[bindName];
                    let detailHtml = '';
                    if (bindName === "キャラ武器ルーレット") {
                        const char = resultDetail.char || "未選択";
                        let weapon = resultDetail.weapon || "未選択";
                        if (results.common['☆１、聖遺物なし']) weapon = "☆１武器";
                        detailHtml = `${char} - ${weapon}`;
                    } else {
                        detailHtml = resultDetail || "未選択";
                    }
                    html += `<li>${bindName}：${detailHtml}</li>`;
                });
                html += `</ul>`;
            }

            const finalChars = getFilteredCharacters(null, i + 1);
            let finalCharText = `<h3>プレイヤー${i + 1}の対象キャラクター (${finalChars.length}人)：</h3>`;

            if (hasPlayerBind('キャラルーレット', i+1) || hasPlayerBind('キャラ武器ルーレット', i+1)) {
                const charName = playerBinds['キャラルーレット'] || playerBinds['キャラ武器ルーレット'].char;
                finalCharText = `<h3>プレイヤー${i + 1}の対象キャラクター (1人)：</h3>`;
                finalChars = [{name: charName}];
            }

            if(finalChars.length > 0){
                finalCharText += `<p class="char-list-final">${finalChars.map(c => c.name).join('、')}</p>`;
            } else {
                finalCharText += `<p>条件を満たすキャラクターはいません</p>`;
            }
             html += finalCharText;
        }

        resultsDiv.innerHTML = html;
    }
    
    function backToStart() { showScreen('startScreen'); }
});
