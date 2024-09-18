import fs from "fs";

let dir = process.argv[2] || process.cwd(); 
let lastFirst = [];


fs.readdir(dir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    return; 
  }

  
  for (let file of files) {
    if (file.endsWith(".json")) { 
      let nameWithoutExtension = file.replace(".json", "");
      let parts = nameWithoutExtension.split("_");
      if (parts.length >= 2) { 
        let formattedName = `${parts[1]} ${parts[0]}`;
        lastFirst.push(formattedName);
      }
    }
  }
  lastFirst.sort();
  lastFirst.forEach((element, idx) => {
    console.log(`${idx + 1}. ${element}`);
  });
});
