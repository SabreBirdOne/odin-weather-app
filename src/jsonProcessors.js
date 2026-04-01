function getWeatherDataFromJSON(json){
    const data = new Array();
    
    for(let index = 0; index < json.days.length; index++){
        const newDayData = {};

        for (const key of [
            "datetime",
            "conditions",
            "temp",
            "tempmax",
            "tempmin",
            "humidity",
            "sunrise",
            "sunset"
        ]){
            newDayData[key] = json.days[index][key]
        }
        data.push(newDayData);
    }
    return data;
}

export {
    getWeatherDataFromJSON
}
