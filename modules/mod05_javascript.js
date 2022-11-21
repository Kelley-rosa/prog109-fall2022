/* Initializing Variables */
var table = prompt('Enter a number from 0-10');   // Unit of table
var operator = 'multiplication';                  // Type of calculation
var i = 1;                                        // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'         // Message

/* Verifying Variables */
while (isNaN(table)){
    table = prompt('INVALID!\n\nEnter a number from 0-10'); 
}

while (table < 0 || table > 10) {
    table = prompt('INVALID!\n\nEnter a number from 0-10'); 
}

/* Calculations For Table */
if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
