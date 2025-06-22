function batchRoulette() {
  // ボスルーレット
  startRoulette(bosses, (boss) => {
    showPopup(`選ばれたボス: ${boss}`);
    setTimeout(() => {
      // 縛りルーレット
      startRoulette(restrictions, (restriction) => {
        showPopup(`選ばれた縛り: ${restriction}`);
        setTimeout(() => {
          // 詳細ルーレット
          if (["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].includes(restriction)) {
            handleDetailRoulette(restriction);
          }
        }, 1000); // ポップアップが表示された後、少し待機してから次のルーレット
      });
    }, 1000);
  });
}

// 「このルーレットについて」ページを表示
function showAbout() {
  window.location.href = "about.html";
}
