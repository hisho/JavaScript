//you can rename extension to js
console.log('level04');

const getbutton = document.querySelector('.Lesson01Level04Button');
if (getbutton) {
  console.log(getbutton);
  let num = 0;

  getbutton.addEventListener('click', () => {


    if (num === 0) {
      // document.body.style.backgroundColor = '#3cb371';
      document.body.setAttribute("style", "background-color:#3cb371;");
      num = 1;
    } else if (num === 1) {
      // document.body.style.backgroundColor = '#ffa500';
      document.body.setAttribute("style", "background-color:#ffa500;");
      num = 2;
    } else {
      // document.body.style.backgroundColor = '#ffa500';
      document.body.setAttribute("style", "background-color:#ffc0cb;");
      num = 0;
    }

  }, false);


}
