import fs from "fs/promises";
import path from "path";

let dir = process.argv[2] || process.argv[1]; // Use provided argument or script name

try {
  const files = await fs.readdir(dir, "utf8");
  let namesArray = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    if (await isConfirmed(filePath)) {
      const baseName = file.replace(/\.json$/, "");
      const [lastName, firstName] = baseName.split("_");
      namesArray.push(`${firstName} ${lastName}`);
    }
  }

  namesArray.sort();
  const output = namesArray.map((name, index) => `${index + 1}. ${name}`).join("\n");
  await fs.writeFile("vip.txt", output);
  console.log(output); // Print the result to console
} catch (err) {
  console.error("Error:", err);
}

async function isConfirmed(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.answer === "yes";
  } catch (err) {
    console.error("Error reading/parsing file:", filename, err);
    return false;
  }
}
