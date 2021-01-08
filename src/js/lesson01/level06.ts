import SwitchBgColor from "src/js/lib/SwitchBgColor";

//you can rename extension to js
console.log('level06');

const button = document.getElementById('Lesson01Level06Button');

if(button) {
  const switchBgColor = new SwitchBgColor().config({colors:['#3cb371']});

  button.addEventListener('click', {
    handleEvent(_evt) {
      switchBgColor.next();
      _evt.currentTarget?.removeEventListener('click', this);
      console.log('色が変わった！');
    }
  });
}
