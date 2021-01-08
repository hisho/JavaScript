import { Section } from "src/components";

//you can rename extension to js
console.log('level00');


const getomi = document.querySelector('.ominoButton');


console.log('getomi');
var nam = 0;

document.addEventListener('click', (getomi) => {


  if (nam == 0) {
    // document.body.style.backgroundColor = '#3cb371';
    document.body.setAttribute("style", "backgroundcolor:#3cb371;");
    nam = 1;
  } else {
    // document.body.style.backgroundColor = '#ffa500';
    document.body.setAttribute("style", "backgroundcolor:#ffa500;");
    nam = 0;
  }

}, false);



// const getomi = document.querySelector('.ominoButton');
// console.log('getomi');

// const omichange = () => {
//   var nam = 0;

//   if (nam == 0) {
//     // document.body.style.backgroundColor = '#3cb371';
//     document.body.setAttribute("style", "backgroundcolor:#3cb371;");
//     nam = 1;
//   } else {
//     // document.body.style.backgroundColor = '#ffa500';
//     document.body.setAttribute("style", "backgroundcolor:#ffa500;");
//     nam = 0;
//   }
// };

// getomi.addEventListener('click', (omichange);
