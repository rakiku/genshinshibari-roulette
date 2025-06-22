function batchRoulette() {
  playerCount = parseInt(document.getElementById("player-count").value);
  restrictionCount = parseInt(document.getElementById("restriction-count").value);
  playerResults = Array.from({ length: playerCount }, () => ({ boss: "", restrictions: [] }));
  currentPlayer = 0;
  selectedRestrictions = [];

  // ボスルーレット（全プレイヤー共通）
  startRoulette(bosses, (boss) => {
    showPopup(`選ばれたボス: ${boss}`, () => {
      playerResults.forEach(player => player.boss = boss);
      restrictionRouletteForPlayer();
    });
  });
}

function restrictionRouletteForPlayer() {
  if (selectedRestrictions.length < restrictionCount) {
    restrictionRoulette();
  } else {
    currentPlayer++;
    if (currentPlayer < playerCount) {
      selectedRestrictions = [];
      restrictionRouletteForPlayer();
    } else {
      showResults();
    }
  }
}

function showResults() {
  let resultHTML = "<h2>結果</h2>";
  playerResults.forEach((player, index) => {
    resultHTML += `<h3>プレイヤー ${index + 1}</h3>`;
    resultHTML += `<p>ボス: ${player.boss}</p>`;
    resultHTML += `<p>縛り: ${player.restrictions.join(", ")}</p>`;
  });
  document.getElementById("main").innerHTML = resultHTML;
}

function showAbout() {
  window.location.href = "about.html";
}
