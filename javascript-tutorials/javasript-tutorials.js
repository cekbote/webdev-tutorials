/* Comments */

// In Line Comment

/*
Multi Line Comments
*/

//_____________________________________________________________________________

/* Three ways to declare variables */

var a = "A" // Variables that wil be used throughout the program.
a = 8
let b = "B" // Only used within the scope of where it is declared.
const pii = 3.14 // Normal const.

// Semicolans can be used or not as termination characters, its better to use it.

// It's more or less like Python for operating with numbers and Strings.

//_____________________________________________________________________________

/* Strings */

var x = `'asdasd'` //  `  ` is used to display both ' and " in the string.

// Javascript escape sequences are same as Python, C++.

length_string = x.length

first_letter = x[0];

//_____________________________________________________________________________

/* Functionx */

// Return

function test(a, b, c)
{
    sum = a + b + c;
    return sum;
}

// Void
global_sum = 0;
function test(a, b)
{
    global_sum = a + b;
}

//_____________________________________________________________________________

/* Arrays */

var arr = [];
arr = [1, 2, 3];
arr.push(23); // Same as push_back or append 
arr = arr.pop(); // Same as pop_back
arr = arr.shift(); // Pops the first element
arr.unshift(); // Inserts new elements to the start of the array
arr_nested = [[]];

//_____________________________________________________________________________

/* If-Else */

if (true)
{
    console.log('Such logic much wow.')
}
else if (false)
{
    console.log('Not gonna happen.')
}
else
{
    console.log('Too much expectation.')
}

//_____________________________________________________________________________


/* Switch Case */



