import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level07');

const btnSwitch = document.getElementById('Lesson01Level07Button');
const btnRegister = document.getElementById('Lesson01Level07ButtonRegister');
const btnUnRegister = document.getElementById('Lesson01Level07ButtonUnRegister');

const switchBgColor = new SwitchBgColor().config({colors:['#ffa500', '#3cb371']});

if(btnSwitch && btnRegister && btnUnRegister) {
  btnRegister.addEventListener('click', (_evt) => {
    btnSwitch.addEventListener('click', switchBgColor.next.bind(switchBgColor));
  });

  btnUnRegister.addEventListener('click', (_evt) => {
    btnSwitch.removeEventListener('click', switchBgColor.next.bind(switchBgColor));
  });
}

