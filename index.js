// const div1 = document.getElementById("1");
// const div2 = document.getElementById("2");
// const div3 = document.getElementById("3");
// const div4 = document.getElementById("4");
// const div5 = document.getElementById("5");


var el = function() {
  var divs = document.getElementsByTagName('div');
  var div1 = divs[0];
  var div2 = divs[1];
  var div3 = divs[2];
  var div4 = divs[3];
  var div5 = divs[4];
  el.addEventListener( 'click', (e) => {
    el.target.parentNode.insertBefore(div1, div2);
  }
)};
   // const el= document.querySelectorAll("block");
  // el.addEventListener('click', (e)=> {
  // el.target.insertBefore(div1);
  
  
  // e.target.style.background ='blue';
  // var element = document.querySelector("blocks");
  // var child = document.querySelector("block--red");
  // el.insertBefore(el, child);


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

