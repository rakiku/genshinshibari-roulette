// プレイヤー数と縛り数の設定
let playerCount = 1;
let restrictionCount = 1;
let currentPlayer = 0;
let selectedRestrictions = [];
let playerResults = [];
let currentItems = []; // 所持確認用に現在のアイテムを保持

// ルーレット回転アニメーション
function startRoulette(items, callback) {
  currentItems = [...items]; // 現在のアイテムを保存
  let speed = 50;
  let interval = setInterval(() => {
    let index = Math.floor(Math.random() * currentItems.length);
    document.getElementById("roulette").innerText = currentItems[index];
  }, speed);

  document.getElementById("stop").onclick = () => {
    clearInterval(interval);
    let slowInterval = setInterval(() => {
      speed += 20;
      let index = Math.floor(Math.random() * currentItems.length);
      document.getElementById("roulette").innerText = currentItems[index];
      if (speed > 500) {
        clearInterval(slowInterval);
        callback(currentItems[index]);
      }
    }, speed);
  };
}

// ボスルーレット
function bossRoulette() {
  startRoulette(bosses, (result) => {
    showPopup(`選ばれたボス: ${result}`, () => {
      playerResults[currentPlayer].boss = result;
    });
  });
}

// 縛りルーレット
function restrictionRoulette() {
  startRoulette(restrictions, (result) => {
    showPopup(`選ばれた縛り: ${result}`, () => {
      selectedRestrictions.push(result);
      if (["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].includes(result)) {
        handleDetailRoulette(result);
      } else {
        playerResults[currentPlayer].restrictions.push(result);
      }
    });
  });
}

// 詳細ルーレットの処理
function handleDetailRoulette(restriction) {
  switch (restriction) {
    case "国縛り":
      startRoulette(Object.keys(nations), (nation) => {
        showPopup(`選ばれた国: ${nation}`, () => {
          playerResults[currentPlayer].restrictions.push(`国縛り: ${nation}`);
        });
      });
      break;
    case "キャラルーレット":
      startRoulette(characters, (character) => {
        showPopup(`選ばれたキャラクター: ${character}`, () => {
          playerResults[currentPlayer].restrictions.push(`キャラルーレット: ${character}`);
        });
      });
      break;
    case "武器種縛り":
      startRoulette(weaponTypes, (weaponType) => {
        showPopup(`選ばれた武器種: ${weaponType}`, () => {
          playerResults[currentPlayer].restrictions.push(`武器種縛り: ${weaponType}`);
        });
      });
      break;
    case "キャラ武器ルーレット":
      startRoulette(characters, (character) => {
        let weaponType = characterWeaponTypes[character];
        startRoulette(weaponsByType[weaponType], (weapon) => {
          showPopup(`選ばれたキャラクター: ${character}, 武器: ${weapon}`, () => {
            playerResults[currentPlayer].restrictions.push(`キャラ武器ルーレット: ${character} - ${weapon}`);
          });
        });
      });
      break;
    case "モノ元素縛り":
      startRoulette(elements, (element) => {
        showPopup(`選ばれた元素: ${element}`, () => {
          playerResults[currentPlayer].restrictions.push(`モノ元素縛り: ${element}`);
        });
      });
      break;
    case "各1.1縛り":
      startRoulette(Object.keys(versions), (version) => {
        showPopup(`選ばれたバージョン: ${version}`, () => {
          playerResults[currentPlayer].restrictions.push(`各1.1縛り: ${version}`);
        });
      });
      break;
    case "誕生月":
      startRoulette(Object.keys(birthMonths), (month) => {
        showPopup(`選ばれた誕生月: ${month}月`, () => {
          playerResults[currentPlayer].restrictions.push(`誕生月: ${month}月`);
        });
      });
      break;
    case "アルファベット縛り":
      startRoulette(Object.keys(alphabets), (alphabet) => {
        showPopup(`選ばれたアルファベット: ${alphabet}`, () => {
          playerResults[currentPlayer].restrictions.push(`アルファベット縛り: ${alphabet}`);
        });
      });
      break;
  }
}

// ポップアップ表示（所持確認機能対応）
function showPopup(message, callback) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-message").innerText = message;
  document.getElementById("next").style.display = "inline";
  document.getElementById("not-owned").style.display = "inline";
  
  document.getElementById("next").onclick = () => {
    closePopup();
    if (callback) callback();
  };
  
  document.getElementById("not-owned").onclick = () => {
    let selectedItem = message.split(": ")[1] || message.split(", ")[0].split(": ")[1];
    let index = currentItems.indexOf(selectedItem);
    if (index > -1) {
      currentItems.splice(index, 1); // 項目を除外
    }
    if (currentItems.length === 0) {
      alert("選択可能な項目がありません。");
      closePopup();
      return;
    }
    closePopup();
    startRoulette(currentItems, (result) => {
      showPopup(`${message.split(": ")[0]}: ${result}`, callback); // 再抽選結果を表示
    });
  };
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

// 縛りを選択してルーレットを実行
function selectRestriction() {
  let existingSelect = document.getElementById("restriction-select");
  if (existingSelect) existingSelect.remove();
  let existingButton = document.getElementById("run-selected");
  if (existingButton) existingButton.remove();

  let select = document.createElement("select");
  select.id = "restriction-select";
  ["国縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り"].forEach(r => {
    let option = document.createElement("option");
    option.value = r;
    option.text = r;
    select.appendChild(option);
  });
  document.getElementById("main").appendChild(select);

  let button = document.createElement("button");
  button.id = "run-selected";
  button.innerText = "ルーレットを実行";
  button.onclick = () => {
    let selected = document.getElementById("restriction-select").value;
    handleDetailRoulette(selected);
  };
  document.getElementById("main").appendChild(button);
}
