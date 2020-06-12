const button = document.querySelector(".select");
const bar = document.querySelector(".menu-bar");

const handleClick = () => {
  bar.classList.remove("hidden");
  bar.classList.add("slider");
};

const init = () => {
  button.addEventListener("click", handleClick);
};

init();
