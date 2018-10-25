//listens for button clicks
document.querySelector('.calculator-btns').addEventListener('click', function(event) {
  const display = document.querySelector('.calculator-display');
  let buttonClicked = event.target.innerText;
  let buttonClasses = event.target.classList;

  //checks that clicked button is a number
  if (buttonClasses.contains('numb')) {
    //checks that display is 0 before overriding inner text
    if (display.innerText === "0") {
      display.innerText = buttonClicked;
    //otherwise adds clicked number to display
    } else {
      display.innerText += buttonClicked;
    }
  }

  //checks whether clicked button is an operator (+ - * / =)
  if (buttonClasses.contains('operator')) {
    console.log("operator");
    if (buttonClasses.contains('plus')) {
      console.log("plus");
    }
    if (buttonClasses.contains('min')) {
      console.log("min");
    }
    if (buttonClasses.contains('mult')) {
      console.log("mult");
    }
    if (buttonClasses.contains('div')) {
      console.log("div");
    }
    if (buttonClasses.contains('equals')) {
      console.log("equals");
    }
  }

  //checks whether clicked button is cancel
  if (buttonClasses.contains('dark')) {
    console.log("dark");
    if (buttonClasses.contains('cancel')) {
      console.log("AC");
    }
    if (buttonClasses.contains('plusneg')) {
      console.log("plusneg");
    }
    if (buttonClasses.contains('pcnt')) {
      console.log("pcnt");
    }
  }
});
