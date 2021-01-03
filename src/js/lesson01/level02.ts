import ToggleBgColor from "src/js/lib/ToggleBgColor";

//you can rename extension to js
console.log('level02');

const buttons = document.getElementsByClassName('Lesson01Level02Button');
if(buttons.length) {
  const toggleBgColor = new ToggleBgColor();
  [...buttons].forEach(button => {
    button.addEventListener('click', (_evt) => {
      toggleBgColor.toggle();
    })
  })
}
