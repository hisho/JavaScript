import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level05');

const button = document.getElementById('Lesson01Level05Button');
const colorInput = <HTMLInputElement>document.getElementById('Lesson01Level05Color01');

if(button && colorInput) {
  const switchBgColor = new SwitchBgColor();
  button.addEventListener('click', (_evt) => {
    switchBgColor.config({colors:[colorInput.value]}).next();
  })
}
