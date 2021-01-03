import ToggleBgColor from "src/js/lib/ToggleBgColor";

//you can rename extension to js
console.log('level01');

const button = document.getElementById('Lesson01Level01Button');
if(button) {
  const toggleBgColor = new ToggleBgColor();
  button.addEventListener('click', (_evt) => {
    toggleBgColor.toggle();
  })
}


