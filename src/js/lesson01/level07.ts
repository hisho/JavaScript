(() => {

  //#Lesson01Level01Button DOM
  const button = document.getElementById('Lesson01Level07Button');

  //early return when does not exist #Lesson01Level01Button DOM
  if (!button) return;

  //body DOM
  const body = document.body;

  const registerButton = document.getElementById('Lesson01Level07ButtonRegister');
  const unRegisterButton = document.getElementById('Lesson01Level07ButtonUnRegister');

  if (!registerButton) return;
  if (!unRegisterButton) return;

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

  registerButton.addEventListener('click', () => {
    //register click event for button DOM
    button.addEventListener('click', clickEvent, false);
  }, false);

  unRegisterButton.addEventListener('click', () => {
    //register click event for button DOM
    button.removeEventListener('click', clickEvent, false);
  }, false);


})()
