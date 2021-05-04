const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 7000;
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  fs.readFile(__dirname + "/public/index.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("Error loading this page!");
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.end(data);
  });
});

server.on("connection", () => console.log("server is connected"));

server.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);