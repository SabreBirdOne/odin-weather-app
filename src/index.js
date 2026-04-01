import { fetchJSONFromVC } from "./fetchers";
import { getWeatherDataFromJSON } from "./jsonProcessors";
import APIKey from "./APIKey";


const city = "Harrisburg";
try {
    const jsonData = fetchJSONFromVC(APIKey, city);
    const weatherData = getWeatherDataFromJSON(jsonData);
    console.log(weatherData);
}
catch (error){
    alert(error);
}