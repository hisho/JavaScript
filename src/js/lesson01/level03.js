//you can rename extension to js
const body = document.body;
const btns = [...document.querySelectorAll('.Lesson01Level03Button')];
// btns = [].slice.call(btns);
console.log(btns);

btns.forEach(btn => {

  console.log(btn[0]);

});
