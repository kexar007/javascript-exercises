const sumAll = function(a,b) {

    if (((a||b)<0)||(typeof(a)!=="number")||(typeof b !=="number" )) {


        return `ERROR`;
        
    } else {
     function allsum (n){
        return (n*(n+1))/2;
     }  ;
     if (a>b) {
        return allsum(a)-allsum(b-1);
        
     } else {
        return allsum(b)-allsum(a-1);
        
     }
       
    }

};

// Do not edit below this line
module.exports = sumAll;
