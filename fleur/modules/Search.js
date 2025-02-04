const moduleName = "Search";

/* SearchBar
- récupère la ville renseigné par le visiteur : ok
- à partir du nom de ville, va aller trouver la latitude et 
longitude correspondantes : ok
- Si la ville renseignée n'est pas dans la base, elle doit indiquer 
l'erreur au visiteur 

BONUS : 
- Pourrait proposer des suggestions de ville au moment de la saisie (autocompletion)
- Enregistrer les dernières recherches
*/

import { Wind } from "./Wind.js"; // import fichier Wind et pas dans App pour soucis de chronologie

class Search {
  constructor() {
    this.input = document.querySelector(".js-search-input");
    this.form = document.querySelector(".js-search-form");
    this.cities = [];
    this.init();
  }

  init() {
    // Methode pour lancer les fonctions
    this.getCities();
    this.watchUserInput();
  }

  watchUserInput() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.getLatLong();
    });
  }

  getLatLong() {
    const name = this.input.value;
    const cityData = this.getCityData(name);
    if (cityData) {
      const lat = cityData.lat;
      const long = cityData.lng;
      new Wind(lat, long); //appel à la classe du fichier Wind grace à l'import en debut de fichier
    } else {
      alert("La ville renseigné n'existe pas");
      console.log("alerte");
    }
  }

  getCities() {
    //charger mes données => fetc
    fetch("../data/french-cities.json")
      .then((response) => response.json())
      .then((data) => {
        this.cities = data;
      });
  }

  getCityData(cityName) {
    const cityNameLower = cityName.toLowerCase();
    let cityData = {};
    for (let i = 0; i < this.cities.length; i++) {
      const cityNameInDataLower = this.cities[i].city.toLowerCase();
      if (cityNameInDataLower === cityNameLower) {
        cityData = this.cities[i];
        break;
      }
    }
    return cityData;
  }
}

export { Search };
