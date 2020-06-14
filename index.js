const button = document.querySelector(".select");
const bar = document.querySelector(".menu-bar");
const numbers = document.querySelectorAll(".item");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

const mains = document.querySelectorAll(".main");

const handleClick = () => {
  if (button.innerText === "Menu Start") {
    bar.classList.add("slider");
    bar.classList.remove("slideIn");
    button.innerText = "Menu Close";
  } else {
    bar.classList.add("slideIn");
    bar.classList.remove("slider");
    button.innerText = "Menu Start";
    addHidden("lalala");
  }
};

const addHidden = (item) => {
  mains.forEach(function (it) {
    if (item !== it.id) {
      it.classList.add("hidden");
    }
  });
};

const numberClick = (event) => {
  const who = event.target.id;
  if (who === "1") {
    one.classList.remove("hidden");
    addHidden("one");
  } else if (who === "2") {
    two.classList.remove("hidden");
    addHidden("two");
  } else if (who === "3") {
    three.classList.remove("hidden");
    addHidden("three");
  } else if (who === "4") {
    four.classList.remove("hidden");
    addHidden("four");
  } else if (who === "5") {
    five.classList.remove("hidden");
    addHidden("five");
  } else {
    bar.classList.add("slideIn");
    bar.classList.remove("slider");
    button.innerText = "Menu Start";
    addHidden("lalala");
  }
};

const init = () => {
  button.addEventListener("click", handleClick);
  numbers.forEach(function (i) {
    i.addEventListener("click", numberClick);
  });
};

init();
