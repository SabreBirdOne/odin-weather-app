export default function addMainPageToBody(){
    const body = document.querySelector("body");

    const mainPageHeader = document.createElement("h1");
    mainPageHeader.textContent = "ODIN Weather App";

    const searchForm = document.createElement("form"); // replace with factory call later

    const CKToggleButton = document.createElement("button") // replace with factory call later

    const weatherReportDiv = document.createElement("div");
    weatherReportDiv.classList.add("weatherReportDiv");

    for (const element of [
        mainPageHeader,
        searchForm,
        CKToggleButton,
        weatherReportDiv
    ]){
        console.log(element);
        body.appendChild(element);
    }
}