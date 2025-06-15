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

const binds = [
    "☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール",
    "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止",
    "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし"
];

const subRoulettes = {
    "国縛り": ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "例外"],
    "初期キャラのみ": ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "X", "ベネット", "行秋", "凝光", "X", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", " ", "モナ", " ", "刻晴", "ウェンティ", "クレー"],
    "キャラルーレット": ["旅人", "ジン", "アンバー", "リサ", "ガイア", "バーバラ", "ディルック", "レザー", "ウェンティ", "クレー", "ベネット", "ノエル", "フィッシュル", "スクロース", "モナ", "ディオナ", "アルベド", "ロサリア", "エウルア", "ミカ", "魈", "北斗", "凝光", "香菱", "行秋", "x", "重雲", "七七", "刻晴", "タルタリヤ", "鍾離", "辛炎", "甘雨", "胡桃", "煙緋", "申鶴", "雲菫", "x", "夜蘭", "x", "ヨォーヨ", "x", "白朮", "x", "閑雲", "x", "嘉明", "x", "藍硯", "x", "神里綾華", "x", "神里綾人", "x", "楓原万葉", "x", "宵宮", "x", "早柚", "x", "雷電将軍", "x", "九条裟羅", "x", "珊瑚宮心海", "x", "トーマ", "荒瀧一斗", "ゴロー", "八重神子", "x", "久岐忍", "x", "鹿野院平蔵", "綺良々", "夢見月瑞希", "ティナリ", "コレイ", "ドリー", "x", "セノ", "x", "キャンディス", "x", "ニィロウ", "x", "ナヒーダ", "x", "レイラ", "x", "放浪者", "x", "ファルザン", "x", "アルハイゼン", "x", "ディシア", "x", "カーヴェ", "x", "セトス", "x", "リネ", "リネット", " ", "フレミネ", "ヌヴィレット", "リオセスリ", "x", "シャルロット", "x", "フリーナ", "x", "ナヴィア", "シュヴルーズ", "千織", "アルレッキーノ", "クロリンデ", "シグウィン", "エミリエ", "エスコフィエ", "ムアラニ", "カチーナ", "キィニチ", "シロネン", "チャスカ", "オロルン", "シトラリ", "マーヴィカ", "ヴァレサ", "イファ", "イアンサ", "スカーク", "ダリア", "アーロイ"],
    "武器種縛り": ["片手剣", "両手剣", "長柄武器", "法器", "弓"],
    "モノ元素縛り": ["風", "岩", "雷", "草", "水", "炎", "氷"],
    "各1.1縛り": ["n.0", "n.1", "n.2", "n.3", "n.4", "n.5", "n.6", "n.7", "n.8"],
    "誕生月": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
    "アルファベット縛り": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
};

// ユーティリティ関数
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// ルーレット結果生成関数
function generateRoulette(playerCount, bindCount) {
    const results = [];
    const commonBoss = getRandomItem(bosses); // 共通のボス

    for (let player = 1; player <= playerCount; player++) {
        const playerResult = { player: `プレイヤー ${player}`, binds: [], boss: commonBoss };
        for (let i = 0; i < bindCount; i++) {
            const bind = getRandomItem(binds);
            let value = null;

            switch (bind) {
                case "国縛り":
                    value = getRandomItem(subRoulettes["国縛り"]);
                    break;
                case "初期キャラのみ":
                    value = getRandomItem(subRoulettes["初期キャラのみ"]);
                    break;
                case "キャラルーレット":
                    value = getRandomItem(subRoulettes["キャラルーレット"]);
                    break;
                case "武器種縛り":
                    value = getRandomItem(subRoulettes["武器種縛り"]);
                    break;
                case "モノ元素縛り":
                    value = getRandomItem(subRoulettes["モノ元素縛り"]);
                    break;
                case "各1.1縛り":
                    value = getRandomItem(subRoulettes["各1.1縛り"]);
                    break;
                case "誕生月":
                    value = getRandomItem(subRoulettes["誕生月"]);
                    break;
                case "アルファベット縛り":
                    value = getRandomItem(subRoulettes["アルファベット縛り"]);
                    break;
                default:
                    value = "適用なし";
            }

            playerResult.binds.push({ rule: bind, value: value });
        }
        results.push(playerResult);
    }

    // 結果を表示
    displayResults(results);
    return results;
}

// 結果を表示する関数
function displayResults(results) {
    const resultDiv = document.getElementById("rouletteResult");
    if (!resultDiv) return;

    resultDiv.innerHTML = "<h2>ルーレット結果</h2>";
    results.forEach(player => {
        resultDiv.innerHTML += `<h3>${player.player}</h3>`;
        player.binds.forEach(bind => {
            resultDiv.innerHTML += `<p><strong>${bind.rule}:</strong> ${bind.value}</p>`;
        });
        resultDiv.innerHTML += `<p><strong>対戦ボス:</strong> ${player.boss}</p><hr>`;
    });
}

// フォーム送信時の処理
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rouletteForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const playerCount = parseInt(document.getElementById("playerCount").value);
            const bindCount = parseInt(document.getElementById("bindCount").value);
            if (playerCount >= 1 && playerCount <= 4 && bindCount >= 1 && bindCount <= 10) {
                generateRoulette(playerCount, bindCount);
            } else {
                alert("プレイヤー数は1～4人、縛りの数は1～10にしてください。");
            }
        });
    }
});
