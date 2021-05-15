const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record){
  let winningYear;
  let lostGame;
record.find( function(recordArray){
  if(recordArray.result === "W") {
    winningYear = recordArray.year;
  }
  else {
    lostGame = undefined;
    return lostGame;
  }
})
return winningYear;
};
superbowlWin(record);
