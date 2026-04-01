import { 
    createLabelInputPair, 
    createButton 
} from "./formComponentFactories";

import getWeatherDataHandler from "./getWeatherDataButtonHandler";

export default function createSearchForm(){
    let form = document.createElement('form');

    const [searchFieldLabel, searchField] = createLabelInputPair(
        "Search for a city", "searchField", "text"
    )

    const getWeatherDataButton = createButton(
        "Get weather data", "getWeatherDataButton"
    );

    // add handler to submitButton here.
    getWeatherDataButton.addEventListener("click", getWeatherDataHandler);

    for (const element of [
        searchFieldLabel,
        searchField,
        getWeatherDataButton
    ]){
        form.appendChild(element);
    }

    return form;
}