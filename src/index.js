module.exports = function toReadable(number) {

    let srtingNumberLength = String(number).length;

    if (srtingNumberLength === 1) {
        return processOneDigit(number);
    } else if (srtingNumberLength === 2) {
        return processTwoDigit(number);
    } else if (srtingNumberLength === 3) {
        return processThreeDigit(number);
    }
}

function processOneDigit(digit) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    return numbers[digit];

}

function processTwoDigit(digits) {
    let lessThanTwenty = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numbers = ("" + digits).split("");

    if (numbers[1] == 0) {
        return dozens[numbers[0] - 1];
    }

    if (numbers[0] != 0) {

        if (digits <= 20) {
            return lessThanTwenty[digits - 11];
        }
        let firstPart = dozens[numbers[0] - 1];

        if (numbers[1] != 0) {
            let secondPart = processOneDigit(numbers[1]);
            return firstPart + " " + secondPart;
        }
        return firstPart;
    }


    return processOneDigit(numbers[1]);
}

function processThreeDigit(digit3) {
    let result = "";
    let numberOFdigits = ("" + digit3).split("");


    if (numberOFdigits.length === 3) {

        if (digit3 % 100 === 0) {
            result = result + processOneDigit(numberOFdigits[0]) + " " + "hundred";
            console.log(result);
        } else {

            result = result + processOneDigit(numberOFdigits[0]) + " " + "hundred";
            console.log(result = result + " " + processTwoDigit(numberOFdigits[1] + numberOFdigits[2]));


            return result;
        }
    }

}