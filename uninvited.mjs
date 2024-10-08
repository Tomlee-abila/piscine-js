import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 5000;
const GUESTS_DIR = "guests";

await fs.mkdir(GUESTS_DIR, { recursive: true });

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return sendResponse(res, 500, { error: "server failed" });
  }

  const guestName = req.url?.substring(1);
  if (!guestName) {
    return sendResponse(res, 500, { error: "server failed" });
  }

  try {
    const body = await getRequestBody(req);
    const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

    await fs.writeFile(filePath, body);

    let responseData;
    try {
      responseData = JSON.parse(body);
    } catch {
      responseData = body;
    }

    sendResponse(res, 201, responseData);
  } catch (err) {
    console.error("Error:", err);
    sendResponse(res, 500, { error: "server failed" });
  }
});

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
