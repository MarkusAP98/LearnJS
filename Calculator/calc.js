

let operator = ''

function numbers(value) {
var inputNum = document.getElementById("inputNum");
var currentValue = inputNum.innerHTML 

  // Handle the clear button separately
if (value === "C") {
    inputNum.innerHTML = " ";
    return;
}

  // If the current value is "0", replace it with the new value
else if (currentValue === " ") {
    inputNum.innerHTML = value;
}
else if (value === '+' || value === '-' || value === '*' || value === '/'){
		operator = value;
	}

else {
    
    inputNum.innerHTML += value ;}
}

