function calculator() {
    // get the user inputs
    var value1 = prompt('enter first value');
    var value2 = prompt('enter the second value');
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
    var run = true


while(run == true){
  switch(choice){
    case "s":
    var result = value1 - value2
    alert(`Your answer is ${result}`)
    var run1 = confirm("Would you like to do another action?")
    if (run1 == false){
      console.log("working")
    run = false;
    break;
    }  else {
      calculator()
    }
    break;
    case "m":
    var result = value1 * value2
    alert(`Your answer is ${result}`)
    var run1 = confirm("Would you like to do another action?")
    if (run1 == false){
      run = false;
      break;
    }  else {
        calculator()
      }
    break;
    case "d":
    var result = value1 / value2
    alert(`Your answer is ${result}` )
    var run1 = confirm("Would you like to do another action?")
    if (run1 == false){
      run = false;
      break;
    }  else {
        calculator()
      }
    break;
    case "a":
    var result = parseInt(value1) + parseInt(value2)
    alert(`Your answer is ${result}`)
    var run1 = confirm("Would you like to do another action?")
    if (run1 == false){
      run = false;
      break;
    }else {
      calculator()
    }
    break;
  } }}
// hello()
// }
 document.addEventListener("DOMContentLoaded", calculator())
