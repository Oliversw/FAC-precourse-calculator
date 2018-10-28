//TODO: find alternative to using global variables
let total = 0;
let calcArr = [];

//listens for button clicks
document.querySelector('.calculator-btns').addEventListener('click', function(event) {

  let buttonClasses = event.target.classList;

  //checks that clicked button is a number
  if (buttonClasses.contains('numb')) {
    numberPress();
  }

  //checks whether clicked button is an operator (+ - * / =)
  if (buttonClasses.contains('operator')) {
    let thisButton = event.target.innerText;
    operatorPress(thisButton);
  }
    if (buttonClasses.contains('equals')) {
      console.log("equals");
    }

  //checks whether clicked button is a cancel button
  if (buttonClasses.contains('clear-buttons')) {
    if (buttonClasses.contains('clear-all')) {
      clearAll();
    }
    if (buttonClasses.contains('clear')) {
      clear();
    }
    if (buttonClasses.contains('del')) {
      del();
    }
  }
});

const numberPress = function() {
  const display = document.querySelector('.calculator-display');
  let buttonClicked = event.target.innerText;
  //checks that display is 0, or that an operator has been pressed, before overriding inner text
  if (display.innerText === "0" || calcArr.length > 0) {
    display.innerText = buttonClicked;
  //otherwise adds clicked number to display
  } else {
    display.innerText += buttonClicked;
  }
}

const operatorPress = function(thisButton) {
  if (calcArr.length < 2) {
    calcArr.push(parseFloat(document.querySelector('.calculator-display').innerText));
    calcArr.push(thisButton);
    console.log(calcArr + "#1")
  } else if (calcArr.length < 3) {
    calcArr.push(parseFloat(document.querySelector('.calculator-display').innerText));
    switch (true) {
      case calcArr[1] === "+":
        total = addCalc();
        break;
      case calcArr[1] === "-":
        total = minCalc();
        break;
      case calcArr[1] === "*":
        total = multCalc();
        break;
      case calcArr[1] === "/":
        total = divCalc();
        break;
    }
    calcArr = [total];
    document.querySelector('.calculator-display').innerText = total.toString();
    console.log(calcArr + "#3")
  }
  console.log(calcArr + "#4");
}

const addCalc = function() {
  return calcArr[0] + calcArr[2];
}

const minCalc = function() {
  return calcArr[0] - calcArr[2];
}

const multCalc = function() {
  return calcArr[0] * calcArr[2];
}

const divCalc = function() {
  return calcArr[0] / calcArr[2];
}

const equalsPress = function() {

}


//clears everything
const clearAll = function() {
  document.querySelector('.calculator-display').innerText = "0";
  let totalCalc = [];
  let lastNum = "";
}

//clears the current display
const clear = function() {
  document.querySelector('.calculator-display').innerText = "0";
}

//deletes a single number
const del = function() {
  let display = document.querySelector('.calculator-display').innerText;
  //only runs when display doesn't start with 0
  if (display !== "0") {
    document.querySelector('.calculator-display').innerText = display.substring(0, display.length-1);
    if (display.length < 2) {
      //returns the display to '0' when empty
      document.querySelector('.calculator-display').innerText = "0";
    }
  }
}
