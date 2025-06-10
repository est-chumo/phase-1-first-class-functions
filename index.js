function receivesAFunction(callback) {
  callback(); // Call the passed-in function
}
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}

// Or using arrow function syntax:
function returnsAnAnonymousFunction() {
  return () => console.log("I'm an anonymous function!");
}
