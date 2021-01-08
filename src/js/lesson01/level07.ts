import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level07');

const btnSwitch = document.getElementById('Lesson01Level07Button');
const btnRegister = document.getElementById('Lesson01Level07ButtonRegister');
const btnUnRegister = document.getElementById('Lesson01Level07ButtonUnRegister');

if(btnSwitch && btnRegister && btnUnRegister) {
  const switchBgColor = new SwitchBgColor().config({colors:['#ffa500', '#3cb371']});
  const switchListener = (_evt:MouseEvent) => {switchBgColor.next()};

  btnRegister.addEventListener('click', (_evt) => {
    btnSwitch.addEventListener('click', switchListener);
  });

  btnUnRegister.addEventListener('click', (_evt) => {
    btnSwitch.removeEventListener('click', switchListener);
  });
}

