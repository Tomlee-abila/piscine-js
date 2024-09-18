import fs from "fs";

const args = process.argv;
const file = args[2];
let modifiedArray = [];

fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  let words = data.split(" ");

  words.forEach((word) => {
    const midIndex = Math.floor(word.length / 2);
    modifiedArray.push(word.slice(midIndex) + word.slice(0, midIndex));
  });
  console.log(modifiedArray.join(" "));
});
