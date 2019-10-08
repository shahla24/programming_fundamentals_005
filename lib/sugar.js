// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/

function size(object) {
  //set a variable as a counter
  let count = 0;
  //loop through each keypair value in the object
  for (let key in object ) {
    //in each loop iteration increas the counterby 1
    count++;
    //when loop complete return the counter
  }
  return count;
}

/*
  This function receives an object, whose values will all be numbers,
   and returns the smallest number in the object.
*/
//function min(object) {}


  function min(object) {
    const values = Object.values(object) ;
     let currMin = values[0];
    values.forEach(function (item) {
      if (item < currMin) {
        currMin = item;
      }
       });
  return currMin;
}
// 

/*
  This function receives an object, whose values will all be numbers, and 
  returns the largest number in the object.
*/
function max(object) {
const values = Object.values(object);
// loop through to get each value in object
let currentMax = values[0];

values.forEach(function(item) {
  //if the value is larger then currentMax
  if (item > currentMax) {
    //then currentMax is to be this value
    currentMax = item;
  }
});
return currentMax;
}

/*
  This function receives an object, and will return a clone of this 
  object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
const newObject = {};
for (let key in object) {
  const value = object[key];
  newObject[key] = value;
}
return newObject;
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
return object[key];

}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
const value = object[key];
if (value === undefined) {
  return false;
} else {
  return true;
}
return value;
}

/*
  This function receives an object, whose values will all be numbers, 
  and returns the sum of all these numbers.
*/

 function sum(object) {
   const values = Object.values(object);
   let total = 0;
    values.forEach(function(item) {
      
      if(typeof item ==="number") {
        total += item;
      }
    });
    return total;
  }

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {}

/*
  This function reveives an array of objects. It should return a single object,
   which is a combination of all the objects in the array.
*/
function addAll(arr) {
  //arr will be an array of objects

  //function will return an obgect

// for example object 1 in arr might be:
//{ name: "James", age: 35}
//object 2 might be
//{ title: "Fantastic Mr Fox", author: "Roald Dahl" }
// so a result would be:
// {name:"James", age: 35, title: "Fantastic Mr Fox", author: "Roald Dahl" }

// we need to look at each object in the array 'arr'

  // for each of the objects we look at
  // we need to obtain its key/value pairs
  // and place them on a new object
  let objectToReturn = {};

  arr.forEach(function(object) {

    // This will loop through each key within
      // the object meaning you can use both the key and 
    // the value if required
    for(let key in object ) {
      const value = object[key];

      objectToReturn[key] = value;
    }

  });

  return objectToReturn;
}




// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
