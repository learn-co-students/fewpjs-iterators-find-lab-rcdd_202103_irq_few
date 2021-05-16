const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrOfObjects) {
  
  let result;
  arrOfObjects.find(obj => obj.result === "W" ? result = obj.year : undefined);
  
  return result;
}
