const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let result;
  array.forEach((item)=>{
    if(item.result == "W") result = item.year;
  });
  return result;
}