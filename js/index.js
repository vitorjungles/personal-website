const year = document.createElement("span");

const header = document.querySelector("header");

year.textContent = ` ${new Date().getFullYear()}`;
document.querySelector("#copyright").after(year);

let position = window.scrollY;

if (position === 0) {
  header.setAttribute("class", "no-translate3d");
};

document.addEventListener("scroll", () => {
  if (position !== window.scrollY) {
    if (position > window.scrollY && header.classList[0] !== "no-translate3d") {
      header.setAttribute("class", "no-translate3d");
    } else if (position < window.scrollY && header.classList[0] !== "translate3d") {
      header.setAttribute("class", "translate3d");
    };
  };

  position = window.scrollY;
});
