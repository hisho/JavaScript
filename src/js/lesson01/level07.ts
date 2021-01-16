//you can rename extension to js
console.log('level07');

const level7Btn = document.getElementById('Lesson01Level07Button')
const registerBtn = document.getElementById('Lesson01Level07ButtonRegister')
const unRegisterBtn = document.getElementById('Lesson01Level07ButtonUnRegister')
const colors = ['#3cb371', '#ffa500']
let isRegister = false
let idx = 0

function changeBodyBgColor() {
  if (isRegister) {
    document.body.style.backgroundColor = colors[idx]
    idx++
    if (idx === colors.length)
      idx = 0
  }
}
registerBtn!.addEventListener('click', () => { isRegister = true })
unRegisterBtn!.addEventListener('click', () => { isRegister = false })
level7Btn!.addEventListener('click', changeBodyBgColor)
