import {unit, toNumber, round} from "mathjs";

const mathjsMap = {
    "Fahrenheit": "degF",
    "Celsius": "degC"
}

export default function CKToggleHandler(){
    let tempsOld = Array.from(document.querySelectorAll(".Fahrenheit"));
    let fromUnit = "Fahrenheit"; 
    let toUnit = "Celsius";
    
    if (!(tempsOld.length > 0)){
        tempsOld = Array.from(document.querySelectorAll(".Celsius"));
        fromUnit = "Celsius"; 
        toUnit = "Fahrenheit";    
    }
        
    for(let temp of tempsOld){
        temp.classList.remove(fromUnit);
        temp.classList.add(toUnit);
        if (temp.textContent === fromUnit){
            temp.textContent = toUnit;
        }
        else {
            temp.textContent = round(
                unit(temp.textContent, mathjsMap[fromUnit])
                .toNumber(mathjsMap[toUnit]),
                1
            );
        }
    }
}