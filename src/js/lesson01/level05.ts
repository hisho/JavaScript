//you can rename extension to js
console.log('level05');

const picker = document.getElementById('Lesson01Level05Color01')

function changeColor(this: HTMLInputElement) {
  document.body.style.backgroundColor = this.value
}

picker!.addEventListener('change', changeColor)
