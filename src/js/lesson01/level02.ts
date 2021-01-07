//you can rename extension to js
console.log('level02');
(()=>{
  const buttons = document.querySelectorAll('.Lesson01Level02Button');
  const body = document.body

  if(!buttons) return;
  const clickEvent = () => {
    const flag: boolean = body.classList.contains('color-1');
    if (flag) {
      body.style.backgroundColor = '#ffa500';
      body.classList.remove('color-1');
    } else {
      body.style.backgroundColor = '#3cb371';
      body.classList.add('color-1');
    }
  }

  buttons.forEach((element) => {
    element.addEventListener('click', clickEvent)
  })
})()
