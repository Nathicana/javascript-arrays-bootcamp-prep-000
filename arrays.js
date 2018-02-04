var chocolateBars = 
["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.push("Butterfinger");
chocolateBars.unshift("Mounds");




function addElementToBeginningOfArray(array, element){
  array.push(element);
  return array
}
addElementToBeginningOfArray(chocolateBarsYum,"Mounds");

