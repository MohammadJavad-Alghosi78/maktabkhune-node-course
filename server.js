const http = require("http");
const url = require("url");
const fs = require("fs");
const readHtml = require("./readHtml");
const getContentType = require("./getContentType");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let html;
  if (parsedUrl.path === "/about") {
    html = readHtml("./about.html");
  } else {
    html = readHtml("./mainPage.html");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", getContentType());
  res.end(html);
});

server.listen(port, hostName, () => {
  console.log("server running ...");
});
