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

function createTempRow(headerText, temps, tempUnit) {
    /* temps is an array of arrays, where each inner array 
    is a temperature name-temperature pair.
    */
    let row = document.createElement("div");
    row.classList.add("weatherCardRow");

    let rowHeader = document.createElement("h4");
    rowHeader.textContent = headerText;
    row.appendChild(rowHeader);

    let rowBody = document.createElement("div");
    rowBody.classList.add("weatherCardTempRowBody");

    temps.forEach((element) => {
        let tempItem = document.createElement("div");

        let tempName = document.createElement("p");
        let temp = document.createElement("p");

        tempName.textContent = `${element[0]}:`;
        temp.textContent = `${element[1]}`;
        temp.classList.add(tempUnit);

        tempItem.appendChild(tempName);
        tempItem.appendChild(temp);
        
        rowBody.appendChild(tempItem);
    })
    row.appendChild(rowBody);

    return row;
}

export default function createWeatherCard(cardData){
    let weatherCard = document.createElement("div");
    weatherCard.classList.add("weatherCard");

    const dateP         = createCardRow("Date", [format(cardData.datetime, "MM-dd-yyyy")]);
    const conditionsP   = createCardRow("Conditions", [cardData.conditions]);
    const tempsDiv        = createTempRow(
        "Temperatures",
        [
            ["UNIT", "Fahrenheit"],
            ["AVG", cardData.temp],
            ["MIN", cardData.tempmin],
            ["MAX", cardData.tempmax]
        ],
        "Fahrenheit"
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
        tempsDiv, humidityP, sunP
    ]){
        weatherCard.appendChild(element);
    }

    return weatherCard;
}