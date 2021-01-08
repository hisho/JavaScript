//you can rename extension to js
console.log('level02');
const button02: NodeListOf<HTMLElement> = document.querySelectorAll('.Lesson01Level02Button');
// const getomi =document.getElementById('exampleID')


// if(button02) {
//   console.log(button02);
//   let nam =0;
//   for (var i = 0; i < button02.length; i++) {

//       button02[i].addEventListener('click', () => {

//           if (nam == 0) {
//             // document.body.style.backgroundColor = '#3cb371';
//             document.body.setAttribute("style", "background-color:#3cb371;");
//             nam = 1;
//           } else {
//             // document.body.style.backgroundColor = '#ffa500';
//             document.body.setAttribute("style", "background-color:#ffa500;");
//             nam = 0;
//           }

//         }, false);

//   }

// }

if(button02) {
  console.log(button02);
  let nam =0;
  button02.forEach((x: HTMLElement) => {
    x.addEventListener('click', () => {

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

  )}

