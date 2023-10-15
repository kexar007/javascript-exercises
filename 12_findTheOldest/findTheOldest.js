const findTheOldest = function(people) {

    const d = new Date();
    let year = d.getFullYear();

    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            people[i].age=year-people[i].yearOfBirth;
        } else {
           people[i].age=people[i].yearOfDeath-people[i].yearOfBirth; 
        }
        
    }
    

    const oldest = people.reduce(
        (oldest,current) => {
          


            return oldest.age > current.age ? oldest : current ;
        }





    )
return oldest;



};

// Do not edit below this line
module.exports = findTheOldest;
