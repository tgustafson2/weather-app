import { getForecastData } from "./getData";

function showDailyForecast(){
    let forecastData = getForecastData();
    document.querySelector('#temp1').textContent = forecastData[0].day.avgtemp_f;
    document.querySelector('#condition1').textContent = forecastData[0].day.condition.text;
    document.querySelector('#icon1').src = `https:${forecastData[0].day.condition.icon}`;
    document.querySelector('#temp2').textContent = forecastData[1].day.avgtemp_f;
    document.querySelector('#condition2').textContent = forecastData[1].day.condition.text;
    document.querySelector('#icon2').src = `https:${forecastData[1].day.condition.icon}`;
    document.querySelector('#temp3').textContent = forecastData[1].day.avgtemp_f;
    document.querySelector('#condition3').textContent = forecastData[1].day.condition.text;
    document.querySelector('#icon3').src = `https:${forecastData[1].day.condition.icon}`;
  
    document.querySelector("#forecast").style.display = "block";
    document.querySelector("#hourlyForecast").style.display = "none";
  }
  
  function showHourlyForecast(day){
    let dayData = getForecastData()[day];
    document.querySelector("#hourlyTitle").textContent = `24-Hour Forecast for ${dayData.date}`;
    let hourlyGrid = document.querySelector("#hourlyGrid");
    hourlyGrid.innerHTML = "";
  
    dayData.hour.forEach(hourData =>{
      let hourDiv = document.createElement("div");
      hourDiv.classList.add("hour");
      console.log(hourData.time_epoch);
      let date = new Date(parseInt(hourData.time_epoch)*1000);
      hourDiv.innerHTML = `<h4>${date.toLocaleTimeString()}</h4>
                           <img src="${"https:"+hourData.condition.icon}" alt="Condition Icon" class="icon">
                           <p>Temp: ${hourData.temp_f + "°F" } </p>
                           <p>Condition: ${hourData.condition.text}</p>`;
      hourlyGrid.appendChild(hourDiv);
    });
  
    document.querySelector("#forecast").style.display = "none";
    document.querySelector("#hourlyForecast").style.display = "block";
  }
  
  function showThreeDayForecast(){
    document.querySelector("#forecast").style.display = "block";
    document.querySelector("#hourlyForecast").style.display = "none";
  }

  export{
    showDailyForecast,
    showThreeDayForecast,
    showHourlyForecast
  }
  
  