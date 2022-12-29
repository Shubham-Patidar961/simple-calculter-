// dome manuplation for calculater //
let btnselact = document.querySelectorAll(".claculeter");
const btnselact2 = Array.from(btnselact);
console.log(btnselact2);

//console.log(btnselact2);
let string = "";
btnselact2.forEach(function (Element) {
  Element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "clear") {
      string = "";
      document.querySelector("#sk").value = string;
      stop;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#sk").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#sk").value = string;
    }
  });
});
