const number1 = '5'; const number2 = 10;


function sum(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return number1 + number2;
    } else
        throw new Error("Numbers required!");
}

try {
    const result = sum(number1, number2);
    console.log(`The sum is: ${result}`);
} catch (err) {
    console.log(err);
}