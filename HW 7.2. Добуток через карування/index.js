const multiply = (x) => {
  return (y) => {
    return x * y;
  };
};
console.log(multiply(5)(10));
console.log(multiply(10)(20));
console.log(multiply(10)(45));
