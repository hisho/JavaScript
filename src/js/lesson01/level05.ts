(() => {

  //#Lesson01Level05Button DOM
  const button = document.getElementById('Lesson01Level05Button');

  //early return when does not exist #Lesson01Level05Button DOM
  if (!button) return;

  //#Lesson01Level05Color01 DOM
  const input = document.getElementById('Lesson01Level05Color01') as HTMLInputElement | null;

  //early return when does not exist #Lesson01Level05Color01 DOM
  if (!input) return;

  //body DOM
  const body = document.body;


  //handle click event
  function clickEvent() {

    //early return when does not exist #Lesson01Level05Color01 DOM
    if (!input) return;
    //change background-color
    body.style.backgroundColor = input.value;

  }

  //register click event for button DOM
  button.addEventListener('click', clickEvent, false);

})()
