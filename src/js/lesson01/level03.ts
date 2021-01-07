(() => {

  //.Lesson01Level03Button DOMs
  const buttons = document.querySelectorAll<HTMLElement>('.Lesson01Level03Button');

  //early return when does not exist .Lesson01Level02Button DOM
  if (buttons.length === 0) return;

  //colors
  const colors = [
    ["#3cb371", "#ffa500"],
    ["#ffc0cb", "#6495ed"],
    ["#9370db", "#fffaf0"]
  ]

  //mapping index with colors
  const colorMap = new Map<number, string[]>();
  //set colorMap
  buttons.forEach((button, index) => {
    //add data-index to button DOM
    button.dataset.index = String(index);
    //set index & color to colorMap
    colorMap.set(index, colors[index]);
  })

  //body DOM
  const body = document.body;

  //initialize state
  const state = {
    press: false
  }

  //handle click event
  function clickEvent(event: MouseEvent) {
    //get current click DOM
    const currentTarget = event.currentTarget as HTMLElement | null;
    //early return when does not exist current click DOM
    if (!currentTarget) return;

    //get data-index for currentTarget
    const index = currentTarget.dataset.index;
    //early return when does not exist currentTarget
    if (!index) return;

    //get color array for colorMap
    const changeColors = colorMap.get(parseInt(index));
    //early return when does not exist colorMap
    if (!changeColors) return;

    //get prevColor & nextColor
    const [prevColor, nextColor] = changeColors;
    if (state.press) {
      //change body background-color
      body.style.backgroundColor = prevColor;
    } else {
      //change body background-color
      body.style.backgroundColor = nextColor;
    }
    //change state
    state.press = !state.press;
  }

  //register click event for button DOM
  buttons.forEach(n => n.addEventListener('click', clickEvent, false));

})()
