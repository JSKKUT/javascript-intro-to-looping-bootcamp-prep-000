function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
return "done"
}

function doWhileLoop(num) {
  while
}


// Define a function called doWhileLoop in loops.js.  The function should take an integer as an argument. Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once regardless." while incrementVariable() returns a number less than the parameter received. (Your condition might look something like incrementVariable() < num.) Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked
// 1) loops
       doWhileLoop(num)
         console logs "I run once regardless." 1 time when passed an integer of0 as a parameter.:
     ReferenceError: doWhileLoop is not defined
// 2) loops
       doWhileLoop(num)
         console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.:
     ReferenceError: doWhileLoop is not defined