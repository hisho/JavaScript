//you can rename extension to js
const body = document.body;
const btn = document.getElementById("Lesson01Level01Button");

if (btn != null) {

  btn.addEventListener('click', () => {

    if (body.style.backgroundColor == "rgb(60, 179, 113)") {
      body.style.backgroundColor = "#ffa500";
    } else {
      body.style.backgroundColor = "#3cb371";
    };

  });

}
