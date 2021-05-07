const express = require("express");

const { writeUserData, readUserData } = require("./firebase");
const bodyParser = require("body-parser");

const fs = require("fs");

const PORT = process.env.PORT || 7000;
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

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

server.post("/send", (req, res) => {
  console.log(req.body, "request");
  const { firstName, lastName, phoneNumber, bookSeat } = req.body;
  writeUserData(firstName, lastName, phoneNumber, bookSeat, (response) => {
    res.send({ message: response });
  });
  // console.log(response, "from firebase");
  // res.send(true);
  // console.log(res.body, "response");
});

server.on("connection", () => console.log("server is connected"));

server.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
// readUserData()
