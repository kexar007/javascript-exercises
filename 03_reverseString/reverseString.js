const reverseString = function(string) {
    let reverse = "";
    let length=string.length;
    for (let i = length; i >=0; i--) {
        reverse+= string.charAt(i);
       
        
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
