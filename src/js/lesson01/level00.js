//you can rename extension to js
console.log('level00');

const body = document.body;
const btnId = document.getElementById("exampleID");
const btnClass = document.querySelectorAll(".exampleClassName");
console.log(btnId);
console.log(btnClass);

// IDパターン
// btnId.addEventListener('click', () => {
//   if (body.style.backgroundColor == "rgb(60, 179, 113)") {
//     body.style.backgroundColor = "#ffa500";
//   } else {
//     body.style.backgroundColor = "#3cb371";
//   };
// });


// Classパターン
btnClass.forEach(value => {

  console.log(value);

  value.addEventListener('click', () => {
    if (body.style.backgroundColor == "rgb(60, 179, 113)") {
      body.style.backgroundColor = "#ffa500";
    } else {
      body.style.backgroundColor = "#3cb371";
    };
  });

});
