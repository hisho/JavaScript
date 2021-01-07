(() => {

  //.Lesson01Level02Button DOMs
  const buttons = document.querySelectorAll<HTMLElement>('.Lesson01Level02Button');

  //early return when does not exist .Lesson01Level02Button DOM
  if (buttons.length === 0) return;

  //body DOM
  const body = document.body;

  //initialize state
  const state = {
    press: false
  }

  //handle click event
  function clickEvent() {
    if (state.press) {
      //change body background-color
      body.style.backgroundColor = "#3cb371";
    } else {
      //change body background-color
      body.style.backgroundColor = "#ffa500";
    }
    //change state
    state.press = !state.press;
  }

  //register click event for button DOM
  buttons.forEach(n => n.addEventListener('click', clickEvent, false));

})()
