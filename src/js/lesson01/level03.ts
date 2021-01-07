import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level03');

const colorPallet = [
  ['#3cb371', '#ffa500'],
  ['#ffc0cb', '#6495ed'],
  ['#9370db', '#fffaf0'],
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
