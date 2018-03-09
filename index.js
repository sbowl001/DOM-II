const red = document.getElementById("1");
const blue = document.getElementById("2");
const green = document.getElementById("3");
const pink = document.getElementById("4");
const gray = document.getElementById("5");

const el = document.querySelector(".blocks");

el.addEventListener("click", event => {
  console.log("it worked", event);
  theParent = document.getElementById("theParent").parentNode;
  theKid = document.createElement("div");
  theKid.innerHTML = "Worked";
  event.target.insertBefore(theKid, event.target.firstChild);
});



// theParent = document.getElementById("theParent");
// theParent = document.getElementById("1").parentNode
// theKid = document.createElement("div");
// theKid.innerHTML = 'worked?';
// theParent.insertBefore(theKid, theParent.firstChild);

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

