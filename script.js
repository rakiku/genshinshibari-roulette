document.addEventListener("DOMContentLoaded", () => {
  const startAllBtn = document.getElementById("startAll");
  const bossBtn = document.getElementById("bossOnly");
  const constraintBtn = document.getElementById("constraintsOnly");
  const manualConstraintBtn = document.getElementById("manualConstraint");
  const aboutBtn = document.getElementById("aboutButton");
  const resetBtn = document.getElementById("reset");

  const playerSelect = document.getElementById("playerCount");
  const constraintSelect = document.getElementById("constraintCount");

  const rouletteArea = document.getElementById("rouletteArea");
  const resultArea = document.getElementById("resultArea");

  const bosses = [
    "無相の炎", "無相の水", "雷音権現", "アペプ", "召使"
  ];

  const constraints = [
    "☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り",
    "初期キャラのみ", "UI非表示＋リロール", "誰か1人倒れたら終了",
    "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット",
    "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り",
    "各1.1縛り", "誕生月", "アルファベット縛り", "☆１・聖遺物なし"
  ];

  startAllBtn.addEventListener("click", () => {
    const playerCount = parseInt(playerSelect.value);
    const constraintCount = parseInt(constraintSelect.value);
    runFullRoulette(playerCount, constraintCount);
  });

  bossBtn.addEventListener("click", () => {
    showResult("ボス", spin(bosses));
  });

  constraintBtn.addEventListener("click", () => {
    showResult("縛り", spin(constraints));
  });

  manualConstraintBtn.addEventListener("click", () => {
    alert("今後のアップデートで対応予定です。");
  });

  aboutBtn.addEventListener("click", () => {
    showResult("このルーレットについて", `
      原神で遊ぶための縛り条件やボスを自動で抽選するツールです。<br>
      データは作者が手動で管理し、外部情報は使用していません。<br>
      最大4人までのマルチプレイ対応、縛り数は最大4つまで選択可能です。
    `);
  });

  resetBtn.addEventListener("click", () => {
    location.reload();
  });

  function spin(list) {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled[0];
  }

  function showResult(title, content) {
    resultArea.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
  }

  function runFullRoulette(playerCount, constraintCount) {
    rouletteArea.innerHTML = `<p>🎮 プレイヤー数：${playerCount} / 🎲 縛り数：${constraintCount}</p>`;
    const selectedBoss = spin(bosses);
    let result = `<h2>🧿 ボス：${selectedBoss}</h2><hr>`;

    for (let i = 1; i <= playerCount; i++) {
      result += `<h3>プレイヤー${i}</h3><ul>`;
      const used = new Set();
      for (let j = 0; j < constraintCount; j++) {
        let constraint;
        do {
          constraint = spin(constraints);
        } while (used.has(constraint));
        used.add(constraint);
        result += `<li>${constraint}</li>`;
      }
      result += `</ul>`;
    }

    resultArea.innerHTML = result;
  }
});
