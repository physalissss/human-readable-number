module.exports = function toReadable(number) {
    let result = "";

    if (number >= 0 && number < 10) {
        switch (number) {
            case 0:
                result = "zero";
                break;
            case 1:
                result = "one";
                break;
            case 2:
                result = "two";
                break;
            case 3:
                result = "three";
                break;
            case 4:
                result = "four";
                break;
            case 5:
                result = "five";
                break;
            case 6:
                result = "six";
                break;
            case 7:
                result = "seven";
                break;
            case 8:
                result = "eight";
                break;
            case 9:
                result = "nine";
                break;
        }
    } else if (number >= 10 && number < 20) {
        switch (number) {
            case 10:
                result = "ten";
                break;
            case 11:
                result = "eleven";
                break;
            case 12:
                result = "twelve";
                break;
            case 13:
                result = "thirteen";
                break;
            case 14:
                result = "fourteen";
                break;
            case 15:
                result = "fifteen";
                break;
            case 16:
                result = "sixteen";
                break;
            case 17:
                result = "seventeen";
                break;
            case 18:
                result = "eighteen";
                break;
            case 19:
                result = "nineteen";
                break;
        }
    } else if (number >= 20 && number < 100) {
        const ten = Math.floor(number / 10);
        const one = number % 10;
        let tenString = "";

        switch (ten) {
            case 2:
                tenString = "twenty";
                break;
            case 3:
                tenString = "thirty";
                break;
            case 4:
                tenString = "forty";
                break;
            case 5:
                tenString = "fifty";
                break;
            case 6:
                tenString = "sixty";
                break;
            case 7:
                tenString = "seventy";
                break;
            case 8:
                tenString = "eighty";
                break;
            case 9:
                tenString = "ninety";
                break;
        }

        if (one === 0) {
            result = tenString;
        } else {
            let oneString = "";
            switch (one) {
                case 1:
                    oneString = "one";
                    break;
                case 2:
                    oneString = "two";
                    break;
                case 3:
                    oneString = "three";
                    break;
                case 4:
                    oneString = "four";
                    break;
                case 5:
                    oneString = "five";
                    break;
                case 6:
                    oneString = "six";
                    break;
                case 7:
                    oneString = "seven";
                    break;
                case 8:
                    oneString = "eight";
                    break;
                case 9:
                    oneString = "nine";
                    break;
            }
            result = tenString + " " + oneString;
        }
    } else if (number >= 100 && number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;

        let hundredString = "";
        switch (hundred) {
            case 1:
                hundredString = "one hundred";
                break;
            case 2:
                hundredString = "two hundred";
                break;
            case 3:
                hundredString = "three hundred";
                break;
            case 4:
                hundredString = "four hundred";
                break;
            case 5:
                hundredString = "five hundred";
                break;
            case 6:
                hundredString = "six hundred";
                break;
            case 7:
                hundredString = "seven hundred";
                break;
            case 8:
                hundredString = "eight hundred";
                break;
            case 9:
                hundredString = "nine hundred";
                break;
        }

        if (remainder === 0) {
            result = hundredString;
        } else {
            const remainderString = toReadable(remainder); 
            result = hundredString + " " + remainderString;
        }
    }

    return result;
};