document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});

document.getElementById("aboutButton").addEventListener("click", () => {
  alert("このルーレットは原神の縛りプレイ用ルーレットです。\n制作者: @rakiku_genshin\n使用されるデータはすべて手動で管理されています。");
});

document.getElementById("startAll").addEventListener("click", () => {
  const players = parseInt(document.getElementById("playerCount").value);
  const constraints = parseInt(document.getElementById("constraintCount").value);

  // 仮のデモ結果出力
  let output = `<h2>🎲 ルーレット結果</h2><ul>`;
  output += `<li><strong>ボス:</strong> 無相の炎</li>`;
  for (let i = 1; i <= constraints; i++) {
    output += `<li>縛り ${i}: ☆4キャラ武器</li>`;
  }
  for (let p = 1; p <= players; p++) {
    output += `<li>プレイヤー${p}: キャラルーレット → ノエル</li>`;
  }
  output += `</ul>`;
  document.getElementById("resultArea").innerHTML = output;
});

// TODO: 縛り別ルーレットなど追加予定
