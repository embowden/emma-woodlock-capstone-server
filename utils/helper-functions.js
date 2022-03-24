const fs = require("fs");

const readFile = (path) => {
  const content = JSON.parse(fs.readFileSync(path));
  return content;
};

//FUNCTION TO RANDOMISE ARRAY CONTENTS ORDER
// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }
//   return array;
// };

module.exports = readFile;
// module.exports = shuffle;
