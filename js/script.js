const greeting = document.querySelector(".greeting");
const time = document.querySelector(".time");

let date = new Date();
let hour = date.getHours();
console.log(date, hour);
let promptName = prompt("Enter your Name");
document.open();
console.log(new Date().toLocaleTimeString());
if (hour < 11) {
  greeting.innerHTML = `${promptName},Good Morning.. ^ _ ^`;
  timer(time);
} else if (hour < 20) {
  greeting.innerHTML = `${promptName},Good Evening.. o _ o`;
  timer(time);
} else if (hour < 23) {
  greeting.innerHTML = `${promptName},Good Night.. > _ <`;
  timer(time);
}
// timer()
function timer(a) {
  setInterval(function () {
    a.innerHTML = new Date().toLocaleTimeString();
    // console.log(a)
  }, 1000);
}

//<USing document.write()>//
// let date = new Date();
// let hour = date.getHours();
// console.log(date, hour);
// let promptName = prompt("Enter your Name");
// document.open();
// console.log(new Date().toLocaleTimeString());
// if (hour < 11) {
//   document.write(`<div class="row h-100 m-0 align-items-center">
// <div class="col-6 text-center mx-auto">
//     <h1>${promptName},Good Morning!</h1>
//     <h2>${new Date().toLocaleString()}</h2>
// </div>
// </div>`);
// } else if (hour < 20) {
//   document.write(`<div class="row h-100 m-0 align-items-center">
// <div class="col-6 text-center mx-auto">
//     <h1>${promptName},Good Evening</h1>
//     <h2>${new Date().toLocaleString()}</h2>

// </div>
// </div>`);
// } else if (hour < 23) {
//   document.write(`<div class="row h-100 m-0 align-items-center">
// <div class="col-6 text-center mx-auto">
//     <h1>${promptName},Good Night!</h1>
//     <h2>${new Date().toLocaleString()}</h2>
// </div>
// </div>`);
// }
