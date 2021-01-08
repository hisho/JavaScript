import { Section } from "src/components";

//you can rename extension to js
console.log('test');


const getomi = document.querySelector('.ominoButton');
// const getomi =document.getElementById('exampleID')

console.log(getomi);
var nam = 0;

getomi.addEventListener('click', () => {
console.log(nam);

  if (nam == 0) {
    // document.body.style.backgroundColor = '#3cb371';
    document.body.setAttribute("style", "background-color:#3cb371;");
    nam = 1;
  } else {
    // document.body.style.backgroundColor = '#ffa500';
    document.body.setAttribute("style", "background-color:#ffa500;");
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
