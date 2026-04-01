import {format} from "date-fns";

function createCardRow(headerText, bodyText, bodyClassList = []){
    let row = document.createElement("div");
    row.classList.add("weatherCardRow");

    let rowHeader = document.createElement("h4");
    rowHeader.textContent = headerText;

    let rowBody = document.createElement("p");
    rowBody.textContent = bodyText;
    bodyClassList.forEach((element) => rowBody.classList.add(element));

    for (const element of [rowHeader, rowBody]){
        row.appendChild(element);
    }
    return row;
}

export default function createWeatherCard(cardData){
    let weatherCard = document.createElement("div");
    weatherCard.classList.add("weatherCard");

    console.log(cardData);
    const dateP         = createCardRow("Date", format(cardData.datetime, "MM-dd-yyyy"));
    const conditionsP   = createCardRow("Conditions", cardData.conditions);
    const tempP         = createCardRow("Average Temperature", `${cardData.temp} F`, ["fahrenheit"]);
    const tempmaxP      = createCardRow("Highest", `${cardData.tempmax} F`, ["fahrenheit"]);
    const tempminP      = createCardRow("Lowest", `${cardData.tempmin} F`, ["fahrenheit"]);
    const humidityP     = createCardRow("Humidity", `${cardData.humidity} %`);
    const sunriseP      = createCardRow("Sunrise at", cardData.sunrise);
    const sunsetP       = createCardRow("Sunset at", cardData.sunset);

    for (const element of [
        dateP, conditionsP,
        tempP, tempmaxP, tempminP,
        humidityP, sunriseP, sunsetP
    ]){
        weatherCard.appendChild(element);
    }

    return weatherCard;
}