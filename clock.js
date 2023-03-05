const clockTo = document.querySelector("h2.clockto");
const clockFrom = document.querySelector("h2.clockfrom");

function getClockTo() {
  const date = new Date();
  const days = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
    clockTo.innerText = "~" + days + " / " + hours + " : " + minutes + " : " + seconds;

}


function getClockFrom() {
    const date = new Date();
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
      clockFrom.innerText = days + " / " + hours + " : " + minutes + " : " + seconds + "~";
 
  }



getClockTo();
getClockFrom();
setInterval(getClockTo, 1000);
