import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level04');

const colorPallet = [
  ['#ffc0cb', '#3cb371', '#ffa500']
];

const buttons = document.getElementsByClassName('Lesson01Level04Button');
if(buttons.length) {
  [...buttons].forEach((button, index) => {
    const switchBgColor = new SwitchBgColor().config({colors: colorPallet[index]});

    button.addEventListener('click', (_evt) => {
      switchBgColor.next();
    })
  })
}
