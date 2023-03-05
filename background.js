const variousBg = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GoJCmzpJV1-8_SB4aSm6VzSzXWYvACu3BUFT6p-5vQudTNxX52cjHVyKnOr1kqAia3s&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAprVMcaGK8VlYjrMIN4EtKIh31N8xRMXDA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdFO4AyLOPziz6gYyqEWdugBZx5uuusbOHKeWRZ-YHDPukxd-AKV_ywT8-wPB9-vZWHg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-G5D1bjTTiop0n3UtPylBs665zQqgdakxO1IGDE4FkSVnmvRoNHYRBqGtABII9n-I0o&usqp=CAU",
  "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfMTIy/MDAxNDkzNzE1MTY5OTUz.ontrojYw9EVSwPc94chazIPBL-LXOcK1Zzy03ghTofMg.tFx17YWNNrnIy5Dad-mvlLS1DGCMd1HZir9F7tr9uVIg.PNG.jinmichu/02.png?type=w800",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hVEdV6QW8u0CSXeP9FcYFW2r0hc3KSyq0g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-1EaBvjm2vGuSEf5mAMVY5VFtH5ru2X0pg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnx75qSgdpurJKJhIIHL3jfB3HEhmYbuyfQ&usqp=CAU",
];
const existingBg = document.querySelector(".bg").style.backgroundImage;
const randomBgBtn = document.querySelector(".randombtn");

function bling() {
  const variousBgRandom =
    variousBg[Math.floor(Math.random() * variousBg.length)];
  document.querySelector(".bg").style.backgroundImage =
    "url(" + variousBgRandom + ")";
}
randomBgBtn.addEventListener("click", bling);

const modalBg = document.querySelector("#login-form");
const nameSubmit = document.querySelector("#login-form input");
const modal = document.querySelector(".modallogin");
const userName = document.querySelector(".hahaha span");
function booom(event) {
  event.preventDefault();

  modal.classList.add("hidden");
  userName.innerText = nameSubmit.value;
}

modalBg.addEventListener("submit", booom);
