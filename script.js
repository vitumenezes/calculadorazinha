// catches every buttons
const buttons = document.querySelectorAll('button');

// select the display
const display = document.querySelector('.calc-display')

// event to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calc);
});

// auxiliary function to insert values on the display
function insert_in_display(value) {
    display.innerHTML = value
}

// main fucntion
function calc(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // if there is something, do the calculation
        if (display.textContent !== '') {
            try {
                let value = parseFloat(eval(display.textContent).toFixed(4));
                insert_in_display(value);
            } catch {
                insert_in_display('error');
            }
        }
    } else if (clickedButtonValue === 'C') {
        // cleans the display
        insert_in_display('0');
    } else if (clickedButtonValue === 'CE') {
        // cleans the last entry
        if (display.textContent.length == 1 || display.textContent === 'error') {
            insert_in_display('0');
        } else {
            insert_in_display(display.textContent.slice(0, -1))
        }
    } else {
        // inserts the clicked button
        if (display.textContent === '0' || display.textContent === 'error') {
            insert_in_display('');
        }
        display.innerHTML += clickedButtonValue;
    }
}