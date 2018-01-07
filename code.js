//Javascrip roster web application


var name  = []

function add(){
  var addName = prompt("What name do you want to add?")
  name.push(addName)
}

function remove(){
  var remName = prompt("What name do you want to remove?");
  index = name.indexOf(remName);
  name.splice(index,1);
}

function display(){
  console.log(name);
}

var start = prompt("Do you want to start a roaster web app? ");
var request = "empty";

if (start === 'y'){
  while (request !== "quit"){
    request = prompt("Please select an action: add, remove, display, or quit.");
    if (request === 'add'){
      add();
    }
    else if (request === 'remove'){
      remove();
    }
    else if (request === 'display'){
      display();
    }
    else{
      alert("Invalid input")
    }
  }
}
alert("Thanks for using the app")
