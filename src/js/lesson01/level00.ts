//you can rename extension to js

(() => {
  const button: HTMLElement = <HTMLElement>document.getElementById('color-change__button');
  const body = document.body;

  if (button) {
    const clickEvent = () => {
      const flag: boolean = button.classList.contains('color-1');
      if (flag) {
        body.style.backgroundColor = '#ffa500';
        button.classList.remove('color-1');
      } else {
        body.style.backgroundColor = '#3cb371';
        button.classList.add('color-1');
      }
    }

    button.addEventListener('click', clickEvent)
  }
})()
