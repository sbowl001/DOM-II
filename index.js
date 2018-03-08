// const el = document.querySelector('.block--gray');

// el.addEventListener('click', (e)=> {
//   e.target.style.background ='blue';
// })


//animate 

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 750) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}

