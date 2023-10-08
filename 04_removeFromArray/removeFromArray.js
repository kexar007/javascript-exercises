const removeFromArray = function(marray,...args) {

   let result =[];
   let j=0;
  args.forEach(x => {
    
    function remover(value,index,arr){
        if (x===value) {
            arr.splice(index,1)
        }


    };



    let r = marray.filter(remover);




  });
  console.log(args)
  console.log(marray)
  return marray;

};

// Do not edit below this line
module.exports = removeFromArray;
