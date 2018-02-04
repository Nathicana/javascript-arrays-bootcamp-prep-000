var chocolateBars = 
["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.push("Butterfinger");
chocolateBars.unshift("Mounds");




function addElementToBeginningOfArray(array, element){
  var arrayNew = [element, ...array];
  return arrayNew;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var arrayNew = [...array, element];
  return arrayNew;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array, element){
    array.shift(element);
    return array;
  }
  
  function removeElementFromBeginningOfArray(array, element){
   array.shift(element);
    return array;
    }
    
    function destructivelyRemoveElementFromEndOfArray(array, element){
      array.pop(element);
      return array;
    }
    
    function removeElementFromEndOfArray(array, element){
      array.slice(array.length);
      return array;
    }
      
      
      function accessElementInArray(array, index){
      array[index];
       return array;
      }
      
     