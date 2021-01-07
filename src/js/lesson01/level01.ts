//you can rename extension to js

(() => {
  const button: HTMLElement = <HTMLElement>document.getElementById('Lesson01Level01Button');
  const body = document.body;

  if (button) {
    button.addEventListener('click', () => {
      const flag: boolean = button.classList.contains('color-1');
      if (flag) {
        body.style.backgroundColor = '#ffa500';
        button.classList.remove('color-1');
      } else {
        body.style.backgroundColor = '#3cb371';
        button.classList.add('color-1');
      }
    })
  }
})()

