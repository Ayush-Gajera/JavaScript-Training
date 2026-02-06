function calculate(price) {
    var sum = 0;
    sum = price.reduce(function (acc, num) {
        acc += num;
        return acc;
    }, 0);
    return sum;
}
var price = [1, 2, 3, 4, 5];
var output = calculate(price);
console.log(output);
function addTwoNumber(num1, num2) {
    var sum = num1 + num2;
    return sum > 100 ? "Greter than 100" : sum;
}
var anwer = addTwoNumber(100, 20);
console.log(anwer);
