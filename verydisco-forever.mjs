import fs from "fs";
import { argv } from "node:process";

let modifiedArray = [];
let words = argv[2].split(" ");
words.forEach((word) => {
  const midIndex = Math.floor(word.length / 2);
  if (word.length % 2 === 0) {
    modifiedArray.push(word.slice(midIndex) + word.slice(0, midIndex));
  } else {
    modifiedArray.push(word.slice(midIndex + 1) + word.slice(0, midIndex + 1));
  }
});
let output = modifiedArray.join(" ");
fs.writeFile("verydisco-forever.txt", output, (err) => {
  if (err) {
    console.error("Error writing to file:", err.message);
  }
});
