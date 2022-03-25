/**
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str){
    return str
    //split the string and save words to array
    .split('-')
    //capitalizes first letters of all array items except the first one
     // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    //joins  ['my', 'Long', 'Word'] into 'myLongWord'
    .join('')
}

/////////////////////////////////////////////////////////

/**
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/
function filterRange(arr, a, b){
    // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

/**
Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
Open a sandbox with tests.
*/




function filterRangeInPlace(arr, a, b){
    arr.filter(item => (a <= arr[i] <= b))
}
