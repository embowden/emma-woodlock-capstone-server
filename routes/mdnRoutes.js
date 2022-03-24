const express = require("express");
const readFile = require("../utils/helper-functions");
// const shuffle = require("../utils/helper-functions");
const router = express.Router();
const fs = require("fs");

module.exports = router;

//RETURNS ALL DATA IN JSON FILE
router.get("/", (req, res) => {
  const mdnData = readFile("./data/mdn.json");
  if (!mdnData) {
    res.status(404).json("Nothing found");
  } else {
    res.status(200).json(mdnData);
  }
});

//RETURNS ALL SUMMARY VALUES
//SHUFFLES THE ORDER OF THE SUMMARY VALUES
// router.get("/summaries", (req, res) => {
//   const mdnData = readFile("./data/mdn.json");
//   if (!mdnData) {
//     res.status(404).json("Nothing found");
//   } else {
//     let sentenceArray = shuffle(
//       mdnData.map((object) => {
//         return object.summary;
//       })
//     );
//     res.status(200).json(sentenceArray);
//   }
// });

//FUNCTION TO SHUFFLE ARRAY CONTENTS
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // WHILE THERE ARE ELEMENTS REMAINING
  while (currentIndex != 0) {
    // PICK A REMAINING ELEMENT
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // SWAP IT WITH CURRENT ELEMENT
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

//RETURNS ONE RANDOM SUMMARY
router.get("/summary", (req, res) => {
  const mdnData = readFile("./data/mdn.json");
  if (!mdnData) {
    res.status(404).json("Nothing found");
  } else {
    let summaryArray = mdnData.map((object) => {
      return object.summary;
    });
    let randomSummary =
      summaryArray[Math.floor(Math.random() * summaryArray.length)];
    res.status(200).json(randomSummary);
  }
});
