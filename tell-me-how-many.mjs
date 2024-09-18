import fs from "fs";

let dir = process.argv[2] || process.cwd();
fs.readdir(dir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    return; 
  }
  console.log(files.length); 
});
