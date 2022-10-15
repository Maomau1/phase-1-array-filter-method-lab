// Code your solution here
//const newArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//console.log(newArray)
const findMatching = function (array,  name) {
       return array.filter(x => x.toUpperCase() === name.toUpperCase())
        
}

const fuzzyMatch = function(array, name) {
    return array.filter( x => x.startsWith(name))
    }

    const matchName = function(array,driver) {
        return array.filter (x => x.name === driver)
    }
        /*caseSensitive(name));
        }

   const caseSensitive = function (x) {
    return x;
   }
/*const notCaseSensitive = function (newArray, newName) { 
    for (const nom of newArray) {
            if (newName.toUpperCase() === nom.toUpperCase()){
            return nom;
    }
}
}*/