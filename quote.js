const rememberThis = [
  "지로보 센세 - 인간이 5명이나 모이면 반드시 1명은 쓰레기가 있다",
  "조성훈 - 잘 되면 내 덕, 못 되면 니 탓",
  "네지 - 노력하면 반드시 꿈은 이루어진다는 소리는 환상일 뿐이다",
  "마이트 가이 - 불타올라라, 청춘!",
  "정대만 - 그래 난 정대만. 포기를 모르는 남자지",
  "야가미 라이토 - 계획대로!!",
  "신형만 - 꿈은 도망가지 않아. 도망가는 것은 언제나 나 자신이지",
  "스파이크 - 죽으러 가는게 아니야.. 내가 살아있는지 어떤지 확인하러가는거야",
  "오이카와 토오루 - 재능은 꽃 피우는 것, 센스는 갈고 닦는 것",
  "베지터 - 네가 No.1이다!",
  "강백호 - 왼손은 거들뿐",
  "조성훈 - 즐길 수 없으면 피하라",
];

const quoteChange = document.querySelector(".hahaha").innerText;
const refreshBtn = document.querySelector(".randombtn");

function imgonnadrinkalcohol() {
  const rememberThisRandom =
    rememberThis[Math.floor(Math.random() * rememberThis.length)];

  document.querySelector(".hahaha").innerText = rememberThisRandom;
  document.querySelector(".hahaha").style.color = "#50586c";
}

refreshBtn.addEventListener("click", imgonnadrinkalcohol);
