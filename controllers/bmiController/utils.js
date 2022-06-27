const {BMI_CATEGORY,BMI_HEALTH_RISK} = require("../../constants");
function calculateBMI(weight, height){
    height = height/100; // convert in meter
    return weight/height;
}

function calculateBMICategory(bmi){
    if(bmi<=18){
        return 0;
    }else if(bmi<=24.9){
        return 1;
    }else if(bmi<=29.9){
        return 2;
    }else if(bmi<=34.9){
        return 3;
    }else if(bmi<=39.9){
        return 4;
    }else{
        return 5;
    }
}

function performCalculation(data){
    let countOfOverweight = 0;
    let startTime = Date.now();
    console.log("startTime : " , startTime)
    data.map(el=>{
        let bmi = calculateBMI(el.WeightKg,el.HeightCm)
        let bmiCategory = calculateBMICategory(bmi);
        // console.log(bmi," ",bmiCategory);
        if(bmiCategory==2)
        {
            countOfOverweight++;
        }
        el["bmiCategory"] = BMI_CATEGORY[bmiCategory];
        el["healthRisk"] = BMI_HEALTH_RISK[bmiCategory];
        
    });
    let endTime = Date.now();
    console.log("endTime : " ,endTime)
    console.log((endTime - startTime)/1000)
   ;
    return {data, "overWeightCount": countOfOverweight};
}

module.exports = performCalculation;