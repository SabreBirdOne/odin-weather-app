import { fetchJSONFromVC } from "./fetchers";
import { getWeatherDataFromJSON } from "./jsonProcessors";
import APIKey from "./APIKey";


const city = "Harrisburg";

async function getWeatherData(){
    try {
        const jsonData = await fetchJSONFromVC(APIKey, city);
        const weatherData = await getWeatherDataFromJSON(jsonData);
        console.log(weatherData);
    }
    catch (error){
        alert(error);
    }
}

getWeatherData();