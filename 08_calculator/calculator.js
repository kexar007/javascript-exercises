const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function([...args]) {
	return args.reduce((a, b) => a + b,0);
};

const multiply = function([...args]) {
  return args.reduce((a, b) => a * b);
};

const power = function(a,b) {
	return a**b;
};
  
const factorial = function(a) {
  if (a==0) {
    return 1;
  } else {
        let fact=a;
      for (let i = 1; i < a; i++) {
      fact *= i;
      
    
  }return fact;
  }
  
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
