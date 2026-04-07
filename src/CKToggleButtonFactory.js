import CKToggleHandler from "./CKToggleHandler";

export default function createCKToggleButton (){
    let button = document.createElement("button");
    button.textContent = "Toggle Celsius/Fahrenheit";
    // Add event handler here
    button.addEventListener("click", CKToggleHandler);

    return button;
}