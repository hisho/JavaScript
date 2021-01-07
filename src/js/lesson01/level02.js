//you can rename extension to js
const body = document.body;
const btns = document.querySelectorAll('.Lesson01Level02Button');

if (btns != null) {

  btns.forEach(btn => {

    btn.addEventListener('click', () => {

      if (body.style.backgroundColor == "rgb(60, 179, 113)") {
        body.style.backgroundColor = "#ffa500";
      } else {
        body.style.backgroundColor = "#3cb371";
      };

    });

  });
}
