const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  let x = 0;
  let y = 0;
  let position = [];

  for (let move of moves) {
    if (move === "north") {
      y += 1;
    }
    if (move === "south") {
      y -= 1;
    }
    if (move === "east") {
      x += 1;
    }
    if (move === "west") {
      x -= 1
    }  
  }
  position.push(x);
  position.push(y);

  return position;

}

console.log(finalPosition(moves));
