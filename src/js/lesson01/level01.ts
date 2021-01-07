(() => {

  //#Lesson01Level01Button DOM
  const button = document.getElementById('Lesson01Level01Button');

  //early return when does not exist #Lesson01Level01Button DOM
  if (!button) return;

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
  button.addEventListener('click', clickEvent, false);

})()
