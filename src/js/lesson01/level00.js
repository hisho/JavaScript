//you can rename extension to js
const body = document.body;
const btnId = document.getElementById("exampleID");
const btnClass = document.querySelectorAll(".exampleClassName");

// IDパターン
// btnId.addEventListener('click', () => {
//   if (body.style.backgroundColor == "rgb(60, 179, 113)") {
//     body.style.backgroundColor = "#ffa500";
//   } else {
//     body.style.backgroundColor = "#3cb371";
//   };
// });

if (btnClass != null) {

  // Classパターン
  btnClass.forEach(value => {

    value.addEventListener('click', () => {
      if (body.style.backgroundColor == "rgb(60, 179, 113)") {
        body.style.backgroundColor = "#ffa500";
      } else {
        body.style.backgroundColor = "#3cb371";
      };
    });

  });

}
