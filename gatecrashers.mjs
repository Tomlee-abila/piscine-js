import http from "http";
import { writeFile, mkdir } from "fs/promises";
import { Buffer } from "node:buffer";

const serverHost = "localhost";
const serverPort = 5000;
const guestsDirectory = "guests";
const authorizedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const secretPassword = "abracadabra";

await mkdir(guestsDirectory, { recursive: true });

const handleGuestData = async (request, response) => {
  response.setHeader("Content-Type", "application/json");

  const guestFileName = `${request.url.slice(1)}.json`;

  const sendErrorResponse = (statusCode, message) => {
    const errorResponseBody = JSON.stringify({ error: message });
    response.writeHead(statusCode, {
      "Content-Length": Buffer.byteLength(errorResponseBody),
    }).end(errorResponseBody);
  };

  const authorizationHeader = request.headers["authorization"];
  if (!authorizationHeader) {
    return sendErrorResponse(401, "Authorization Required");
  }

  const credentials = Buffer.from(authorizationHeader.slice(6), "base64").toString().split(":");
  if (!authorizedUsers.includes(credentials[0]) || credentials[1] !== secretPassword) {
    return sendErrorResponse(401, "Authorization Required");
  }

  let requestBody = '';
  request.on('data', chunk => {
    requestBody += chunk.toString();
  });

  request.on('end', async () => {
    try {
      await writeFile(`${guestsDirectory}/${guestFileName}`, requestBody);
      response.writeHead(200, {
        "Content-Length": Buffer.byteLength(requestBody),
      }).end(requestBody);
    } catch (error) {
      sendErrorResponse(500, "Failed to write file");
    }
  });

  request.on('error', () => {
    sendErrorResponse(500, "Error reading request");
  });
};

const httpServer = http.createServer(handleGuestData);

httpServer.listen(serverPort, serverHost, () => {
  console.log(`Server is running on http://${serverHost}:${serverPort}`);
});
