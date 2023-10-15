const palindromes = function (str) {
    str= str.replace(/[^\w\s]/gi, '');
    str= str.toLowerCase();
    str = str.replace(/\s+/g, '');
    console.log(str)
    return str===str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
