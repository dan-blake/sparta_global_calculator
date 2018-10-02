
    // get the user inputs
    var value1 = prompt('enter first value');
    var value2 = prompt('enter the second value');
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
    var run = true



 switch (choice){
   case "s":
   var result = value1 - value2
   alert(`Your answer is ${result}`)
   break;
   case "m":
   var result = value1 * value2
   alert(`Your answer is ${result}`)
   break;
   case "d":
   var result = value1 / value2
   alert(`Your answer is ${result}` )
   break;
   default:
   var result = parseInt(value1) + parseInt(value2)
   alert(`Your answer is ${result}`)
  }
 // No functions used above
