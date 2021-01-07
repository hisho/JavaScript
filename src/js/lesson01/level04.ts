(() => {

  //.Lesson01Level02Button DOMs
  const buttons = document.querySelectorAll<HTMLElement>('.Lesson01Level04Button');

  //early return when does not exist .Lesson01Level02Button DOM
  if (buttons.length === 0) return;

  const colors = ["#3cb371", "#ffa500", "#ffc0cb"];

  //body DOM
  const body = document.body;

  //initialize state
  const state = {
    index: 0
  }

  //handle click event
  function clickEvent() {
    //is state.index over colors length
    const isOverColorsLength = state.index + 1 >= colors.length;

    //change body background-color
    body.style.backgroundColor = colors[state.index];

    //if isOverColorsLength state.index is 0 else state index is current state index + 1
    isOverColorsLength ? state.index = 0 : state.index += 1;

  }

  //register click event for button DOM
  buttons.forEach(n => n.addEventListener('click', clickEvent, false));

})()
