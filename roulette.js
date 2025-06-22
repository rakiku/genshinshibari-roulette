// ルーレット回転アニメーション
function startRoulette(items, callback) {
  let speed = 50;
  let interval = setInterval(() => {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("roulette").innerText = items[index];
  }, speed);

  document.getElementById("stop").onclick = () => {
    clearInterval(interval);
    let slowInterval = setInterval(() => {
      speed += 20;
      let index = Math.floor(Math.random() * items.length);
      document.getElementById("roulette").innerText = items[index];
      if (speed > 500) {
        clearInterval(slowInterval);
        callback(items[index]);
      }
    }, speed);
  };
}

// ボスルーレット
function bossRoulette() {
  startRoulette(bosses, (result) => {
    showPopup(`選ばれたボス: ${result}`);
  });
}

// 縛りルーレット
function restrictionRoulette() {
  startRoulette(restrictions, (result) => {
    showPopup(`選ばれた縛り: ${result}`);
    if (["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].includes(result)) {
      handleDetailRoulette(result);
    }
  });
}

// 詳細ルーレットの処理
function handleDetailRoulette(restriction) {
  switch (restriction) {
    case "国縛り":
      startRoulette(Object.keys(nations), (nation) => {
        showPopup(`選ばれた国: ${nation}`);
      });
      break;
    case "キャラルーレット":
      startRoulette(characters, (character) => {
        showPopup(`選ばれたキャラクター: ${character}`);
      });
      break;
    case "武器種縛り":
      startRoulette(weaponTypes, (weaponType) => {
        showPopup(`選ばれた武器種: ${weaponType}`);
      });
      break;
    case "キャラ武器ルーレット":
      startRoulette(characters, (character) => {
        let weaponType = characterWeaponTypes[character];
        startRoulette(weaponsByType[weaponType], (weapon) => {
          showPopup(`選ばれたキャラクター: ${character}, 武器: ${weapon}`);
        });
      });
      break;
    case "モノ元素縛り":
      startRoulette(elements, (element) => {
        showPopup(`選ばれた元素: ${element}`);
      });
      break;
    case "各1.1縛り":
      startRoulette(Object.keys(versions), (version) => {
        showPopup(`選ばれたバージョン: ${version}`);
      });
      break;
    case "誕生月":
      startRoulette(Object.keys(birthMonths), (month) => {
        showPopup(`選ばれた誕生月: ${month}月`);
      });
      break;
    case "アルファベット縛り":
      startRoulette(Object.keys(alphabets), (alphabet) => {
        showPopup(`選ばれたアルファベット: ${alphabet}`);
      });
      break;
  }
}

// ポップアップ表示
function showPopup(message) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-message").innerText = message;
}

// ポップアップを閉じる
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// 矛盾解消のためのフィルタリング
function filterCharacters(restrictions, characters) {
  let filtered = [...characters];
  if (restrictions.includes("恒常☆５縛り")) {
    filtered = filtered.filter(c => constantFiveStar.includes(c));
  }
  if (restrictions.includes("所持率100％縛り")) {
    filtered = filtered.filter(c => owned100.includes(c));
  }
  if (restrictions.includes("初期キャラのみ")) {
    filtered = filtered.filter(c => owned100.includes(c));
  }
  if (restrictions.includes("旅人縛り")) {
    filtered = filtered.filter(c => c === "旅人");
  }
  if (filtered.length === 0) {
    alert("選択可能なキャラクターがありません。縛りを再抽選します。");
    return null;
  }
  return filtered;
}

// 縛りを選択してルーレットを実行（未実装部分）
function selectRestriction() {
  alert("この機能は未実装です。縛りを手動で選択するUIを追加してください。");
}
