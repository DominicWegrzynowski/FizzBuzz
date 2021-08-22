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

    for (let i = 1; i <= 100; i++) {
        //turinary operator evaluates true false
        let value = (( i % fizzValue === 0 ? "Fizz": "") + (i % buzzValue === 0 ? "Buzz" : "" ) || i );
        returnArray.push(value);
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
    
    for (let i = 0; i < fizzBuzzArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzArray[i]); //add "Fizz", "Buzz", or "FizzBuzz" as a class for styling
        rowCols[0].textContent = fizzBuzzArray[i]; //change the row's column(cell)'s content to the corresponding fizzBuzzArray data

        rowCols[1].classList.add(fizzBuzzArray[i + 1]);
        rowCols[1].textContent = fizzBuzzArray[i + 1];

        rowCols[2].classList.add(fizzBuzzArray[i + 2]);
        rowCols[2].textContent = fizzBuzzArray[i + 2];

        rowCols[3].classList.add(fizzBuzzArray[i + 3]);
        rowCols[3].textContent = fizzBuzzArray[i + 3];

        rowCols[4].classList.add(fizzBuzzArray[i + 4]);
        rowCols[4].textContent = fizzBuzzArray[i + 4];

        tableBody.appendChild(tableRow); //append the actual table with the final tableRow template data
    }
    
}