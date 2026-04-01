import { fetchJSONFromVC } from "./fetchers";
import { getWeatherDataFromJSON } from "./jsonProcessors";
import fillReport from "./fillWeatherReport";
import APIKey from "./APIKey";

export default async function getWeatherDataHandler(event) {
    event.preventDefault();
    const searchField = document.querySelector("#searchField");
    const searchedCity = searchField.value;

    let weatherData = []; 
    try {
        const jsonData = await fetchJSONFromVC(APIKey, searchedCity);
        weatherData = await getWeatherDataFromJSON(jsonData); 
        fillReport(weatherData);
    }
    catch (error){
        alert(error);
        throw error;
    }
}