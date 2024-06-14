import { loadForecastData } from "./getData";
import { showHourlyForecast, showThreeDayForecast } from "./weather";

const zipcodeForm = document.querySelector("#zipcode");
const zipcodeRegExp = /\d{5}/;
const zipError = document.querySelector("#zip-error");

function validateZip(){
    let isValid = zipcodeForm.value.length === 0 || zipcodeRegExp.test(zipcodeForm.value);
    if(isValid){
        
        // add error message
        zipError.textContent = "";
        zipError.classList.remove("active")
        return true;
    } else {
        zipcodeForm.classList.add("active");
        zipError.textContent = "Zipcode format is 12345";
        return false;
    }
}

function setButtonFunctions(){
    zipcodeForm.addEventListener("input", ()=> {
        validateZip();
    })
    document.querySelector("#Zipcode-Form").addEventListener("submit", (event) => {
      event.preventDefault();
      // add form validation
      if (zipcodeForm.validity.valid && validateZip()) {
        let zipcode = document.querySelector("#zipcode").value;
        // update weather remove all display and display 3days
        loadForecastData(zipcode);
      } else {
        console.log("Invalid zip")
      }
    });
    document.querySelector("#showThreeDayForecast").addEventListener("click", (event) =>{
        event.preventDefault();
        showThreeDayForecast();
    })
      
    document.querySelectorAll(".day").forEach((day, index) =>{
        day.addEventListener("click", (event) =>{
            showHourlyForecast(index);
        })
    })
}

export{
    setButtonFunctions
}