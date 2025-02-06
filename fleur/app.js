import { Search } from "./modules/Search.js";
import { Flower } from "./modules/Flower.js";

/*on créé un objet "app" dans la variable WINDOW qui va permettre d'enregistrer
les info necessaire à l'animation */
window.app = {
  resertAnimation: false,
  city: "",
  windDirection: "",
  windSpeed: "",
};

new Search();
new Flower();
