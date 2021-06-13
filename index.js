     let record = [
       {year: '1969', result: 'W'}
    ]
function testFunc() {
  return superbowlWin(record);
}
function superbowlWin(records){
  if (records.find(record => record['result']==="W"))
    return records.find(record => record['result']==="W")['year']
  else
    return undefined
} 