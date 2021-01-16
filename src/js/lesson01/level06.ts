(() => {
  const button = document.getElementById('Lesson01Level06Button');

  if (!button) return;

  const body = document.body;

  function clickEvent() {
    body.style.backgroundColor = '#3cb371';
    console.log('色が変わった');
  }

  button.addEventListener('click', clickEvent, {once: true});
})()
