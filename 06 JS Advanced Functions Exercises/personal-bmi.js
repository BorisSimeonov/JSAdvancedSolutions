function personalBMI(name, age, weight, height) {
    let bmiObject = {};
    bmiObject.name = name;
    bmiObject.personalInfo = {
        age: Math.round(age),
        weight: Math.round(weight),
        height: Math.round(height)
    };
    bmiObject.BMI = Math.round(
        weight / Math.pow(height / 100, 2));
    if (bmiObject.BMI < 18.5) {
        bmiObject.status = 'underweight';
    } else if (bmiObject.BMI < 25) {
        bmiObject.status = 'normal';
    } else if (bmiObject.BMI < 30) {
        bmiObject.status = 'overweight';
    } else if (bmiObject.BMI >= 30) {
        bmiObject.status = 'obese';
    }

    if (bmiObject.status === 'obese') {
        bmiObject.recommendation = 'admission required';
    }
    return bmiObject;
}
