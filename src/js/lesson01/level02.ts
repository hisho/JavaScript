import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level02');

const buttons = document.getElementsByClassName('Lesson01Level02Button');
if(buttons.length) {
  const switchBgColor = new SwitchBgColor().config({colors:['#ffa500', '#3cb371']});
  [...buttons].forEach(button => {
    button.addEventListener('click', (_evt) => {
      switchBgColor.next();
    })
  })
}
