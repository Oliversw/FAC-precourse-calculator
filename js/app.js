document.querySelector('.calculator-btns').addEventListener('click', function(event) {
  const display = document.querySelector('.calculator-display');

  //checks that clicked button is a number
  if (event.target.classList.contains('numb'))
    //
    if (display.innerText !== 0) {
      display.innerText = event.target.innerText;
    }
})
