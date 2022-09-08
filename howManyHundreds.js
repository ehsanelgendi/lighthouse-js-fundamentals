function howManyHundreds (num) {
  let noOfHundreds = 0;
  if (num % 100 === 0) {
    noOfHundreds = num / 100;
  }
  else {
    noOfHundreds = Math.trunc(num / 100);
  }

  return noOfHundreds;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);