import createWeatherCard from "./weatherCardFactory";

export default function fillReport(data){
    let weatherReport = document.querySelector("div.weatherReportDiv");
    console.log(weatherReport);
    while (weatherReport.firstChild){
        weatherReport.removeChild(weatherReport.firstChild);
    }

    for (let index = 0; index < data.length; index++){
        const newWeatherCard = createWeatherCard(data[index]);  
        weatherReport.appendChild(newWeatherCard);  
    }
}