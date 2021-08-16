function getValues() {
    
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate data
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if( Number.isInteger(startValue) && Number.isInteger(endValue) ) {
        
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }
    else {

        alert("Error: You must enter integers");

    }

}

function generateNumbers(startValue, endValue) {

    let numbers = [];
    
    for(let i = startValue; i <= endValue; i++) {
        
        if(i % 3 == 0 && i % 5 == 0) {
            numbers.push("fizzbuzz");
            continue;
        }

        if(i % 3 == 0) {
            numbers.push("fizz");
            continue;
        }

        if(i % 5 == 0) {
            numbers.push("buzz");
            continue;
        }

        else {
            numbers.push(i);
        }

    }

    return numbers;

}

function displayNumbers(numbers) {

    let templateRows = "";

    for(var i = 0; i < numbers.length; i++) {

        let number = numbers[i];

        templateRows += `<tr><td>${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;

}