//listens for button clicks
document.querySelector('.calculator-btns').addEventListener('click', function(event) {
  const display = document.querySelector('.calculator-display');
  let buttonClicked = event.target.innerText;

  //checks that clicked button is a number
  if (event.target.classList.contains('numb')) {
    //checks that display is 0 before overriding inner text
    if (display.innerText === "0") {
      display.innerText = buttonClicked;
    //otherwise adds clicked number to display
    } else {
      display.innerText += buttonClicked;
    }
  }

});
