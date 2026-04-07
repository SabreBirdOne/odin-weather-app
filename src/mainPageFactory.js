import createSearchForm from "./searchFormFactory";
import createCKToggleButton from "./CKToggleButtonFactory";

export default function addMainPageToBody(){
    const body = document.querySelector("body");

    const mainPageHeader = document.createElement("h1");
    mainPageHeader.textContent = "ODIN Weather App";

    const searchForm = createSearchForm();

    const CKToggleButton = createCKToggleButton();

    const weatherReportDiv = document.createElement("div");
    weatherReportDiv.classList.add("weatherReportDiv");

    for (const element of [
        mainPageHeader,
        searchForm,
        CKToggleButton,
        weatherReportDiv
    ]){
        body.appendChild(element);
    }
}