const fibonacci = function(num) {
    num = Number(num);
    if (num<=0) {
        return "OOPS";
        
    } else {

        let prev2=0;
        let prev1 =1;
        let i =1;
        let current=1;
        
        while (i<num) {
           
            current=prev1+prev2;
            prev2=prev1;
            prev1=current;
            i++;
            
            
        }
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
