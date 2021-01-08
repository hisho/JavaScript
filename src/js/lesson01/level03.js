//you can rename extension to js
const body = document.body;
const btns = [...document.querySelectorAll('.Lesson01Level03Button')];
// console.log(btns);

btns.forEach(btn => {

  console.log(btn[0]);
  btn.addEventListener('click', () => {

    // if()
    // console.log('click');
    // body.style.backgroundColor = "#ffa500";

  });

});

// for (let i = 0; i < btns.length; i++) {
//   console.log(btns[2]);
// }
