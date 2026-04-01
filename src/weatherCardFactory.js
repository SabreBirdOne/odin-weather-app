import {format} from "date-fns";

function createCardRow(headerText, bodyTexts, rowClassList = []){
    // bodyTexts: array of strings following the headerText.
    let row = document.createElement("div");
    row.classList.add("weatherCardRow");

    let rowHeader = document.createElement("h4");
    rowHeader.textContent = headerText;
    row.appendChild(rowHeader);

    let rowBody = document.createElement("div");
    rowBody.classList.add("weatherCardRowBody");

    bodyTexts.forEach((element) => {
        let column = document.createElement("p");
        column.textContent = element;
        rowBody.appendChild(column);
    })
    row.appendChild(rowBody);

    rowClassList.forEach((element) => row.classList.add(element));
    return row;
}

export default function createWeatherCard(cardData){
    let weatherCard = document.createElement("div");
    weatherCard.classList.add("weatherCard");

    console.log(cardData);
    const dateP         = createCardRow("Date", [format(cardData.datetime, "MM-dd-yyyy")]);
    const conditionsP   = createCardRow("Conditions", [cardData.conditions]);
    const tempsP        = createCardRow(
        "Temperatures", 
        [
            "(Fahrenheit)",
            `AVG: ${cardData.temp}`,
            `MIN: ${cardData.tempmax}`,
            `MAX: ${cardData.tempmin}`
        ],
        ["fahrenheit"]
    );
    const humidityP     = createCardRow("Humidity", [`${cardData.humidity} %`]);
    const sunP      = createCardRow(
        "Sun", 
        [
            `Sunrise at: ${cardData.sunrise}`,
            `Sunset at: ${cardData.sunset}`
        ]
    );

    for (const element of [
        dateP, conditionsP,
        tempsP, humidityP, sunP
    ]){
        weatherCard.appendChild(element);
    }

    return weatherCard;
}