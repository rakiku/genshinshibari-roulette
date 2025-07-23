// data.js
// 原神 縛りルーレット用 総合データファイル (キャラクターリスト完全修正版)

const GENSHIN_DATA = {
    // =====================================================================
    // 1. ボスリスト
    // =====================================================================
    bosses: [
        "鉄甲熔炎帝王", "アンドリアス", "ニニアン", "禍津御建鳴神命", "ディアンナラ", "恒常からくり陣形", "無相の炎", "正機の神", "無相の雷", "アペプ", "黄金王獣", "氷風組曲コッペリア", "リアム", "急凍樹", "戦羊・鉄爪", "赤璋巡岳府君", "銅の掟", "暴君・金焔のクク竜", "アビサルヴィシャップ", "実験用フィールド生成装置", "魔偶剣鬼", "迅電樹", "エンシェントヴィシャップ・岩", "氷風組曲コペリウス", "ジャプー", "召使", "微末", "輝ける溶岩の龍像", "千年真珠の海駿", "深罪の浸礼者", "グーシートース", "シネアス", "無相の草", "吞星の鯨", "異色三連星", "公子", "バラチコ", "半永久統制マトリックス", "純水精霊", "無相の風", "ヴィヴィアン", "山の王・貪食のユムカ竜", "深淵なるミミック・パピラ", "秘源機兵・機構デバイス", "山隠れの猊獣", "魔像レガトゥス", "キング＆クイーン", "無相の氷", "淑女", "兆載永劫ドレイク", "コシーホ", "秘源機兵・統御デバイス", "爆炎樹", "リライ", "迷える霊覚の修権者", "イゾルト", "若陀龍王", "遺跡サーペント", "無相の水", "雷音権現", "無相の岩", "水形タルパ", "風食ウェネト", "ロッキー", "マッシュラプトル", "ピーク"
    ],

    // =====================================================================
    // 2. 縛りリスト
    // =====================================================================
    shibari_list: [
        { id: 1, name: "☆４キャラ武器", type: 'common', needs_sub_roulette: false },
        { id: 2, name: "回復禁止", type: 'common', needs_sub_roulette: false },
        { id: 3, name: "恒常☆５縛り", type: 'common', needs_sub_roulette: false },
        { id: 4, name: "所持率100％縛り", type: 'common', needs_sub_roulette: false },
        { id: 5, name: "国縛り", type: 'player', needs_sub_roulette: true, sub_key: 'countries' },
        { id: 6, name: "初期キャラのみ", type: 'common', needs_sub_roulette: false },
        { id: 7, name: "UI非表示＋リロール", type: 'common', needs_sub_roulette: false },
        { id: 8, name: "誰か一人が倒れたら負け縛り", type: 'common', needs_sub_roulette: false },
        { id: 9, name: "無凸縛り", type: 'common', needs_sub_roulette: false },
        { id: 10, name: "キャラルーレット", type: 'player', needs_sub_roulette: true, sub_key: 'characters' },
        { id: 11, name: "武器種縛り", type: 'player', needs_sub_roulette: true, sub_key: 'weapon_types' },
        { id: 12, name: "キャラ武器ルーレット", type: 'player', needs_sub_roulette: true, sub_key: 'character_weapon' },
        { id: 13, name: "聖遺物禁止", type: 'common', needs_sub_roulette: false },
        { id: 14, name: "爆発禁止＋リロール", type: 'common', needs_sub_roulette: false },
        { id: 15, name: "旅人縛り", type: 'common', needs_sub_roulette: false },
        { id: 16, name: "モノ元素縛り", type: 'player', needs_sub_roulette: true, sub_key: 'elements' },
        { id: 17, name: "各1.1縛り", type: 'player', needs_sub_roulette: true, sub_key: 'versions' },
        { id: 18, name: "誕生月", type: 'player', needs_sub_roulette: true, sub_key: 'months' },
        { id: 19, name: "アルファベット縛り", type: 'player', needs_sub_roulette: true, sub_key: 'alphabets' },
        { id: 20, name: "☆１、聖遺物なし", type: 'common', needs_sub_roulette: false },
    ],

    // =====================================================================
    // 3. 詳細ルーレットの項目
    // =====================================================================
    sub_roulette_items: {
        countries: ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
        weapon_types: ["片手剣", "両手剣", "長柄武器", "法器", "弓"],
        elements: ["炎", "水", "氷", "岩", "草", "風", "雷"],
        versions: ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        alphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    },
    
    // =====================================================================
    // 4. 特定キャラクターリスト
    // =====================================================================
    character_lists: {
        kouchou_g5: ["ジン", "ディルック", "ディシア", "夢見月瑞希", "七七", "モナ", "ティナリ"],
        shoyuritsu_100: ["旅人", "香菱", "ガイア", "コレイ", "ノエル", "リサ", "バーバラ", "アンバー"],
        initial: ["旅人", "アンバー", "ガイア", "リサ"],
    },

    // =====================================================================
    // 5. 武器データ
    // =====================================================================
    weapons: {
        "片手剣": ["厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"],
        "両手剣": ["千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "傭兵の重剣", "理屈責め"],
        "弓": ["冷寂の音", "星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"],
        "法器": ["ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"],
        "長柄武器": ["香りのシンフォニスト", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒纓槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白纓槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "「漁獲」", "喜多院十文字槍", "和璞鳶", "千岩長槍", "匣中滅龍", "死闘の槍"]
    },
    kouchou_g5_weapons: ["天空の巻", "天空の翼", "天空の脊", "天空の傲", "天空の刃", "和璞鳶", "アモスの弓", "狼の末路", "四風原典", "風鷹剣"],

    // =====================================================================
    // 6. 総合キャラクターデータ (全キャラクターを網羅した完全版)
    // =====================================================================
    characters: [
        // モンド
        { name: "ミカ", rarity: 4, nation: "モンド", element: "氷", weapon_type: "長柄武器", version: "n.5", birthday: "8月", alphabet: "M" },
        { name: "レザー", rarity: 4, nation: "モンド", element: "雷", weapon_type: "両手剣", version: "n.0", birthday: "9月", alphabet: "R" },
        { name: "アルベド", rarity: 5, nation: "モンド", element: "岩", weapon_type: "片手剣", version: "n.2", birthday: "9月", alphabet: "A" },
        { name: "ディオナ", rarity: 4, nation: "モンド", element: "氷", weapon_type: "弓", version: "n.1", birthday: "1月", alphabet: "D" },
        { name: "ディルック", rarity: 5, nation: "モンド", element: "炎", weapon_type: "両手剣", version: "n.0", birthday: "4月", alphabet: "D" },
        { name: "ノエル", rarity: 4, nation: "モンド", element: "岩", weapon_type: "両手剣", version: "n.0", birthday: "3月", alphabet: "N" },
        { name: "フィッシュル", rarity: 4, nation: "モンド", element: "雷", weapon_type: "弓", version: "n.0", birthday: "5月", alphabet: "F" },
        { name: "モナ", rarity: 5, nation: "モンド", element: "水", weapon_type: "法器", version: "n.0", birthday: "8月", alphabet: "M" },
        { name: "バーバラ", rarity: 4, nation: "モンド", element: "水", weapon_type: "法器", version: "n.0", birthday: "7月", alphabet: "B" },
        { name: "ロサリア", rarity: 4, nation: "モンド", element: "氷", weapon_type: "長柄武器", version: "n.4", birthday: "1月", alphabet: "R" },
        { name: "スクロース", rarity: 4, nation: "モンド", element: "風", weapon_type: "法器", version: "n.0", birthday: "11月", alphabet: "S" },
        { name: "ジン", rarity: 5, nation: "モンド", element: "風", weapon_type: "片手剣", version: "n.0", birthday: "3月", alphabet: "J" },
        { name: "ベネット", rarity: 4, nation: "モンド", element: "炎", weapon_type: "片手剣", version: "n.0", birthday: "2月", alphabet: "B" },
        { name: "ウェンティ", rarity: 5, nation: "モンド", element: "風", weapon_type: "弓", version: "n.0", birthday: "6月", alphabet: "V" },
        { name: "アンバー", rarity: 4, nation: "モンド", element: "炎", weapon_type: "弓", version: "n.0", birthday: "8月", alphabet: "A" },
        { name: "クレー", rarity: 5, nation: "モンド", element: "炎", weapon_type: "法器", version: "n.0", birthday: "7月", alphabet: "K" },
        { name: "ガイア", rarity: 4, nation: "モンド", element: "氷", weapon_type: "片手剣", version: "n.0", birthday: "11月", alphabet: "K" },
        { name: "エウルア", rarity: 5, nation: "モンド", element: "氷", weapon_type: "両手剣", version: "n.5", birthday: "10月", alphabet: "E" },
        { name: "リサ", rarity: 4, nation: "モンド", element: "雷", weapon_type: "法器", version: "n.0", birthday: "6月", alphabet: "L" },
        { name: "ダリア", rarity: 4, nation: "モンド", element: "水", weapon_type: "片手剣", version: "n.7", birthday: "5月", alphabet: "D" },
        // 璃月
        { name: "藍硯", rarity: 4, nation: "璃月", element: "風", weapon_type: "法器", version: "n.3", birthday: "1月", alphabet: "L" },
        { name: "嘉明", rarity: 4, nation: "璃月", element: "炎", weapon_type: "両手剣", version: "n.4", birthday: "12月", alphabet: "G" },
        { name: "閑雲", rarity: 5, nation: "璃月", element: "風", weapon_type: "法器", version: "n.4", birthday: "4月", alphabet: "X" },
        { name: "白朮", rarity: 5, nation: "璃月", element: "草", weapon_type: "法器", version: "n.6", birthday: "4月", alphabet: "B" },
        { name: "ヨォーヨ", rarity: 4, nation: "璃月", element: "草", weapon_type: "長柄武器", version: "n.4", birthday: "3月", alphabet: "Y" },
        { name: "夜蘭", rarity: 5, nation: "璃月", element: "水", weapon_type: "弓", version: "n.7", birthday: "4月", alphabet: "Y" },
        { name: "魈", rarity: 5, nation: "璃月", element: "風", weapon_type: "長柄武器", version: "n.3", birthday: "4月", alphabet: "X" },
        { name: "香菱", rarity: 4, nation: "璃月", element: "炎", weapon_type: "長柄武器", version: "n.0", birthday: "11月", alphabet: "X" },
        { name: "鍾離", rarity: 5, nation: "璃月", element: "岩", weapon_type: "長柄武器", version: "n.1", birthday: "12月", alphabet: "Z" },
        { name: "重雲", rarity: 4, nation: "璃月", element: "氷", weapon_type: "両手剣", version: "n.0", birthday: "9月", alphabet: "C" },
        { name: "辛炎", rarity: 4, nation: "璃月", element: "炎", weapon_type: "両手剣", version: "n.1", birthday: "10月", alphabet: "X" },
        { name: "行秋", rarity: 4, nation: "璃月", element: "水", weapon_type: "片手剣", version: "n.0", birthday: "10月", alphabet: "X" },
        { name: "胡桃", rarity: 5, nation: "璃月", element: "炎", weapon_type: "長柄武器", version: "n.3", birthday: "7月", alphabet: "H" },
        { name: "申鶴", rarity: 5, nation: "璃月", element: "氷", weapon_type: "長柄武器", version: "n.4", birthday: "3月", alphabet: "S" },
        { name: "甘雨", rarity: 5, nation: "璃月", element: "氷", weapon_type: "弓", version: "n.2", birthday: "12月", alphabet: "G" },
        { name: "煙緋", rarity: 4, nation: "璃月", element: "炎", weapon_type: "法器", version: "n.5", birthday: "7月", alphabet: "Y" },
        { name: "北斗", rarity: 4, nation: "璃月", element: "雷", weapon_type: "両手剣", version: "n.0", birthday: "2月", alphabet: "B" },
        { name: "刻晴", rarity: 5, nation: "璃月", element: "雷", weapon_type: "片手剣", version: "n.0", birthday: "11月", alphabet: "K" },
        { name: "凝光", rarity: 4, nation: "璃月", element: "岩", weapon_type: "法器", version: "n.0", birthday: "8月", alphabet: "N" },
        { name: "雲菫", rarity: 4, nation: "璃月", element: "岩", weapon_type: "長柄武器", version: "n.4", birthday: "5月", alphabet: "Y" },
        { name: "七七", rarity: 5, nation: "璃月", element: "氷", weapon_type: "片手剣", version: "n.0", birthday: "3月", alphabet: "Q" },
        // 稲妻
        { name: "夢見月瑞希", rarity: 5, nation: "稲妻", element: "風", weapon_type: "法器", version: "n.4", birthday: "3月", alphabet: "M" },
        { name: "千織", rarity: 5, nation: "稲妻", element: "岩", weapon_type: "片手剣", version: "n.5", birthday: "8月", alphabet: "C" },
        { name: "綺良々", rarity: 4, nation: "稲妻", element: "草", weapon_type: "片手剣", version: "n.7", birthday: "1月", alphabet: "K" },
        { name: "鹿野院平蔵", rarity: 4, nation: "稲妻", element: "風", weapon_type: "法器", version: "n.8", birthday: "7月", alphabet: "S" },
        { name: "久岐忍", rarity: 4, nation: "稲妻", element: "雷", weapon_type: "片手剣", version: "n.7", birthday: "7月", alphabet: "K" },
        { name: "雷電将軍", rarity: 5, nation: "稲妻", element: "雷", weapon_type: "長柄武器", version: "n.1", birthday: "6月", alphabet: "R" },
        { name: "荒瀧一斗", rarity: 5, nation: "稲妻", element: "岩", weapon_type: "両手剣", version: "n.3", birthday: "6月", alphabet: "A" },
        { name: "神里綾華", rarity: 5, nation: "稲妻", element: "氷", weapon_type: "片手剣", version: "n.0", birthday: "9月", alphabet: "K" },
        { name: "神里綾人", rarity: 5, nation: "稲妻", element: "水", weapon_type: "片手剣", version: "n.6", birthday: "3月", alphabet: "K" },
        { name: "珊瑚宮心海", rarity: 5, nation: "稲妻", element: "水", weapon_type: "法器", version: "n.1", birthday: "2月", alphabet: "S" },
        { name: "楓原万葉", rarity: 5, nation: "稲妻", element: "風", weapon_type: "片手剣", version: "n.6", birthday: "10月", alphabet: "K" },
        { name: "早柚", rarity: 4, nation: "稲妻", element: "風", weapon_type: "両手剣", version: "n.0", birthday: "10月", alphabet: "S" },
        { name: "トーマ", rarity: 4, nation: "稲妻", element: "炎", weapon_type: "長柄武器", version: "n.2", birthday: "1月", alphabet: "T" },
        { name: "宵宮", rarity: 5, nation: "稲妻", element: "炎", weapon_type: "弓", version: "n.0", birthday: "6月", alphabet: "Y" },
        { name: "八重神子", rarity: 5, nation: "稲妻", element: "雷", weapon_type: "法器", version: "n.5", birthday: "6月", alphabet: "Y" },
        { name: "ゴロー", rarity: 4, nation: "稲妻", element: "岩", weapon_type: "弓", version: "n.3", birthday: "5月", alphabet: "G" },
        { name: "九条裟羅", rarity: 4, nation: "稲妻", element: "雷", weapon_type: "弓", version: "n.1", birthday: "7月", alphabet: "K" },
        // スネージナヤ
        { name: "アルレッキーノ", rarity: 5, nation: "スネージナヤ", element: "炎", weapon_type: "長柄武器", version: "n.6", birthday: "8月", alphabet: "A" },
        { name: "タルタリヤ", rarity: 5, nation: "スネージナヤ", element: "水", weapon_type: "弓", version: "n.1", birthday: "7月", alphabet: "T" },
        // スメール
        { name: "セトス", rarity: 4, nation: "スメール", element: "雷", weapon_type: "弓", version: "n.7", birthday: "5月", alphabet: "S" },
        { name: "カーヴェ", rarity: 4, nation: "スメール", element: "草", weapon_type: "両手剣", version: "n.6", birthday: "7月", alphabet: "K" },
        { name: "ディシア", rarity: 5, nation: "スメール", element: "炎", weapon_type: "両手剣", version: "n.5", birthday: "4月", alphabet: "D" },
        { name: "アルハイゼン", rarity: 5, nation: "スメール", element: "草", weapon_type: "片手剣", version: "n.4", birthday: "2月", alphabet: "A" },
        { name: "放浪者", rarity: 5, nation: "スメール", element: "風", weapon_type: "法器", version: "n.3", birthday: "1月", alphabet: "W" },
        { name: "ファルザン", rarity: 4, nation: "スメール", element: "風", weapon_type: "弓", version: "n.3", birthday: "8月", alphabet: "F" },
        { name: "レイラ", rarity: 4, nation: "スメール", element: "氷", weapon_type: "片手剣", version: "n.2", birthday: "12月", alphabet: "L" },
        { name: "ナヒーダ", rarity: 5, nation: "スメール", element: "草", weapon_type: "法器", version: "n.2", birthday: "10月", alphabet: "N" },
        { name: "キャンディス", rarity: 4, nation: "スメール", element: "水", weapon_type: "長柄武器", version: "n.1", birthday: "5月", alphabet: "C" },
        { name: "セノ", rarity: 5, nation: "スメール", element: "雷", weapon_type: "長柄武器", version: "n.1", birthday: "6月", alphabet: "C" },
        { name: "ニィロウ", rarity: 5, nation: "スメール", element: "水", weapon_type: "片手剣", version: "n.1", birthday: "12月", alphabet: "N" },
        { name: "ドリー", rarity: 4, nation: "スメール", element: "雷", weapon_type: "両手剣", version: "n.0", birthday: "12月", alphabet: "D" },
        { name: "コレイ", rarity: 4, nation: "スメール", element: "草", weapon_type: "弓", version: "n.0", birthday: "5月", alphabet: "C" },
        { name: "ティナリ", rarity: 5, nation: "スメール", element: "草", weapon_type: "弓", version: "n.0", birthday: "12月", alphabet: "T" },
        // フォンテーヌ
        { name: "エスコフィエ", rarity: 5, nation: "フォンテーヌ", element: "氷", weapon_type: "長柄武器", version: "n.6", birthday: "6月", alphabet: "E" },
        { name: "エミリエ", rarity: 5, nation: "フォンテーヌ", element: "草", weapon_type: "長柄武器", version: "n.8", birthday: "9月", alphabet: "E" },
        { name: "シグウィン", rarity: 5, nation: "フォンテーヌ", element: "水", weapon_type: "弓", version: "n.7", birthday: "3月", alphabet: "S" },
        { name: "クロリンデ", rarity: 5, nation: "フォンテーヌ", element: "雷", weapon_type: "片手剣", version: "n.7", birthday: "9月", alphabet: "C" },
        { name: "シュヴルーズ", rarity: 4, nation: "フォンテーヌ", element: "炎", weapon_type: "長柄武器", version: "n.3", birthday: "1月", alphabet: "C" },
        { name: "ナヴィア", rarity: 5, nation: "フォンテーヌ", element: "岩", weapon_type: "両手剣", version: "n.3", birthday: "8月", alphabet: "N" },
        { name: "シャルロット", rarity: 4, nation: "フォンテーヌ", element: "氷", weapon_type: "法器", version: "n.2", birthday: "4月", alphabet: "C" },
        { name: "フリーナ", rarity: 5, nation: "フォンテーヌ", element: "水", weapon_type: "片手剣", version: "n.2", birthday: "10月", alphabet: "F" },
        { name: "ヌヴィレット", rarity: 5, nation: "フォンテーヌ", element: "水", weapon_type: "法器", version: "n.1", birthday: "12月", alphabet: "N" },
        { name: "リオセスリ", rarity: 5, nation: "フォンテーヌ", element: "氷", weapon_type: "法器", version: "n.1", birthday: "11月", alphabet: "W" },
        { name: "フレミネ", rarity: 4, nation: "フォンテーヌ", element: "氷", weapon_type: "両手剣", version: "n.0", birthday: "9月", alphabet: "F" },
        { name: "リネ", rarity: 5, nation: "フォンテーヌ", element: "炎", weapon_type: "弓", version: "n.0", birthday: "2月", alphabet: "L" },
        { name: "リネット", rarity: 4, nation: "フォンテーヌ", element: "風", weapon_type: "片手剣", version: "n.0", birthday: "2月", alphabet: "L" },
        // ナタ
        { name: "イファ", rarity: 4, nation: "ナタ", element: "風", weapon_type: "法器", version: "n.6", birthday: "3月", alphabet: "I" },
        { name: "イアンサ", rarity: 4, nation: "ナタ", element: "雷", weapon_type: "長柄武器", version: "n.5", birthday: "8月", alphabet: "I" },
        { name: "ヴァレサ", rarity: 4, nation: "ナタ", element: "雷", weapon_type: "法器", version: "n.5", birthday: "11月", alphabet: "V" },
        { name: "シトラリ", rarity: 5, nation: "ナタ", element: "氷", weapon_type: "法器", version: "n.3", birthday: "1月", alphabet: "C" },
        { name: "マーヴィカ", rarity: 5, nation: "ナタ", element: "炎", weapon_type: "両手剣", version: "n.3", birthday: "8月", alphabet: "M" },
        { name: "チャスカ", rarity: 5, nation: "ナタ", element: "風", weapon_type: "弓", version: "n.2", birthday: "12月", alphabet: "C" },
        { name: "オロルン", rarity: 4, nation: "ナタ", element: "雷", weapon_type: "弓", version: "n.2", birthday: "10月", alphabet: "O" },
        { name: "シロネン", rarity: 5, nation: "ナタ", element: "岩", weapon_type: "片手剣", version: "n.1", birthday: "3月", alphabet: "X" },
        { name: "ムアラニ", rarity: 5, nation: "ナタ", element: "水", weapon_type: "法器", version: "n.0", birthday: "8月", alphabet: "M" },
        { name: "カチーナ", rarity: 4, nation: "ナタ", element: "岩", weapon_type: "長柄武器", version: "n.0", birthday: "4月", alphabet: "K" },
        { name: "キィニチ", rarity: 5, nation: "ナタ", element: "草", weapon_type: "両手剣", version: "n.0", birthday: "11月", alphabet: "K" },
        // 例外
        { name: "旅人", rarity: 5, nation: "例外", element: null, weapon_type: "片手剣", version: "n.0", birthday: null, alphabet: "T" },
        { name: "アーロイ", rarity: 5, nation: "例外", element: "氷", weapon_type: "弓", version: null, birthday: "4月", alphabet: "A" },
        { name: "スカーク", rarity: 5, nation: "例外", element: "氷", weapon_type: "片手剣", version: "n.7", birthday: "11月", alphabet: "S" }
    ]
};
