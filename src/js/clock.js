import { timeElement } from './dom.js';
const date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
function getTime() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }
  if (hour == 24) {
    hour = 0;
  }
  timeElement.innerHTML = `${('0' + hour).slice(-2)} : ${('0' + min).slice(-2)} : ${('0' + sec).slice(-2)} `;
}

export { date, getTime };
