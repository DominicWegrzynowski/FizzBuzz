function getValues() {
    let fizzValue = parseInt(document.getElementById("fizzValue").value);
    let buzzValue = parseInt(document.getElementById("buzzValue").value);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let fizzBuzzArray = generateData(fizzValue, buzzValue);
        displayData(fizzBuzzArray);

    } else {
        alert("You must enter an integer");
    }

}

function generateData(fizzValue, buzzValue) {
    
    let returnArray = [];
    
    for(var i = 1; i <= 100; i++) {

        if(i % fizzValue === 0 && i % buzzValue === 0) {

            returnArray.push("FizzBuzz");

        }
        else if(i % fizzValue === 0) {

            returnArray.push("Fizz");

        }
        else if(i % buzzValue === 0) {

            returnArray.push("Buzz");

        }
        else {

            returnArray.push(i);

        }

    }

    return returnArray;
}

function displayData(fizzBuzzArray) {
    
    //get the table body element from the page
    let tableBody = document.getElementById("results");
    //get the template itsself
    let templateRow = document.getElementById("fizzBuzzTemplate");
    //clear table
    tableBody.innerHTML = "";
    
    for (let index = 0; index < fizzBuzzArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        
        //grab just the tds and put into an array
        let rowCols = tableRow.querySelector("td");
        rowCols[0].textContent = fizzBuzzArray[i];
        
    }
    
}