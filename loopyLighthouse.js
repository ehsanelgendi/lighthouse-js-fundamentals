// for (let x = 100; x <= 200; x++) {
  
//   if ((x % 3 === 0) && (x % 4 === 0)) {
//     console.log("LoopyLighthouse");
//   }
//   else if (x % 3 === 0) {
//     console.log("Loopy");
//   }
//   else if (x % 4 === 0) {
//     console.log("Lighthouse");
//   }
//   else {
//     console.log(x);
//   }
// }

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}
makeLine(5);
function buildTriangle(noOfBottomAstericks) {
  let triangle = "";
  for (let x = 0; x <= noOfBottomAstericks; x++) {
    triangle = triangle + makeLine(x);
  }
  return triangle;
}

console.log(buildTriangle(20));