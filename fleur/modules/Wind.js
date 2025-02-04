/* Récuperer les données de vent en temps réel
- recuperer la direction du vent 
- recuperer la vitesse du vent 
- BONUS : actualise les données toutes les 15 minutes

URL : https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3522&current=wind_speed_10m,wind_direction_10m&timezone=Europe%2FLondon
*/

class Wind {
  constructor(latitude, longitude) {
    this.lat = latitude;
    this.long = longitude;
    this.url = "";
    this.init();
  }

  init() {
    this.buildUrl();
    this.getWindData();
    console.log("In class Wind", this.lat, this.long);
  }

  buildUrl() {
    const base = "https://api.open-meteo.com/v1/forecast";
    const requiredLatitude = "latitude=" + this.lat;
    const requiredLongitude = "&longitude=" + this.long;

    const params = ["wind_speed_10m", "wind_direction_10m"];
    const paramsStringList = params.join(",");

    this.url = `${base}?${requiredLatitude}&${requiredLongitude}&current=${paramsStringList}`;
  }

  getWindData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      });
  }
}

export { Wind };
