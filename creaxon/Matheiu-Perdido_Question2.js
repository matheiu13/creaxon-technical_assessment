function averageArray(arr) {
  var ave = 0;
//   console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    ave += arr[i];
  }
  ave /= arr.length;
  ave = Math.round(ave*100)/100;
  return ave;
}

var array_of_numbers = [1, 3, 9, 15, 90];
var ave = averageArray(array_of_numbers);
console.log("the average of your array is: ", ave);
