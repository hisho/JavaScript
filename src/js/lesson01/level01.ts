import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level01');

const button = document.getElementById('Lesson01Level01Button');
if(button) {
  const switchBgColor = new SwitchBgColor().config({colors:['#ffa500', '#3cb371']});
  button.addEventListener('click', (_evt) => {
    switchBgColor.next();
  })
}


