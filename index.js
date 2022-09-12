const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(record) {
    //const found = array1.find(element => element > 10);
  const found = record.find(obj=>obj.result==="W")
  console.log (found)
  if(found){
    return found.year
  }
   //return (year === "W");
}

