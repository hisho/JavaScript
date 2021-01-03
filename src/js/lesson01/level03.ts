import ToggleBgColor from "src/js/lib/ToggleBgColor";

//you can rename extension to js
console.log('level03');

const colorPallet = [
  {iniColor:'#3cb371', altColor:'#ffa500'},
  {iniColor:'#ffc0cb', altColor:'#6495ed'},
  {iniColor:'#9370db', altColor:'#fffaf0'},
];

const buttons = document.getElementsByClassName('Lesson01Level03Button');
if(buttons.length) {
  [...buttons].forEach((button, index) => {
    const toggleBgColor = new ToggleBgColor({
      iniColor: colorPallet[index].iniColor,
      altColor: colorPallet[index].altColor,
    });
    const buttonParent = <HTMLElement>document.body;

    if(buttonParent) {
      button.addEventListener('click', (_evt) => {
        toggleBgColor.toggle();
      })
    }
  })
}
