import { showDailyForecast } from "./weather";

let forecastData = [];

function getForecastData(){
    return forecastData;
}

async function loadForecastData(zipcode){
    await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${zipcode}&days=3`,
      { mode: "cors" },
    )
    .then((response) => response.json())
    .then((data) =>{
      console.log(data);
      forecastData = data.forecast.forecastday;
      showDailyForecast();
    })
  }


  export {
    getForecastData,
    loadForecastData
  }
