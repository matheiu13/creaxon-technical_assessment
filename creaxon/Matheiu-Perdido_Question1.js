function sumArray(arr) {
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(array_of_numbers);
console.log("the sum of your array is: ", sum);
