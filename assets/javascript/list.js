const button = document.getElementById("btn");
const list = document.getElementById("list");

list.style.display = "flex";

function myFunction(x) {
      if (x.matches) { // If media query matches
      list.style.display = "none"
      button.style.display = "flex"
        //Function Drop Down Menu
      button.addEventListener('click', function(event) {
            if (list.style.display == "none") {
                  list.style.display = "flex";
                  }
            else {
                  list.style.display = "none";
                  }
            });
      } else {
        list.style.display = "flex"
        button.style.display = "none"
      }
    }
    
    var x = window.matchMedia("(min-width: 426px) and (max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addEventListener(myFunction) // Attach listener function on state changes

    function myFunction2(y) {
      if (y.matches) { // If media query matches
      list.style.display = "none"
      button.style.display = "flex"
        //Function Drop Down Menu
      button.addEventListener('click', function(event) {
            if (list.style.display == "none") {
                  list.style.display = "flex";
                  }
            else {
                  list.style.display = "none";
                  }
            });
      } else {
        list.style.display = "flex"
        button.style.display = "none"
      }
    }
    
    var y = window.matchMedia("(min-width: 320px) and (max-width: 425px)")
    myFunction2(y) // Call listener function at run time
    y.addEventListener(myFunction2) // Attach listener function on state changes