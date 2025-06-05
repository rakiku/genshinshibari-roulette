const setup = document.getElementById('setup');
const playerCountSelect = document.getElementById('playerCount');
const spinCountInput = document.getElementById('spinCount');
const startButton = document.getElementById('startButton');
const bossCanvas = document.getElementById('bossWheel');
const bossCtx = bossCanvas.getContext('2d');
const bossSpinButton = document.getElementById('bossSpinButton');
const bossStopButton = document.getElementById('bossStopButton');
const bossNextButton = document.getElementById('bossNextButton');
const bossResultDiv = document.getElementById('bossResult');
const bossRoulette = document.getElementById('bossRoulette');
const bossButtons = document.getElementById('bossButtons');
const bossRadius = bossCanvas.width / 2;
let bossSections = [
    { name: '無相の炎', color: '#fe6640' },
    { name: '無相の水', color: '#00c0fe' },
    { name: '無相の風', color: '#36d6a0' },
    { name: '無相の雷', color: '#cc85ff' },
    { name: '無相の草', color: '#8dcc06' },
    { name: '無相の氷', color: '#74E4E2' },
    { name: '無相の岩', color: '#F3AC11' },
    { name: '純水精霊', color: '#00c0fe' },
    { name: '雷音権現', color: '#cc85ff' },
    { name: '水形タルパ', color: '#00c0fe' },
    { name: '深罪の浸礼者', color: '#00c0fe' },
    { name: '黄金王獣', color: '#F3AC11' },
    { name: '深淵なるミミック・パピラ', color: '#00c0fe' },
    { name: '遺跡サーペント', color: '#F3AC11' },
    { name: '恒常からくり陣形', color: '#cc85ff' },
    { name: '兆載永劫ドレイク', color: '#F3AC11' },
    { name: '半永久統制マトリックス', color: '#cc85ff' },
    { name: '氷風組曲コペリウス', color: '#74E4E2' },
    { name: '氷風組曲コッペリア', color: '#74E4E2' },
    { name: '秘源機兵・機構デバイス', color: '#cc85ff' },
    { name: '魔偶剣鬼', color: '#8dcc06' },
    { name: '実験用フィールド生成装置', color: '#cc85ff' },
    { name: '迷える霊覚の修権者', color: '#74E4E2' },
    { name: '爆炎樹', color: '#fe6640' },
    { name: '迅電樹', color: '#cc85ff' },
    { name: '急凍樹', color: '#74E4E2' },
    { name: 'エンシェントヴィシャップ・岩', color: '#F3AC11' },
    { name: 'アビサルヴィシャップ', color: '#00c0fe' },
    { name: 'マッシュラプトル', color: '#8dcc06' },
    { name: '風食ウェネト', color: '#36d6a0' },
    { name: '鉄甲熔炎帝王', color: '#fe6640' },
    { name: '千年真珠の海駿', color: '#00c0fe' },
    { name: '山隠れの猊獣', color: '#F3AC11' },
    { name: '魔像レガトゥス', color: '#F3AC11' },
    { name: '暴君・金焔のクク竜', color: '#fe6640' },
    { name: '山の王・貪食のユムカ竜', color: '#F3AC11' },
    { name: '輝ける溶岩の龍像', color: '#fe6640' },
    { name: '秘源機兵・統御デバイス', color: '#cc85ff' },
    { name: 'アンドリアス', color: '#36d6a0' },
    { name: '公子', color: '#00c0fe' },
    { name: '若陀龍王', color: '#F3AC11' },
    { name: '淑女', color: '#74E4E2' },
    { name: '禍津御建鳴神命', color: '#cc85ff' },
    { name: '正機の神', color: '#cc85ff' },
    { name: 'アペプ', color: '#8dcc06' },
    { name: '吞星の鯨', color: '#00c0fe' },
    { name: '召使', color: '#fe6640' },
    { name: 'グーシートース', color: '#F3AC11' },
    { name: 'キング＆クイーン', color: '#F3AC11' },
    { name: 'ヴィヴィアン', color: '#00c0fe' },
    { name: 'ニニアン', color: '#00c0fe' },
    { name: 'イゾルト', color: '#00c0fe' },
    { name: 'リアム', color: '#00c0fe' },
    { name: 'ロッキー', color: '#F3AC11' },
    { name: 'ディアンナラ', color: '#8dcc06' },
    { name: '赤璋巡岳府君', color: '#F3AC11' },
    { name: 'シネアス', color: '#fe6640' },
    { name: '異色三連星', color: '#00c0fe' },
    { name: 'バラチコ', color: '#fe6640' },
    { name: 'コシーホ', color: '#74E4E2' },
    { name: 'ジャプー', color: '#36d6a0' },
    { name: 'リライ', color: '#8dcc06' },
    { name: '銅の掟', color: '#F3AC11' },
    { name: 'ピーク', color: '#F3AC11' },
    { name: '戦羊・鉄爪', color: '#fe6640' },
    { name: '微末', color: '#8dcc06' }
];
let bossRotation = 0;
let bossIsSpinning = false;
let bossAnimationFrameId;
const shibariCanvas = document.getElementById('shibariWheel');
const shibariCtx = shibariCanvas.getContext('2d');
const shibariSpinButton = document.getElementById('shibariSpinButton');
const shibariStopButton = document.getElementById('shibariStopButton');
const shibariNextButton = document.getElementById('shibariNextButton');
const shibariResultDiv = document.getElementById('shibariResult');
const shibariRoulette = document.getElementById('shibariRoulette');
const shibariButtons = document.getElementById('shibariButtons');
const shibariRadius = shibariCanvas.width / 2;
const shibariSections = [
    { name: '☆４キャラ武器', color: '#ffeb3b' },
    { name: '回復禁止', color: '#ffeb3b' },
    { name: '恒常☆５縛り', color: '#ffeb3b' },
    { name: '所持率100％縛り', color: '#ffeb3b' },
    { name: '国縛り', color: '#ffeb3b' },
    { name: '初期キャラのみ', color: '#ffeb3b' },
    { name: 'UI非表示＋リロール', color: '#ffeb3b' },
    { name: '誰か一人が倒れたら負け縛り', color: '#ffeb3b' },
    { name: '無凸縛り', color: '#ffeb3b' },
    { name: 'キャラルーレット', color: '#ffeb3b' },
    { name: '武器種縛り', color: '#ffeb3b' },
    { name: 'キャラ武器ルーレット', color: '#ffeb3b' },
    { name: '聖遺物禁止', color: '#ffeb3b' },
    { name: '爆発禁止＋リロール', color: '#ffeb3b' },
    { name: '旅人縛り', color: '#ffeb3b' },
    { name: 'モノ元素縛り', color: '#ffeb3b' },
    { name: '各1.1縛り', color: '#ffeb3b' },
    { name: '誕生月', color: '#ffeb3b' },
    { name: 'アルファベット縛り', color: '#ffeb3b' },
    { name: '☆１、聖遺物なし', color: '#ffeb3b' }
];
let shibariRotation = 0;
let shibariIsSpinning = false;
let shibariAnimationFrameId;
let currentSpin = 0;
let maxSpins = 0;
const nextCanvas = document.getElementById('nextWheel');
const nextCtx = nextCanvas.getContext('2d');
const nextSpinButton = document.getElementById('nextSpinButton');
const nextStopButton = document.getElementById('nextStopButton');
const nextNextButton = document.getElementById('nextNextButton');
const nextResultDiv = document.getElementById('nextResult');
const nextRoulette = document.getElementById('nextRoulette');
const nextButtons = document.getElementById('nextButtons');
const nextRadius = nextCanvas.width / 2;
let nextSections = [];
let nextRotation = 0;
let nextIsSpinning = false;
let nextAnimationFrameId;
let currentPlayer = 1;
let playerResults = [];
const weaponCanvas = document.getElementById('weaponWheel');
const weaponCtx = weaponCanvas.getContext('2d');
const weaponSpinButton = document.getElementById('weaponSpinButton');
const weaponStopButton = document.getElementById('weaponStopButton');
const weaponNextButton = document.getElementById('weaponNextButton');
const weaponResultDiv = document.getElementById('weaponResult');
const weaponRoulette = document.getElementById('weaponRoulette');
const weaponButtons = document.getElementById('weaponButtons');
const weaponRadius = weaponCanvas.width / 2;
let weaponSections = [];
let weaponRotation = 0;
let weaponIsSpinning = false;
let weaponAnimationFrameId;
let currentWeaponSpin = 0;
let maxWeaponSpins = 0;
let selectedCharacters = [];
const characterWeaponMap = {
    '旅人': '片手剣', 'シロネン': '片手剣', 'クロリンデ': '片手剣', '千織': '片手剣', 'フリーナ': '片手剣',
    'リネット': '片手剣', '綺良々': '片手剣', 'アルハイゼン': '片手剣', 'レイラ': '片手剣', 'ニィロウ': '片手剣',
    '久岐忍': '片手剣', 'アルベド': '片手剣', '行秋': '片手剣', '神里綾華': '片手剣', '神里綾人': '片手剣',
    'ジン': '片手剣', 'ベネット': '片手剣', '楓原万葉': '片手剣', '刻晴': '片手剣', 'ガイア': '片手剣', '七七': '片手剣',
    'マーヴィカ': '両手剣', 'キィニチ': '両手剣', '嘉明': '両手剣', 'ナヴィア': '両手剣', 'フレミネ': '両手剣',
    'カーヴェ': '両手剣', 'ディシア': '両手剣', 'ドリー': '両手剣', 'レザー': '両手剣', '重雲': '両手剣',
    'ディルック': '両手剣', '辛炎': '両手剣', 'ノエル': '両手剣', '荒瀧一斗': '両手剣', '早柚': '両手剣',
    '北斗': '両手剣', 'エウルア': '両手剣',
    'チャスカ': '弓', 'オロルン': '弓', 'セトス': '弓', 'シグウィン': '弓', 'リネ': '弓', 'ファルザン': '弓',
    'コレイ': '弓', 'ティナリ': '弓', '夜蘭': '弓', 'ディオナ': '弓', 'タルタリヤ': '弓', 'フィッシュル': '弓',
    '甘雨': '弓', 'ウェンティ': '弓', '宵宮': '弓', 'アンバー': '弓', 'ゴロー': '弓', '九条裟羅': '弓',
    'イファ': '法器', 'ヴァレサ': '法器', '夢見月瑞希': '法器', '藍硯': '法器', 'シトラリ': '法器', 'ムアラニ': '法器',
    '閑雲': '法器', 'シャルロット': '法器', 'ヌヴィレット': '法器', 'リオセスリ': '法器', '白朮': '法器',
    '放浪者': '法器', 'ナヒーダ': '法器', '鹿野院平蔵': '法器', 'モナ': '法器', 'バーバラ': '法器', 'スクロース': '法器',
    '珊瑚宮心海': '法器', '煙緋': '法器', 'クレー': '法器', '凝光': '法器', '八重神子': '法器', 'リサ': '法器',
    'エスコフィエ': '長柄武器', 'イアンサ': '長柄武器', 'カチーナ': '長柄武器', 'エミリエ': '長柄武器', 'アルレッキーノ': '長柄武器',
    'シュヴルーズ': '長柄武器', 'ミカ': '長柄武器', 'ヨォーヨ': '長柄武器', 'キャンディス': '長柄武器', 'セノ': '長柄武器',
    '魈': '長柄武器', '香菱': '長柄武器', '雷電将軍': '長柄武器', '鍾離': '長柄武器', '胡桃': '長柄武器', 'ロサリア': '長柄武器',
    '申鶴': '長柄武器', 'トーマ': '長柄武器', '雲菫': '長柄武器'
};
const weaponLists = {
    '片手剣': [
        '厄水の災い', '岩峰を巡る歌', 'ストロングボーン', 'エズピツァルの笛', '赦罪', '有楽御簾切', '水仙十字の剣',
        '静水流転の輝き', '船渠剣', '狼牙', 'サーンドルの渡し守', '海淵のフィナーレ', '翠光の裁葉', '東花坊時雨',
        'サイフォスの月明かり', '聖顕の鍵', '原木刀', '籠鶴瓶一心', '黒岩の長剣', '黒剣', '黎明の神剣', '飛天御剣',
        '風鷹剣', '霧切の廻光', '降臨の剣', '銀の剣', '鉄蜂の刺し', 'シナバースピンドル', '斬岩・試作', '西風剣',
        '蒼古なる自由への誓い', '腐食の剣', '笛の剣', '祭礼の剣', '盤岩結緑', '波乱月白経津', '暗鉄剣', 'ダークアレイの閃光',
        '無鋒の剣', '旅道の剣', '斬山の刃', '旧貴族長剣', '天空の刃', '天目影打', 'チ虎魚の刀', '匣中龍吟', '冷刃'
    ],
    '両手剣': [
        '千烈の日輪', '実りの鉤鉈', 'アースシェイカー', '山の王の長牙', '「スーパーアルティメット覇王魔剣」', '裁断',
        '携帯型チェンソー', '話死合い棒', 'タイダル・シャドー', '葦海の標', '鉄彩の花', 'マカイラの水色', '森林のレガリア',
        '黒岩の斬刀', '飛天大御剣', '雪葬の星銀', '雨裁', '鉄影段平', '鐘の剣', '赤角石塵滅砕', '古華・試作', '訓練用大剣',
        '西風大剣', '銜玉の海皇', '螭龍の剣', '祭礼の大剣', '白鉄の大剣', '白影の剣', '狼の末路', '龍血を浴びた剣',
        '桂木斬長正', '松韻の響く頃', '無工の剣', '惡王丸', '旧貴族大剣', '天空の傲', '千岩古剣', '傭兵の重剣', '理屈責め'
    ],
    '弓': [
        '冷寂の音', '星鷲の紅き羽', '花飾りの羽', 'チェーンブレイカー', '築雲', '白雨心弦', 'レンジゲージ', '烈日の後嗣',
        '静寂の唄', '始まりの大魔術', 'トキの嘴', '王の近侍', '竭沢', '狩人の道', '落霞', '若水', '黒岩の戦弓', '鴉羽の弓',
        '飛来の鳴弦', '風花の頌歌', 'アモスの弓', 'リングボウ', '澹月・試作', '西風猟弓', '青翠の狩猟弓', '絶弦',
        '終焉を嘆く詩', '祭礼の弓', 'シャープシューターの誓い', '破魔の弓', '狩猟弓', '曚雲の月', 'ダークアレイの狩人',
        'プレデター', '弾弓', '弓蔵', '幽夜のワルツ', '旧貴族長弓', '天空の翼', 'リカーブボウ', '歴戦の狩猟弓', '冬極の白星', '文使い'
    ],
    '法器': [
        'ヴィヴィッド・ハート', '寝正月の初晴', '祭星者の眺め', '波乗りの旋回', 'ヤシュチェの環', '蒼紋の角杯',
        'サーフィンタイム', '鶴鳴の余韻', '凛流の監視者', '久遠流転の大典', '果てなき紺碧の唄', '古祠の瓏', '純水流華',
        '碧落の瓏', 'トゥライトゥーラの記憶', '千夜に浮かぶ夢', '彷徨える星', '満悦の実', '黒岩の緋玉', '魔導緒論',
        '金珀・試作', '誓いの明瞳', '龍殺しの英傑譚', '西風秘典', '翡玉法珠', '祭礼の断片', '神楽の真意', '白辰の輪',
        '特級の宝玉', '流浪楽章', 'ダークアレイの酒と詩', '昭心', '冬忍びの実', '異世界旅行記', '浮世の錠', '旧貴族秘法録',
        '生徒ノート', '天空の巻', '四風原典', 'ドドコの物語', 'ポケット魔導書', '匣中日月', '不滅の月華', '万国諸海の図譜'
    ],
    '長柄武器': [
        '香りのシンフォニスト', '玉響停の御噺', '鎮山の釘', '虹の行方', 'ルミドゥースの挽歌', '赤月のシルエット',
        '砂中の賢者達の問答', 'プロスペクタードリル', 'フィヨルドの歌', '正義の報酬', '赤砂の杖', '風信の矛', 'ムーンピアサー',
        'ドラゴンスピア', '黒纓槍', '黒岩の突槍', '鉄尖槍', '鉾槍', '破天の槍', '星鎌・試作', '西風長槍', '草薙の稲光',
        '白纓槍', '流月の針', '新米の長槍', '斬波のひれ長', '護摩の杖', '息災', '旧貴族猟槍', '天空の脊', '喜多院十文字槍',
        '和璞鳶', '千岩長槍', '匣中滅龍', '死闘の槍', '「漁獲」'
    ]
};
const nextSectionTypes = {
    '☆４キャラ武器': [],
    '回復禁止': [],
    '恒常☆５縛り': [],
    '所持率100％縛り': [],
    '国縛り': [
        { name: 'モンド', color: '#36d6a0' },
        { name: '璃月', color: '#F3AC11' },
        { name: '稲妻', color: '#cc85ff' },
        { name: 'スメール', color: '#8dcc06' },
        { name: 'フォンテーヌ', color: '#00c0fe' },
        { name: 'ナタ', color: '#fe6640' },
        { name: 'スネージナヤ', color: '#74E4E2' }
    ],
    '初期キャラのみ': [],
    'UI非表示＋リロール': [],
    '誰か一人が倒れたら負け縛り': [],
    '無凸縛り': [],
    'キャラルーレット': [
        { name: '旅人', color: '#ffeb3b' },
        { name: 'シロネン', color: '#ffeb3b' },
        { name: 'クロリンデ', color: '#ffeb3b' },
        { name: '千織', color: '#ffeb3b' },
        { name: 'フリーナ', color: '#ffeb3b' },
        { name: 'リネット', color: '#ffeb3b' },
        { name: '綺良々', color: '#ffeb3b' },
        { name: 'アルハイゼン', color: '#ffeb3b' },
        { name: 'レイラ', color: '#ffeb3b' },
        { name: 'ニィロウ', color: '#ffeb3b' },
        { name: '久岐忍', color: '#ffeb3b' },
        { name: 'アルベド', color: '#ffeb3b' },
        { name: '行秋', color: '#ffeb3b' },
        { name: '神里綾華', color: '#ffeb3b' },
        { name: '神里綾人', color: '#ffeb3b' },
        { name: 'ジン', color: '#ffeb3b' },
        { name: 'ベネット', color: '#ffeb3b' },
        { name: '楓原万葉', color: '#ffeb3b' },
        { name: '刻晴', color: '#ffeb3b' },
        { name: 'ガイア', color: '#ffeb3b' },
        { name: '七七', color: '#ffeb3b' },
        { name: 'マーヴィカ', color: '#ffeb3b' },
        { name: 'キィニチ', color: '#ffeb3b' },
        { name: '嘉明', color: '#ffeb3b' },
        { name: 'ナヴィア', color: '#ffeb3b' },
        { name: 'フレミネ', color: '#ffeb3b' },
        { name: 'カーヴェ', color: '#ffeb3b' },
        { name: 'ディシア', color: '#ffeb3b' },
        { name: 'ドリー', color: '#ffeb3b' },
        { name: 'レザー', color: '#ffeb3b' },
        { name: '重雲', color: '#ffeb3b' },
        { name: 'ディルック', color: '#ffeb3b' },
        { name: '辛炎', color: '#ffeb3b' },
        { name: 'ノエル', color: '#ffeb3b' },
        { name: '荒瀧一斗', color: '#ffeb3b' },
        { name: '早柚', color: '#ffeb3b' },
        { name: '北斗', color: '#ffeb3b' },
        { name: 'エウルア', color: '#ffeb3b' },
        { name: 'チャスカ', color: '#ffeb3b' },
        { name: 'オロルン', color: '#ffeb3b' },
        { name: 'セトス', color: '#ffeb3b' },
        { name: 'シグウィン', color: '#ffeb3b' },
        { name: 'リネ', color: '#ffeb3b' },
        { name: 'ファルザン', color: '#ffeb3b' },
        { name: 'コレイ', color: '#ffeb3b' },
        { name: 'ティナリ', color: '#ffeb3b' },
        { name: '夜蘭', color: '#ffeb3b' },
        { name: 'ディオナ', color: '#ffeb3b' },
        { name: 'タルタリヤ', color: '#ffeb3b' },
        { name: 'フィッシュル', color: '#ffeb3b' },
        { name: '甘雨', color: '#ffeb3b' },
        { name: 'ウェンティ', color: '#ffeb3b' },
        { name: '宵宮', color: '#ffeb3b' },
        { name: 'アンバー', color: '#ffeb3b' },
        { name: 'ゴロー', color: '#ffeb3b' },
        { name: '九条裟羅', color: '#ffeb3b' },
        { name: 'イファ', color: '#ffeb3b' },
        { name: 'ヴァレサ', color: '#ffeb3b' },
        { name: '夢見月瑞希', color: '#ffeb3b' },
        { name: '藍硯', color: '#ffeb3b' },
        { name: 'シトラリ', color: '#ffeb3b' },
        { name: 'ムアラニ', color: '#ffeb3b' },
        { name: '閑雲', color: '#ffeb3b' },
        { name: 'シャルロット', color: '#ffeb3b' },
        { name: 'ヌヴィレット', color: '#ffeb3b' },
        { name: 'リオセスリ', color: '#ffeb3b' },
        { name: '白朮', color: '#ffeb3b' },
        { name: '放浪者', color: '#ffeb3b' },
        { name: 'ナヒーダ', color: '#ffeb3b' },
        { name: '鹿野院平蔵', color: '#ffeb3b' },
        { name: 'モナ', color: '#ffeb3b' },
        { name: 'バーバラ', color: '#ffeb3b' },
        { name: 'スクロース', color: '#ffeb3b' },
        { name: '珊瑚宮心海', color: '#ffeb3b' },
        { name: '煙緋', color: '#ffeb3b' },
        { name: 'クレー', color: '#ffeb3b' },
        { name: '凝光', color: '#ffeb3b' },
        { name: '八重神子', color: '#ffeb3b' },
        { name: 'リサ', color: '#ffeb3b' },
        { name: 'エスコフィエ', color: '#ffeb3b' },
        { name: 'イアンサ', color: '#ffeb3b' },
        { name: 'カチーナ', color: '#ffeb3b' },
        { name: 'エミリエ', color: '#ffeb3b' },
        { name: 'アルレッキーノ', color: '#ffeb3b' },
        { name: 'シュヴルーズ', color: '#ffeb3b' },
        { name: 'ミカ', color: '#ffeb3b' },
        { name: 'ヨォーヨ', color: '#ffeb3b' },
        { name: 'キャンディス', color: '#ffeb3b' },
        { name: 'セノ', color: '#ffeb3b' },
        { name: '魈', color: '#ffeb3b' },
        { name: '香菱', color: '#ffeb3b' },
        { name: '雷電将軍', color: '#ffeb3b' },
        { name: '鍾離', color: '#ffeb3b' },
        { name: '胡桃', color: '#ffeb3b' },
        { name: 'ロサリア', color: '#ffeb3b' },
        { name: '申鶴', color: '#ffeb3b' },
        { name: 'トーマ', color: '#ffeb3b' },
        { name: '雲菫', color: '#ffeb3b' }
    ],
    '武器種縛り': [
        { name: '片手剣', color: '#ffeb3b' },
        { name: '両手剣', color: '#ffeb3b' },
        { name: '弓', color: '#ffeb3b' },
        { name: '法器', color: '#ffeb3b' },
        { name: '長柄武器', color: '#ffeb3b' }
    ],
    'キャラ武器ルーレット': 'キャラ武器',
    '聖遺物禁止': [],
    '爆発禁止＋リロール': [],
    '旅人縛り': [],
    'モノ元素縛り': [
        { name: '炎', color: '#fe6640' },
        { name: '水', color: '#00c0fe' },
        { name: '風', color: '#36d6a0' },
        { name: '雷', color: '#cc85ff' },
        { name: '草', color: '#8dcc06' },
        { name: '氷', color: '#74E4E2' },
        { name: '岩', color: '#F3AC11' }
    ],
    '各1.1縛り': [
        { name: 'n.0', color: '#ffeb3b' },
        { name: 'n.1', color: '#ffeb3b' },
        { name: 'n.2', color: '#ffeb3b' },
        { name: 'n.3', color: '#ffeb3b' },
        { name: 'n.4', color: '#ffeb3b' },
        { name: 'n.5', color: '#ffeb3b' },
        { name: 'n.6', color: '#ffeb3b' },
        { name: 'n.7', color: '#ffeb3b' },
        { name: 'n.8', color: '#ffeb3b' }
    ],
    '誕生月': [
        { name: '1月', color: '#ffeb3b' },
        { name: '2月', color: '#ffeb3b' },
        { name: '3月', color: '#ffeb3b' },
        { name: '4月', color: '#ffeb3b' },
        { name: '5月', color: '#ffeb3b' },
        { name: '6月', color: '#ffeb3b' },
        { name: '7月', color: '#ffeb3b' },
        { name: '8月', color: '#ffeb3b' },
        { name: '9月', color: '#ffeb3b' },
        { name: '10月', color: '#ffeb3b' },
        { name: '11月', color: '#ffeb3b' },
        { name: '12月', color: '#ffeb3b' }
    ],
    'アルファベット縛り': [
        { name: 'A', color: '#ffeb3b' },
        { name: 'B', color: '#ffeb3b' },
        { name: 'C', color: '#ffeb3b' },
        { name: 'D', color: '#ffeb3b' },
        { name: 'E', color: '#ffeb3b' },
        { name: 'F', color: '#ffeb3b' },
        { name: 'G', color: '#ffeb3b' },
        { name: 'H', color: '#ffeb3b' },
        { name: 'I', color: '#ffeb3b' },
        { name: 'J', color: '#ffeb3b' },
        { name: 'K', color: '#ffeb3b' },
        { name: 'L', color: '#ffeb3b' },
        { name: 'M', color: '#ffeb3b' },
        { name: 'N', color: '#ffeb3b' },
        { name: 'O', color: '#ffeb3b' },
        { name: 'Q', color: '#ffeb3b' },
        { name: 'R', color: '#ffeb3b' },
        { name: 'S', color: '#ffeb3b' },
        { name: 'T', color: '#ffeb3b' },
        { name: 'V', color: '#ffeb3b' },
        { name: 'W', color: '#ffeb3b' },
        { name: 'X', color: '#ffeb3b' },
        { name: 'Y', color: '#ffeb3b' },
        { name: 'Z', color: '#ffeb3b' }
    ],
    '☆１、聖遺物なし': []
};
const versionCharactersMap = {
    'n.0': ['旅人', 'リサ', 'アンバー', 'ガイア', 'ノエル', 'バーバラ', 'レザー', '香菱', '北斗', 'ベネット', '行秋', '凝光', 'フィッシュル', 'ノエル', '重雲', 'スクロース', 'ジン', 'ディルック', '七七', 'モナ', '刻晴', 'ウェンティ', 'クレー', '神里綾華', '宵宮', '早柚', 'ティナリ', 'コレイ', 'ドリー', 'リネ', 'リネット', 'フレミネ', 'ムアラニ', 'キィニチ', 'カチーナ'],
    'n.1': ['タルタリヤ', '鍾離', 'ディオナ', '辛炎', '雷電将軍', '珊瑚宮心海', '九条裟羅', 'セノ', 'ニィロウ', 'キャンディス', 'ヌヴィレット', 'リオセスリ', 'シロネン'],
    'n.2': ['甘雨', 'アルベド', 'トーマ', 'ナヒーダ', 'レイラ', 'フリーナ', 'シャルロット', 'チャスカ', 'オロルン'],
    'n.3': ['胡桃', '魈', '荒瀧一斗', 'ゴロー', '放浪者', 'ファルザン', 'ナヴィア', 'シュヴルーズ', 'マーヴィカ', 'シトラリ', '藍硯'],
    'n.4': ['ロサリア', '申鶴', '雲菫', 'アルハイゼン', 'ヨォーヨ', '閑雲', '嘉明', '夢見月瑞希'],
    'n.5': ['エウルア', '煙緋', '八重神子', 'ディシア', 'ミカ', '千織', 'ヴァレサ', 'イアンサ'],
    'n.6': ['楓原万葉', '神里綾人', '白朮', 'カーヴェ', 'ゴミ', 'エスコフィエ', 'イファ'],
    'n.7': ['夜蘭', '久岐忍', '綺良々', 'クロリンデ', 'シグウィン', 'セトス'],
    'n.8': ['鹿野院平蔵', 'エミリエ']
};
const monthCharactersMap = {
    '1月': ['放浪者', '藍硯', 'トーマ', 'シュヴルーズ', 'ディオナ', 'シトラリ', '綺良々', 'ロサリア'],
    '2月': ['リネ', 'リネット', 'アルハイゼン', '北斗', '珊瑚宮心海', 'ベネット'],
    '3月': ['七七', 'ヨォーヨ', '申鶴', 'シロネン', 'ジン', '夢見月瑞希', 'ノエル', '神里綾人', 'シグウィン', 'イファ'],
    '4月': ['ディシア', 'シャルロット', '閑雲', '魈', '夜蘭', 'カチーナ', '白朮', 'ディルック'],
    '5月': ['キャンディス', 'コレイ', 'ゴロー', '雲菫', 'フィッシュル', 'セトス'],
    '6月': ['荒瀧一斗', 'リサ', 'ウェンティ', '宵宮', 'セノ', '雷電将軍', '八重神子', 'エスコフィエ'],
    '7月': ['バーバラ', 'カーヴェ', '九条裟羅', '胡桃', 'タルタリヤ', '鹿野院平蔵', '久岐忍', 'クレー', '煙緋'],
    '8月': ['ムアラニ', 'アンバー', 'ミカ', 'ナヴィア', '千織', 'ファルザン', 'アルレッキーノ', '凝光', 'マーヴィカ', 'モナ', 'イアンサ'],
    '9月': ['重雲', 'レザー', 'アルベド', 'クロリンデ', 'エミリエ', 'フレミネ', '神里綾華'],
    '10月': ['行秋', 'フリーナ', 'オロルン', '辛炎', '早柚', 'エウルア', 'ナヒーダ', '楓原万葉'],
    '11月': ['香菱', 'キィニチ', '刻晴', 'リオセスリ', 'スクロース', 'ガイア', 'ヴァレサ'],
    '12月': ['甘雨', 'ニィロウ', 'チャスカ', 'ヌヴィレット', 'レイラ', 'ドリー', '嘉明', 'ティナリ', '鍾離']
};
const alphabetCharactersMap = {
    'A': ['荒瀧一斗', 'アルベド', 'アルレッキーノ', 'アルハイゼン', 'アンバー'],
    'B': ['バーバラ', '白朮', 'ベネット', '北斗'],
    'C': ['キャンディス', 'クロリンデ', 'コレイ', 'シャルロット', 'シュヴルーズ', 'シトラリ', 'セノ', '千織', 'チャスカ', '重雲'],
    'D': ['ドリー', 'ディシア', 'ディルック', 'ディオナ'],
    'E': ['エミリエ', 'エウルア', 'エスコフィエ'],
    'F': ['ファルザン', 'フリーナ', 'フレミネ', 'フィッシュル'],
    'G': ['嘉明', '甘雨', 'ゴロー'],
    'H': ['胡桃'],
    'I': ['イアンサ', 'イファ'],
    'J': ['ジン'],
    'K': ['神里綾華', '神里綾人', 'キィニチ', '綺良々', '久岐忍', '九条裟羅', 'クレー', '刻晴', 'カチーナ'],
    'L': ['リサ', 'リネ', 'リネット', 'レイラ', '藍硯'],
    'M': ['ミカ', 'ムアラニ', 'モナ', 'マーヴィカ'],
    'N': ['ナヴィア', 'ナヒーダ', 'ニィロウ', 'ヌヴィレット', 'ノエル'],
    'O': ['オロルン'],
    'Q': ['七七'],
    'R': ['雷電将軍', 'レザー', 'ロサリア'],
    'S': ['早柚', '珊瑚宮心海', '鹿野院平蔵', 'シグウィン', '申鶴', 'スクロース', 'セトス'],
    'T': ['旅人', 'ティナリ', 'タルタリヤ', 'トーマ'],
    'V': ['ウェンティ', 'ヴァレサ'],
    'W': ['放浪者', 'リオセスリ'],
    'X': ['行秋', '魈', '香菱', '辛炎', 'シロネン', '閑雲'],
    'Y': ['煙緋', '夜蘭', '雲菫', '八重神子', '宵宮', 'ヨォーヨ'],
    'Z': ['鍾離']
};
function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
}
function drawBossWheel() {
    bossCtx.clearRect(0, 0, bossCanvas.width, bossCanvas.height);
    const arc = (2 * Math.PI) / bossSections.length;
    for (let i = 0; i < bossSections.length; i++) {
        bossCtx.beginPath();
        bossCtx.moveTo(bossRadius, bossRadius);
        bossCtx.arc(bossRadius, bossRadius, bossRadius, i * arc, (i + 1) * arc);
        bossCtx.fillStyle = bossSections[i].color;
        bossCtx.fill();
        bossCtx.save();
        bossCtx.translate(bossRadius, bossRadius);
        bossCtx.rotate(i * arc + arc / 2 + Math.PI);
        bossCtx.textAlign = 'right';
        bossCtx.fillStyle = '#000';
        bossCtx.font = '10px Noto Sans JP';
        const name = bossSections[i].name;
        if (name.length > 8) {
            bossCtx.fillText(name.substring(0, 8), bossRadius - 20, 0);
            bossCtx.fillText(name.substring(8), bossRadius - 20, 10);
        } else {
            bossCtx.fillText(name, bossRadius - 20, 5);
        }
        bossCtx.restore();
    }
}
function drawShibariWheel() {
    shibariCtx.clearRect(0, 0, shibariCanvas.width, shibariCanvas.height);
    const arc = (2 * Math.PI) / shibariSections.length;
    for (let i = 0; i < shibariSections.length; i++) {
        shibariCtx.beginPath();
        shibariCtx.moveTo(shibariRadius, shibariRadius);
        shibariCtx.arc(shibariRadius, shibariRadius, shibariRadius, i * arc, (i + 1) * arc);
        shibariCtx.fillStyle = shibariSections[i].color;
        shibariCtx.fill();
        shibariCtx.save();
        shibariCtx.translate(shibariRadius, shibariRadius);
        shibariCtx.rotate(i * arc + arc / 2 + Math.PI);
        shibariCtx.textAlign = 'right';
        shibariCtx.fillStyle = '#000';
        shibariCtx.font = '20px Noto Sans JP';
        shibariCtx.fillText(shibariSections[i].name, shibariRadius - 20, 10);
        shibariCtx.restore();
    }
}
function drawNextWheel() {
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
    const arc = (2 * Math.PI) / nextSections.length;
    for (let i = 0; i < nextSections.length; i++) {
        nextCtx.beginPath();
        nextCtx.moveTo(nextRadius, nextRadius);
        nextCtx.arc(nextRadius, nextRadius, nextRadius, i * arc, (i + 1) * arc);
        nextCtx.fillStyle = nextSections[i].color;
        nextCtx.fill();
        nextCtx.save();
        nextCtx.translate(nextRadius, nextRadius);
        nextCtx.rotate(i * arc + arc / 2 + Math.PI);
        nextCtx.textAlign = 'right';
        nextCtx.fillStyle = '#000';
        nextCtx.font = '20px Noto Sans JP';
        nextCtx.fillText(nextSections[i].name, nextRadius - 20, 10);
        nextCtx.restore();
    }
}
function drawWeaponWheel() {
    weaponCtx.clearRect(0, 0, weaponCanvas.width, weaponCanvas.height);
    const arc = (2 * Math.PI) / weaponSections.length;
    for (let i = 0; i < weaponSections.length; i++) {
        weaponCtx.beginPath();
        weaponCtx.moveTo(weaponRadius, weaponRadius);
        weaponCtx.arc(weaponRadius, weaponRadius, weaponRadius, i * arc, (i + 1) * arc);
        weaponCtx.fillStyle = weaponSections[i].color;
        weaponCtx.fill();
        weaponCtx.save();
        weaponCtx.translate(weaponRadius, weaponRadius);
        weaponCtx.rotate(i * arc + arc / 2 + Math.PI);
        weaponCtx.textAlign = 'right';
        weaponCtx.fillStyle = '#000';
        weaponCtx.font = '12px Noto Sans JP';
        const name = weaponSections[i].name;
        if (name.length > 8) {
            weaponCtx.fillText(name.substring(0, 8), weaponRadius - 20, 0);
            weaponCtx.fillText(name.substring(8), weaponRadius - 20, 12);
        } else {
            weaponCtx.fillText(name, weaponRadius - 20, 5);
        }
        weaponCtx.restore();
    }
}
function spinBossWheel() {
    if (bossIsSpinning) {
        bossRotation += 5;
        bossCanvas.style.transform = `rotate(${bossRotation}deg)`;
        bossAnimationFrameId = requestAnimationFrame(spinBossWheel);
    }
}
function spinShibariWheel() {
    if (shibariIsSpinning) {
        shibariRotation += 5;
        shibariCanvas.style.transform = `rotate(${shibariRotation}deg)`;
        shibariAnimationFrameId = requestAnimationFrame(spinShibariWheel);
    }
}
function spinNextWheel() {
    if (nextIsSpinning) {
        nextRotation += 5;
        nextCanvas.style.transform = `rotate(${nextRotation}deg)`;
        nextAnimationFrameId = requestAnimationFrame(spinNextWheel);
    }
}
function spinWeaponWheel() {
    if (weaponIsSpinning) {
        weaponRotation += 5;
        weaponCanvas.style.transform = `rotate(${weaponRotation}deg)`;
        weaponAnimationFrameId = requestAnimationFrame(spinWeaponWheel);
    }
}
function resetAll() {
    bossRoulette.style.display = 'none';
    bossButtons.style.display = 'none';
    bossResultDiv.style.display = 'none';
    document.getElementById('bossCenterResult').style.display = 'none';
    shibariRoulette.style.display = 'none';
    shibariButtons.style.display = 'none';
    shibariResultDiv.style.display = 'none';
    document.getElementById('shibariCenterResult').style.display = 'none';
    nextRoulette.style.display = 'none';
    nextButtons.style.display = 'none';
    nextResultDiv.style.display = 'none';
    document.getElementById('nextCenterResult').style.display = 'none';
    weaponRoulette.style.display = 'none';
    weaponButtons.style.display = 'none';
    weaponResultDiv.style.display = 'none';
    document.getElementById('weaponCenterResult').style.display = 'none';
    const resetButton = document.querySelector('.resetButton');
    if (resetButton) resetButton.remove();
    const rerollButton = document.querySelector('.rerollButton');
    if (rerollButton) rerollButton.remove();
    bossRotation = 0;
    shibariRotation = 0;
    nextRotation = 0;
    weaponRotation = 0;
    bossIsSpinning = false;
    shibariIsSpinning = false;
    nextIsSpinning = false;
    weaponIsSpinning = false;
    currentSpin = 0;
    currentPlayer = 1;
    currentWeaponSpin = 0;
    playerResults = [];
    selectedCharacters = [];
    bossSpinButton.disabled = false;
    bossStopButton.disabled = true;
    bossNextButton.disabled = true;
    shibariSpinButton.disabled = false;
    shibariStopButton.disabled = true;
    shibariNextButton.disabled = true;
    nextSpinButton.disabled = false;
    nextStopButton.disabled = true;
    nextNextButton.disabled = true;
    weaponSpinButton.disabled = false;
    weaponStopButton.disabled = true;
    weaponNextButton.disabled = true;
    setup.style.display = 'block';
}
startButton.addEventListener('click', () => {
    maxSpins = parseInt(spinCountInput.value);
    setup.style.display = 'none';
    bossRoulette.style.display = 'block';
    bossButtons.style.display = 'block';
    drawBossWheel();
});
bossSpinButton.addEventListener('click', () => {
    if (!bossIsSpinning) {
        bossIsSpinning = true;
        bossSpinButton.disabled = true;
        bossStopButton.disabled = false;
        spinBossWheel();
    }
});
bossStopButton.addEventListener('click', () => {
    if (bossIsSpinning) {
        bossIsSpinning = false;
        cancelAnimationFrame(bossAnimationFrameId);
        const startTime = performance.now();
        const initialSpeed = 5;
        const duration = 3000;
        let currentSpeed = initialSpeed;
        const sectionAngle = 360 / bossSections.length;
        const targetIndex = Math.floor(Math.random() * bossSections.length);
        const targetAngle = (targetIndex * sectionAngle + 180) % 360;
        function decelerate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            currentSpeed = initialSpeed * (1 - eased);
            bossRotation += currentSpeed;
            bossCanvas.style.transform = `rotate(${bossRotation}deg)`;
            if (progress < 1) {
                bossAnimationFrameId = requestAnimationFrame(decelerate);
            } else {
                bossRotation = targetAngle;
                bossCanvas.style.transform = `rotate(${bossRotation}deg)`;
                const index = targetIndex;
                const result = bossSections[index].name;
                bossResultDiv.textContent = `結果: ${result}`;
                document.getElementById('bossCenterResult').textContent = result;
                bossResultDiv.style.display = 'block';
                document.getElementById('bossCenterResult').style.display = 'block';
                bossSpinButton.disabled = true;
                bossStopButton.disabled = true;
                bossNextButton.disabled = false;
                setTimeout(() => {
                    bossRoulette.style.display = 'none';
                    bossButtons.style.display = 'none';
                    bossResultDiv.style.display = 'none';
                    document.getElementById('bossCenterResult').style.display = 'none';
                    shibariRoulette.style.display = 'block';
                    shibariButtons.style.display = 'block';
                    drawShibariWheel();
                }, 5000);
            }
        }
        decelerate();
    }
});
bossNextButton.addEventListener('click', () => {
    bossRoulette.style.display = 'none';
    bossButtons.style.display = 'none';
    bossResultDiv.style.display = 'none';
    document.getElementById('bossCenterResult').style.display = 'none';
    shibariRoulette.style.display = 'block';
    shibariButtons.style.display = 'block';
    drawShibariWheel();
});
shibariSpinButton.addEventListener('click', () => {
    if (!shibariIsSpinning) {
        shibariIsSpinning = true;
        shibariSpinButton.disabled = true;
        shibariStopButton.disabled = false;
        spinShibariWheel();
    }
});
shibariStopButton.addEventListener('click', () => {
    if (shibariIsSpinning) {
        shibariIsSpinning = false;
        cancelAnimationFrame(shibariAnimationFrameId);
        const startTime = performance.now();
        const initialSpeed = 5;
        const duration = 3000;
        let currentSpeed = initialSpeed;
        const sectionAngle = 360 / shibariSections.length;
        const targetIndex = Math.floor(Math.random() * shibariSections.length);
        const targetAngle = (targetIndex * sectionAngle + 180) % 360;
        function decelerate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            currentSpeed = initialSpeed * (1 - eased);
            shibariRotation += currentSpeed;
            shibariCanvas.style.transform = `rotate(${shibariRotation}deg)`;
            if (progress < 1) {
                shibariAnimationFrameId = requestAnimationFrame(decelerate);
            } else {
                shibariRotation = targetAngle;
                shibariCanvas.style.transform = `rotate(${shibariRotation}deg)`;
                const index = targetIndex;
                const result = shibariSections[index].name;
                shibariResultDiv.textContent = `結果: ${result}`;
                document.getElementById('shibariCenterResult').textContent = result;
                shibariResultDiv.style.display = 'block';
                document.getElementById('shibariCenterResult').style.display = 'block';
                currentSpin++;
                if (result === '☆４キャラ武器') {
                    shibariSpinButton.disabled = true;
                    shibariStopButton.disabled = true;
                    shibariNextButton.disabled = true;
                    const resetButton = document.createElement('button');
                    resetButton.textContent = '最初に戻る';
                    resetButton.className = 'resetButton';
                    shibariButtons.appendChild(resetButton);
                    resetButton.addEventListener('click', () => {
                        resetAll();
                    });
                    return;
                }
                if (currentSpin < maxSpins) {
                    shibariRotation = 0;
                    shibariCanvas.style.transform = `rotate(0deg)`;
                    shibariResultDiv.style.display = 'none';
                    document.getElementById('shibariCenterResult').style.display = 'none';
                    shibariIsSpinning = false;
                    shibariSpinButton.disabled = false;
                    shibariStopButton.disabled = true;
                } else {
                    shibariSpinButton.disabled = true;
                    shibariStopButton.disabled = true;
                    shibariNextButton.disabled = false;
                    setTimeout(() => {
                        shibariRoulette.style.display = 'none';
                        shibariButtons.style.display = 'none';
                        shibariResultDiv.style.display = 'none';
                        document.getElementById('shibariCenterResult').style.display = 'none';
                        const result = shibariResultDiv.textContent.replace('結果: ', '');
                        if (result in nextSectionTypes) {
                            nextSections = nextSectionTypes[result];
                            if (nextSections === 'キャラ武器') {
                                nextSections = nextSectionTypes['キャラルーレット'];
                            }
                            if (Array.isArray(nextSections) && nextSections.length > 0) {
                                nextRoulette.style.display = 'block';
                                nextButtons.style.display = 'block';
                                maxSpins = parseInt(playerCountSelect.value);
                                currentSpin = 0;
                                drawNextWheel();
                            } else if (nextSections === 'キャラ武器') {
                                nextSections = nextSectionTypes['キャラルーレット'];
                                nextRoulette.style.display = 'block';
                                nextButtons.style.display = 'block';
                                maxSpins = parseInt(playerCountSelect.value);
                                currentSpin = 0;
                                drawNextWheel();
                            } else {
                                const resetButton = document.createElement('button');
                                resetButton.textContent = '最初に戻る';
                                resetButton.className = 'resetButton';
                                shibariButtons.appendChild(resetButton);
                                resetButton.addEventListener('click', () => {
                                    resetAll();
                                });
                            }
                        }
                    }, 5000);
                }
            }
        }
        decelerate();
    }
});
shibariNextButton.addEventListener('click', () => {
    shibariRoulette.style.display = 'none';
    shibariButtons.style.display = 'none';
    shibariResultDiv.style.display = 'none';
    document.getElementById('shibariCenterResult').style.display = 'none';
    const result = shibariResultDiv.textContent.replace('結果: ', '');
    if (result in nextSectionTypes) {
        nextSections = nextSectionTypes[result];
        if (nextSections === 'キャラ武器') {
            nextSections = nextSectionTypes['キャラルーレット'];
        }
        if (Array.isArray(nextSections) && nextSections.length > 0) {
            nextRoulette.style.display = 'block';
            nextButtons.style.display = 'block';
            maxSpins = parseInt(playerCountSelect.value);
            currentSpin = 0;
            drawNextWheel();
        } else if (nextSections === 'キャラ武器') {
            nextSections = nextSectionTypes['キャラルーレット'];
            nextRoulette.style.display = 'block';
            nextButtons.style.display = 'block';
            maxSpins = parseInt(playerCountSelect.value);
            currentSpin = 0;
            drawNextWheel();
        } else {
            const resetButton = document.createElement('button');
            resetButton.textContent = '最初に戻る';
            resetButton.className = 'resetButton';
            shibariButtons.appendChild(resetButton);
            resetButton.addEventListener('click', () => {
                resetAll();
            });
        }
    }
});
nextSpinButton.addEventListener('click', () => {
    if (!nextIsSpinning) {
        nextIsSpinning = true;
        nextSpinButton.disabled = true;
        nextStopButton.disabled = false;
        spinNextWheel();
    }
});
nextStopButton.addEventListener('click', () => {
    if (nextIsSpinning) {
        nextIsSpinning = false;
        cancelAnimationFrame(nextAnimationFrameId);
        const startTime = performance.now();
        const initialSpeed = 5;
        const duration = 3000;
        let currentSpeed = initialSpeed;
        const sectionAngle = 360 / nextSections.length;
        const targetIndex = Math.floor(Math.random() * nextSections.length);
        const targetAngle = (targetIndex * sectionAngle + 180) % 360;
        function decelerate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            currentSpeed = initialSpeed * (1 - eased);
            nextRotation += currentSpeed;
            nextCanvas.style.transform = `rotate(${nextRotation}deg)`;
            if (progress < 1) {
                nextAnimationFrameId = requestAnimationFrame(decelerate);
            } else {
                nextRotation = targetAngle;
                nextCanvas.style.transform = `rotate(${nextRotation}deg)`;
                const index = targetIndex;
                const result = nextSections[index].name;
                let displayText = `プレイヤー${currentPlayer} - スピン ${currentSpin + 1}/${maxSpins} - 結果: ${result}`;
                let centerText = result;
                if (nextSections === nextSectionTypes['各1.1縛り']) {
                    const characters = versionCharactersMap[result];
                    displayText = `プレイヤー${currentPlayer} - スピン ${currentSpin + 1}/${maxSpins} - 結果: ${result} - 対応キャラ: ${characters.join(', ')}`;
                    centerText = `${result} (${characters.join(', ')})`;
                } else if (nextSections === nextSectionTypes['誕生月']) {
                    const characters = monthCharactersMap[result];
                    displayText = `プレイヤー${currentPlayer} - スピン ${currentSpin + 1}/${maxSpins} - 結果: ${result} - 対応キャラ: ${characters.join(', ')}`;
                    centerText = `${result} (${characters.join(', ')})`;
                } else if (nextSections === nextSectionTypes['アルファベット縛り']) {
                    const characters = alphabetCharactersMap[result];
                    displayText = `プレイヤー${currentPlayer} - スピン ${currentSpin + 1}/${maxSpins} - 結果: ${result} - 対応キャラ: ${characters.join(', ')}`;
                    centerText = `${result} (${characters.join(', ')})`;
                }
                nextResultDiv.textContent = displayText;
                document.getElementById('nextCenterResult').textContent = centerText;
                nextResultDiv.style.display = 'block';
                document.getElementById('nextCenterResult').style.display = 'block';
                if (nextSections === nextSectionTypes['キャラルーレット'] || nextSections === 'キャラ武器') {
                    const rerollButton = document.createElement('button');
                    rerollButton.textContent = '持っていない';
                    rerollButton.className = 'rerollButton';
                    rerollButton.addEventListener('click', () => {
                        nextButtons.removeChild(rerollButton);
                        nextRotation = 0;
                        nextCanvas.style.transform = `rotate(0deg)`;
                        nextResultDiv.style.display = 'none';
                        document.getElementById('nextCenterResult').style.display = 'none';
                        playerResults.shift();
                        nextIsSpinning = true;
                        nextSpinButton.disabled = true;
                        nextStopButton.disabled = false;
                        spinNextWheel();
                    });
                    nextButtons.appendChild(rerollButton);
                }
                currentSpin++;
                currentPlayer++;
                if (currentSpin < maxSpins) {
                    nextRotation = 0;
                    nextCanvas.style.transform = `rotate(0deg)`;
                    nextResultDiv.style.display = 'none';
                    document.getElementById('nextCenterResult').style.display = 'none';
                    const rerollButton = document.querySelector('.rerollButton');
                    if (rerollButton) nextButtons.removeChild(rerollButton);
                    nextIsSpinning = false;
                    nextSpinButton.disabled = false;
                    nextStopButton.disabled = true;
                } else {
                    nextSpinButton.disabled = true;
                    nextStopButton.disabled = true;
                    nextNextButton.disabled = false;
                    if (nextSections !== 'キャラ武器' && !['各1.1縛り', '誕生月', 'アルファベット縛り'].includes(shibariResultDiv.textContent.replace('結果: ', ''))) {
                        const resetButton = document.createElement('button');
                        resetButton.textContent = '最初に戻る';
                        resetButton.className = 'resetButton';
                        nextButtons.appendChild(resetButton);
                        resetButton.addEventListener('click', () => {
                            resetAll();
                        });
                    } else if (['各1.1縛り', '誕生月', 'アルファベット縛り'].includes(shibariResultDiv.textContent.replace('結果: ', ''))) {
                        const resetButton = document.createElement('button');
                        resetButton.textContent = '最初に戻る';
                        resetButton.className = 'resetButton';
                        nextButtons.appendChild(resetButton);
                        resetButton.addEventListener('click', () => {
                            resetAll();
                        });
                    }
                }
            }
        }
        decelerate();
    }
});
nextNextButton.addEventListener('click', () => {
    if (shibariResultDiv.textContent.replace('結果: ', '') === 'キャラ武器ルーレット') {
        selectedCharacters = playerResults.map(res => res.result);
        nextRoulette.style.display = 'none';
        nextButtons.style.display = 'none';
        nextResultDiv.style.display = 'none';
        document.getElementById('nextCenterResult').style.display = 'none';
        weaponRoulette.style.display = 'block';
        weaponButtons.style.display = 'block';
        currentWeaponSpin = 0;
        maxWeaponSpins = selectedCharacters.length;
        const weaponType = characterWeaponMap[selectedCharacters[currentWeaponSpin]];
        weaponSections = weaponLists[weaponType].map(name => ({
            name,
            color: '#ffeb3b'
        }));
        drawWeaponWheel();
    } else {
        const resetButton = document.createElement('button');
        resetButton.textContent = '最初に戻る';
        resetButton.className = 'resetButton';
        nextButtons.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            resetAll();
        });
    }
});
weaponSpinButton.addEventListener('click', () => {
    if (!weaponIsSpinning) {
        weaponIsSpinning = true;
        weaponSpinButton.disabled = true;
        weaponStopButton.disabled = false;
        spinWeaponWheel();
    }
});
weaponStopButton.addEventListener('click', () => {
    if (weaponIsSpinning) {
        weaponIsSpinning = false;
        cancelAnimationFrame(weaponAnimationFrameId);
        const startTime = performance.now();
        const initialSpeed = 5;
        const duration = 3000;
        let currentSpeed = initialSpeed;
        const sectionAngle = 360 / weaponSections.length;
        const targetIndex = Math.floor(Math.random() * weaponSections.length);
        const targetAngle = (targetIndex * sectionAngle + 180) % 360;
        function decelerate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            currentSpeed = initialSpeed * (1 - eased);
            weaponRotation += currentSpeed;
            weaponCanvas.style.transform = `rotate(${weaponRotation}deg)`;
            if (progress < 1) {
                weaponAnimationFrameId = requestAnimationFrame(decelerate);
            } else {
                weaponRotation = targetAngle;
                weaponCanvas.style.transform = `rotate(${weaponRotation}deg)`;
                const index = targetIndex;
                const result = weaponSections[index].name;
                weaponResultDiv.textContent = `プレイヤー${currentWeaponSpin + 1} (${selectedCharacters[currentWeaponSpin]}) - 武器: ${result}`;
                document.getElementById('weaponCenterResult').textContent = result;
                weaponResultDiv.style.display = 'block';
                document.getElementById('weaponCenterResult').style.display = 'block';
                currentWeaponSpin++;
                if (currentWeaponSpin < maxWeaponSpins) {
                    weaponRotation = 0;
                    weaponCanvas.style.transform = `rotate(0deg)`;
                    weaponResultDiv.style.display = 'none';
                    document.getElementById('weaponCenterResult').style.display = 'none';
                    weaponIsSpinning = false;
                    weaponSpinButton.disabled = false;
                    weaponStopButton.disabled = true;
                    weaponNextButton.disabled = false;
                    const weaponType = characterWeaponMap[selectedCharacters[currentWeaponSpin]];
                    weaponSections = weaponLists[weaponType].map(name => ({
                        name,
                        color: '#ffeb3b'
                    }));
                    drawWeaponWheel();
                } else {
                    weaponSpinButton.disabled = true;
                    weaponStopButton.disabled = true;
                    weaponNextButton.disabled = true;
                    const resetButton = document.createElement('button');
                    resetButton.textContent = '最初に戻る';
                    resetButton.className = 'resetButton';
                    weaponButtons.appendChild(resetButton);
                    resetButton.addEventListener('click', () => {
                        resetAll();
                    });
                }
            }
        }
        decelerate();
    }
});
weaponNextButton.addEventListener('click', () => {
    weaponRotation = 0;
    weaponCanvas.style.transform = `rotate(0deg)`;
    weaponResultDiv.style.display = 'none';
    document.getElementById('weaponCenterResult').style.display = 'none';
    weaponIsSpinning = false;
    weaponSpinButton.disabled = false;
    weaponStopButton.disabled = true;
    weaponNextButton.disabled = true;
    const weaponType = characterWeaponMap[selectedCharacters[currentWeaponSpin]];
    weaponSections = weaponLists[weaponType].map(name => ({
        name,
        color: '#ffeb3b'
    }));
    drawWeaponWheel();
});
