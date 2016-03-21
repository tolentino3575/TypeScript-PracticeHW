// var number: number;
// var otherNumber: number;
//
// number = parseInt(prompt('enter a #.'));
// otherNumber = parseInt(prompt('enter another #.'));
// var sum = number + otherNumber;
// alert('the sum is: ' + sum);
var findSum = function (first, second) {
    var sum = first + second;
    alert("The sum is: " + sum);
};
var number = parseInt(prompt("enter a #."));
var otherNumber = parseInt(prompt("enter another #."));
findSum(number, otherNumber);
