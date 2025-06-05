// 簡易版：縛りルーレット（改良済）
let currentSpinIndex = 0;
let totalSpins = 1;
let shibariSegments = [
  { label: "武器なし" },
  { label: "HP縛り" },
  { label: "片手剣のみ" },
  { label: "誰かが死んだら終了" }
];
let shibariResults = [];

function getAdaptiveFontSize(segmentCount, radius) {
  if (segmentCount <= 10) return Math.floor(radius * 0.09);
  if (segmentCount <= 20) return Math.floor(radius * 0.07);
  if (segmentCount <= 30) return Math.floor(radius * 0.055);
  if (segmentCount <= 40) return Math.floor(radius * 0.045);
  return Math.floor(radius * 0.04);
}

function drawWheel(canvas, segments, angle) {
  const ctx = canvas.getContext("2d");
  const radius = canvas.width / 2;
  const segmentAngle = (2 * Math.PI) / segments.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  segments.forEach((segment, i) => {
    const start = angle + i * segmentAngle;
    const end = start + segmentAngle;

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, start, end);
    ctx.fillStyle = `hsl(${(i * 360) / segments.length}, 70%, 60%)`;
    ctx.fill();
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(start + segmentAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = `${getAdaptiveFontSize(segments.length, radius)}px sans-serif`;
    ctx.fillText(segment.label, radius - 10, 10);
    ctx.restore();
  });
}

let spinning = false;
let angle = 0;
let spinVelocity = 0;

function startRoulette(spins) {
  totalSpins = spins;
  currentSpinIndex = 0;
  shibariResults = [];
  document.getElementById("shibariResult").innerHTML = "";
  document.getElementById("shibariSpinButton").disabled = false;
  document.getElementById("shibariStopButton").disabled = true;
  document.getElementById("shibariNextButton").disabled = true;
  document.getElementById("shibariButtons").style.display = "block";
  document.getElementById("shibariRoulette").style.display = "block";
  drawWheel(document.getElementById("shibariWheel"), shibariSegments, angle);
}

function spin() {
  if (spinning) return;
  spinning = true;
  spinVelocity = Math.random() * 0.3 + 0.2;
  requestAnimationFrame(update);
  document.getElementById("shibariSpinButton").disabled = true;
  document.getElementById("shibariStopButton").disabled = false;
}

function stop() {
  spinVelocity = 0;
  document.getElementById("shibariStopButton").disabled = true;
  const canvas = document.getElementById("shibariWheel");
  const segmentAngle = (2 * Math.PI) / shibariSegments.length;
  const selectedIndex = Math.floor(((2 * Math.PI - angle % (2 * Math.PI)) % (2 * Math.PI)) / segmentAngle);
  const result = shibariSegments[selectedIndex].label;
  shibariResults.push(result);
  const resultDiv = document.getElementById("shibariResult");
  resultDiv.innerHTML += `<div>【${currentSpinIndex + 1}回目】${result}</div>`;
  resultDiv.style.display = "block";

  if (currentSpinIndex < totalSpins - 1) {
    document.getElementById("shibariNextButton").disabled = false;
  } else {
    document.getElementById("shibariNextButton").style.display = "none"; // 最後は非表示
  }
}

function next() {
  currentSpinIndex++;
  if (currentSpinIndex < totalSpins) {
    document.getElementById("shibariSpinButton").disabled = false;
    document.getElementById("shibariStopButton").disabled = true;
    document.getElementById("shibariNextButton").disabled = true;
  }
}

function update() {
  if (!spinning) return;
  angle += spinVelocity;
  spinVelocity *= 0.985;
  drawWheel(document.getElementById("shibariWheel"), shibariSegments, angle);
  if (spinVelocity < 0.002) {
    spinning = false;
    stop();
    return;
  }
  requestAnimationFrame(update);
}
