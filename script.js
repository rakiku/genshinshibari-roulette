// セットアップ
const setup = document.getElementById('setup');
const playerCountSelect = document.getElementById('playerCount');
const spinCountInput = document.getElementById('spinCount');
const startButton = document.getElementById('startButton');

// BOSSルーレットの設定
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
    { name: 'アンドリアス', color: '#36d6a0' },
    { name: '無相の炎', color: '#fe6640' },
    { name: '淑女', color: '#74E4E2' },
    { name: '雷音権現', color: '#cc85ff' }
];
let bossRotation = 0;
let bossIsSpinning = false;
let bossAnimationFrameId;

// 縛りルーレットの設定
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
    { name: '国縛り', color: '#ffeb3b' },
    { name: 'モノ元素', color: '#ffeb3b' },
    { name: 'キャラ武器縛り', color: '#ffeb3b' }
];
let shibariRotation = 0;
let shibariIsSpinning = false;
let shibariAnimationFrameId;
let currentSpin = 0;
let maxSpins = 0;

// 次のルーレットの設定
const nextCanvas = document.getElementById('nextWheel');
const nextCtx = nextCanvas.getContext('2d');
const nextSpinButton = document.getElementById('nextSpinButton');
const nextStopButton = document.getElementById('nextStopButton');
const nextNextButton = document.getElementById('nextNextButton');
const nextResultDiv = document.getElementById('nextResult');
const nextRouter = document.getElementById('nextRoulette');
const nextButtons = document.getElementById('nextButtons');
const nextRadius = nextCanvas.width / 2;
let nextSections = [];
let nextRotation = 0;
let nextIsSpinning = false;
let nextAnimationFrameId = null;
let currentPlayer = 1;
let playerResults = [];

// 武器ルーレットの設定
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
let weaponAnimationFrameId = null;
let currentWeaponSpin = 0;
let maxWeaponSpins = 0;
let selectedCharacters = [];

// キャラクターと武器種のマッピング
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

// 武器種ごとの武器リスト
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

// 次のセクションの定義
const nextSectionTypes = {
    '国縛り': [
        { name: 'モンド', color: '#36d6a0' },
        { name: '璃月', color: '#F3AC11' },
        { name: '稲妻', color: '#cc85ff' },
        { name: 'スメール', color: '#8dcc06' },
        { name: 'フォンテーヌ', color: '#00c0fe' },
        { name: 'ナタ', color: '#fe6640' },
        { name: 'スネージナヤ', color: '#74E4E2' }
    ],
    'モノ元素': [
        { name: '炎', color: '#fe6640' },
        { name: '水', color: '#00c0fe' },
        { name: '風', color: '#36d6a0' },
        { name: '雷', color: '#cc85ff' },
        { name: '草', color: '#8dcc06' },
        { name: '氷', color: '#74E4E2' },
        { name: '岩', color: '#F3AC11' }
    ],
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
    ]
};

// イージング関数
function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
}

// ルーレットの描画関数
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
        bossCtx.font = '20px Noto Sans JP';
        bossCtx.fillText(bossSections[i].name, bossRadius - 20, 10);
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
        weaponCtx.font = '20px Noto Sans JP';
        weaponCtx.fillText(weaponSections[i].name, weaponRadius - 20, 10);
        weaponCtx.restore();
    }
}

// スピンアニメーション
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

// リセット関数
function resetAll() {
    bossRoulette.style.display = 'none';
    bossButtons.style.display = 'none';
    bossResultDiv.style.display = 'none';
    document.getElementById('bossCenterResult').style.display = 'none';
    shibariRoulette.style.display = 'none';
    shibariButtons.style.display = 'none';
    shibariResultDiv.style.display = 'none';
    document.getElementById('shibariCenterResult').style.display = 'none';
    nextRouter.style.display = 'none';
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

// イベントリスナー
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
    shibariRoulette.style