//you can rename extension to js

(() => {
  const button = document.getElementById('color-change__button');
  const body = document.body;

  if (!button) return
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
  button.addEventListener('click', clickEvent)
})()
