function findWaldo(arr, found) {
  arr.forEach(function(thing){
    if (thing === "Waldo") {
      found()  // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);