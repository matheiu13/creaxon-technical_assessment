function getPositives(arr) {
  var positiveValuesArray = [];
  for (let i = 0; i < arr.length; i++) {
    // i use greater than 0 to check for positive values
    if (arr[i] > 0) {
      positiveValuesArray.push(arr[i]);
    }
  }

  return positiveValuesArray;
}

var array_of_numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var positiveValuesArray = getPositives(array_of_numbers);
console.log("the positives of your array is: ", positiveValuesArray);
