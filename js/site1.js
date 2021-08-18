function getValues() {
    
    let fizzValue = parseInt(document.getElementById("fizzValue").value);
    let buzzValue = parseInt(document.getElementById("buzzValue").value);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let fizzBuzzArray = generateDataC(fizzValue, buzzValue);
        displayData(fizzBuzzArray);

    } else {

        alert("You must enter an integer");

    }

}

function generateDataA(fizzValue, buzzValue) {
    
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

function generateDataB(fizzValue, buzzValue) {

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;
    
    for (let i = 1; i <= 100; i++) {        
        Fizz = i % fizzValue === 0;
        Buzz = i % buzzValue === 0;

        switch(true) {
            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");
                break;
            } 
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }   
    }
    return returnArray;
}

function generateDataC(fizzValue, buzzValue) {

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

        rowCols[0].classList.add(fizzBuzzArray[i]);
        rowCols[0].textContent = fizzBuzzArray[i];

        rowCols[1].classList.add(fizzBuzzArray[i + 1]);
        rowCols[1].textContent = fizzBuzzArray[i + 1];

        rowCols[2].classList.add(fizzBuzzArray[i + 2]);
        rowCols[2].textContent = fizzBuzzArray[i + 2];

        rowCols[3].classList.add(fizzBuzzArray[i + 3]);
        rowCols[3].textContent = fizzBuzzArray[i + 3];

        rowCols[4].classList.add(fizzBuzzArray[i + 4]);
        rowCols[4].textContent = fizzBuzzArray[i + 4];

        tableBody.appendChild(tableRow);
    }
    
}