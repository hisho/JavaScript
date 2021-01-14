//you can rename extension to js
console.log('level05');

const getbutton05 = document.getElementById('Lesson01Level05Button');
if (getbutton05) {
  console.log(getbutton05);

  const getcolor = document.getElementById('Lesson01Level05Color01');
  console.log(getcolor);

  getcolor.addEventListener('change', () => {
    console.log(getcolor.value)
  })

  getbutton05.addEventListener('click', () => {
    document.body.setAttribute("style", "background-color:" + (getcolor.value) + ";");

  }, false);




}
