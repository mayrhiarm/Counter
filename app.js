let btn3 = document.querySelector(".run");
let btn2 = document.querySelector(".jump");
let btn1 = document.querySelector(".crawl");
let bee = document.querySelector("p");
let high = document.querySelector("h1");
let bgrc = document.body;

// count = 0;

// function increase() {
//   count++;
//   p.innerText = count;
//   if (count > 1) {
//       body.style.backgroundColor = 'blue';
//   }
// }
// increase();

// btn3.addEventListener("click", increase);

// function decrease() {
//   Count--;
//   p.innerText = count;
// }
// decrease();
// btn1.addEventListener("click", decrease);

//Increase function
function wkd() {
  bee.textContent++;
  if (bee.textContent > 0) {
    bgrc.style.backgroundColor = "yellow";
  }
}
btn3.addEventListener("click", wkd);

//Reset function

function wks() {
  bee.textContent = 0;
  if (bee.textContent == 0) {
    bgrc.style.backgroundColor = "red";
  }
}
btn2.addEventListener("click", wks);

//Decrease function
function wkss() {
  bee.textContent--;
  if (bee.textContent < 0) {
    bgrc.style.backgroundColor = "green";
  }
}
btn1.addEventListener("click", wkss);

// function BMW() {
//   let randomNumber = Math.floor(Math.random() * 8);
//   let colors = [
//     "red",
//     "orange",
//     "violet",
//     "yellow",
//     "white",
//     "blue",
//     "green",
//     "purple",
//   ];
//   console.log(colors[randomNumber]);
//   document.body.style.backgroundColor = colors[randomNumber];
// }
// // BMW();

// let button1 = document.querySelector(".try");
// button1.addEventListener("click", BMW);

// let numbers = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// let newNumber = numbers + "," + numbers2;
// console.log(newNumber);
