import fs from "fs/promises";

async function processFile() {
  const file = process.argv[2];
  let keyword = process.argv[3];
  let filename = process.argv[4];

  try {
    const fileData = await fs.readFile(file, "utf8");

    if (keyword === "encode") {
      filename = filename || "cypher.txt"; 
      const base64data = Buffer.from(fileData).toString("base64");
      await fs.writeFile(filename, base64data);
      console.log(`Encoded data written to ${filename}`);
    } else if (keyword === "decode") {
      filename = filename || "clear.txt"; 
      const decodedData = Buffer.from(fileData, "base64").toString("utf8");
      await fs.writeFile(filename, decodedData);
      console.log(`Decoded data written to ${filename}`);
    } else {
      console.error("Invalid keyword. Use 'encode' or 'decode'.");
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

processFile();
