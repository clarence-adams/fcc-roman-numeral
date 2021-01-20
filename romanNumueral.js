function convertToRoman(num) {
    // initializes an object with numbers as keys and their roman numeral values as values
    let romanNums = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM"
    }

    // splits user provided number
    num = String(num).split("");
    // initializes variables that will store decimal values and new roman numeral values
    let newNumDec = [];
    let newNumRom = [];
    // helper function that adds zeroes onto the end of a number according to their decimal place value
    function toDecimalPlace(num, place) {
        let zeros = [];

        for (let i = 0; i < place - 1; i++) {
            zeros.push("0");
        }

        zeros = zeros.join("");
        return num.concat(zeros);
    };
    // iterates through num and applies the toDecimalPlace function
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 0) {
            continue;
        } else {
            newNumDec.push(toDecimalPlace(num[i], num.length - i));
        }
    }
    // iterates through each number in newNumDec and populates newNumRom array with roman numeral values
    newNumRom = newNumDec.map(element => {
        return romanNums[element];
    }).join("");
    
    return newNumRom;
}

convertToRoman(97);