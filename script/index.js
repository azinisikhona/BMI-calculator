let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 16.0){
        statement.innerText = "Severly Underweight";    
    }else if((BMI > 16.0) && (BMI <= 18.4)){
        statement.innerText = "Underweight";
    }else if((BMI >= 18.5) && (BMI <= 24.9 )){
        statement.innerText = "Normal";
    }else if((BMI >= 25.0) && (BMI <= 29.9)){
        statement.innerText = "Overweight"
    }else if((BMI >=30.0) && (BMI <= 34.9)){
        statement.innerText = "Moderately Obese"
    }else if((BMI >=35.0) && (BMI <=39.9)){
        statement.innerText = "Severely Obese"
    }else{
        statement.innerText = "Morbidly Obese";
    }
});