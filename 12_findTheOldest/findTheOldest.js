const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();

    let oldest = arr.sort((a, b) => {
        let Aage = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        let Bage = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        
        return Bage - Aage;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
