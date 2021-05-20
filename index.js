const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(Array){
  let result;
  Array.forEach((item)=>{
    if(item.result === "W") result = item.year;
  });
  return result;
}