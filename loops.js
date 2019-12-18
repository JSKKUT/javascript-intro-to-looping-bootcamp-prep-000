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
  var i = 0
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}



function incrementVariable() {
  i = i + 1;
  return i;
}
// 1) loops
       doWhileLoop(num)
         console logs "I run once regardless." 1 time when passed an integer of0 as a parameter.:
     ReferenceError: doWhileLoop is not defined
// 2) loops
       doWhileLoop(num)
         console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.:
     ReferenceError: doWhileLoop is not defined
     