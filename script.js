let output;
output = Math.sign(-67);
// Math.sign(x) returns if x is negative(-1), null or positive(1):
output = Math.pow(2, 3);
// Math.pow(x, y) return the value of x to the power of y:
output = Math.sqrt(90);
// returns the sqrt of the number

output = Math.min(34, 67, 89, 765, 5678, 87233, 6543);
output = Math.max(34, 67, 89, 765, 5678, 87233, 6543);

// Math.min() and Math.max() can be used to find the lowest or 
// highest value in a list of arguments:

output = Math.random();
// returns random number between 0 and 1;

output = Math.floor(Math.random() * 10);
// returns random number between 0 and 10
output = Math.floor(Math.random() * 100);

console.log(output);

// min included max excluded
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(200, 500));

// both numbers included 
function getIncludedNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getIncludedNumber(200, 400));
