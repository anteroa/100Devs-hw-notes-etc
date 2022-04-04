//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyByEachOther(arr){
    let product = 1
    arr.forEach( num => product *= num);
    alert(product)
}

multiplyByEachOther([10,2,3])