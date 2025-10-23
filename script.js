// Metode 1 : Exporterer funksjon med variabel og hendelse lytter i en fil

import { hamburgerToggle } from "./js/hamburgerToggle.js";
import { themeToggle } from "./js/themeToggle.js";

console.log(hamburgerToggle);

// Metode 2 : Ha variabel og hendelselytter her og exporter kun funksjon

const themeButton = document.querySelector("#themeButton");
console.log(themeButton);

themeButton.addEventListener("click", themeToggle);
