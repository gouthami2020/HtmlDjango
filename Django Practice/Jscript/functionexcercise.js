function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}
function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}
function stringTimes(str, n) {
    var word = "";
    var i = 0;
    while(i<n){
      word += str
      i++
    }
    return word
}

function luckySum(a, b, c){
 if (a === 13) {
   return b+c
}else if (b === 13) {
  return a+c
}else if (c === 13) {
  return a+b
}else {
  return a+b+c
}
}

var roster = []
function addNew(){
  var newName = prompt("What name would you like to add? ");
  roster.push(newName)
}


function remove(){
  var remName = prompt("What name would you like to remove")
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

function display(){
  console.log(roster);

}
var start = prompt("would you like to start roster web app? y/n")
var request = "empty"
if (start === 'y')
{
  while(request !== "quit"){
    request = prompt("please select an action: add,remove,display or quit")
    if (request === 'add') {
      addNew()
    }else if (request === 'display') {
      display()
    }else if (request === 'remove') {
      remove()

    }else {
      alert("Not recognized")
    }
  }
}
alert("Thanks for using rosteer app")
