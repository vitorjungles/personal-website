var year = document.createElement("span");
year.textContent = ` ${new Date().getFullYear()}`;
document.querySelector("#copyright").after(year);