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
function invert(object) {
  const invertObject = {};
  for (let key in object) {
    let value = object[key]
    invertObject[value] = key;
  }
  return invertObject
}


function addAll(arr) {
  let mergedObject = {};
  arr.forEach(function (object) {
    for (let key in object) {
      const value = object[key];
      mergedObject[key] = value;
    }
  })
  return mergedObject;
};

// =============== PART 2 - Functions as Values ================

function find(obj, matcherFunc) {
  let result = null
  for (let key in obj) {
    let value = obj[key];
    if (matcherFunc(value) === true) {
      result = value
      return result
    }
  }
  return result
}

function every(obj, func) {
  let result = true;
  for (let key in obj) {
    let value = obj[key];
    if (func(value) === false) {
      result = false;
      return result
    }
  }
  return result
}

function some(obj, func) {
  let result = false;
  for (let key in obj) {
    let value = obj[key];
    if (func(value) === true) {
      result = true;
      return result
    }
  }
  return result
}

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
