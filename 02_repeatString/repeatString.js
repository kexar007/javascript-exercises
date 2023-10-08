const repeatString = function(word,times) {
    strng="";
    if (times<0) {
        return "ERROR";
    }else{
        for (let i = 0; i < times; i++) {
            strng+=word;
            
        }
        return strng;}
};

// Do not edit below this line
module.exports = repeatString;
