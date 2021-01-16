//you can rename extension to js
console.log('level03');

const states = [
  {
    colors: ['#3cb371', '#ffa500'],
    idx: 0
  },
  {
    colors: ['#ffc0cb', '#6495ed'],
    idx: 0
  },
  {
    colors: ['#9370db', '#fffaf0'],
    idx: 0
  },
]

function changeBodyBgColor(index: number) {
  const selectStates = states[index]
  const colors = selectStates.colors
  const idx = selectStates.idx

  document.body.style.backgroundColor = colors[idx]
  states[index].idx = selectStates.idx + 1
  if (states[index].idx === colors.length)
    states[index].idx = 0
}

const level3Btns = document.querySelectorAll('.Lesson01Level03Button')

level3Btns
  .forEach((btn, index) => {
    btn.addEventListener('click', () =>  changeBodyBgColor(index))
  })
