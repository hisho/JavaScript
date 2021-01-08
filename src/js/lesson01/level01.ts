//you can rename extension to js
console.log('level01');

const button01 = document.getElementById('Lesson01Level01Button');
// const getomi =document.getElementById('exampleID')

if(button01) {
  console.log(button01);
  var nam = 0;

  button01.addEventListener('click', () => {
  console.log(nam);

    if (nam == 0) {
      // document.body.style.backgroundColor = '#3cb371';
      document.body.setAttribute("style", "background-color:#3cb371;");
      nam = 1;
    } else {
      // document.body.style.backgroundColor = '#ffa500';
      document.body.setAttribute("style", "background-color:#ffa500;");
      nam = 0;
    }

  }, false);

}

