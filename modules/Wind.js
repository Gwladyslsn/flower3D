/* Récuperer les données de vent en temps réel
- recuperer la direction du vent 
- recuperer la vitesse du vent */

class Wind {
  constructor(latitude, longitude) {
    this.lat = latitude;
    this.long = longitude;
    this.init();
  }

  init() {
    console.log("In class Wind", this.lat, this.long);
  }
}

export { Wind };
