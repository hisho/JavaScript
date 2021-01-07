import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level03');

const colorPallet = [
  ['#ffa500', '#3cb371'],
  ['#6495ed', '#ffc0cb'],
  ['#fffaf0', '#9370db'],
];

const buttons = document.getElementsByClassName('Lesson01Level03Button');
if(buttons.length) {
  [...buttons].forEach((button, index) => {
    const switchBgColor = new SwitchBgColor({
      colors: colorPallet[index]
    });

    button.addEventListener('click', (_evt) => {
      switchBgColor.next();
    })
  })
}
