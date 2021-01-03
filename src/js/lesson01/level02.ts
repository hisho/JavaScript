//you can rename extension to js
console.log('level02');

(() => {

  const buttons = document.querySelectorAll<HTMLElement>('.Lesson01Level02Button');
  if (buttons.length === 0) return;

  const body = document.body;

  const state = {
    press: false
  }

  function clickEvent() {
    console.log('click')
    if (state.press) {
      body.style.backgroundColor = "#ffa500";
      state.press = !state.press;
    } else {
      body.style.backgroundColor = "#3cb371";
      state.press = !state.press;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', clickEvent, false);
  })

})()
