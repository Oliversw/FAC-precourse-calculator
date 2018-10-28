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
    operatorPress();
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
  if (display.innerText === "0") {
    display.innerText = buttonClicked;
  //otherwise adds clicked number to display
  } else {
    display.innerText += buttonClicked;
  }
}

const operatorPress = function() {
  calcArr.push(parseFloat(document.querySelector('.calculator-display').innerText));
  if (calcArr.length === 3) {
    switch (true) {
      case calcArr[1] === "+":
        console.log("switch add, baby");
        break;
      case calcArr[1] === "-":
        console.log("switch min, baby");
        break;
      case calcArr[1] === "*":
        console.log("switch *, baby");
        break;
      case calcArr[1] === "/":
        console.log("switch %, baby");
        break;
    }
  }
}

const plusOrMinusPress = function() {

}

const multOrDivPress = function() {

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
