var http = require("http");
var fs = require('fs')
http.createServer(function (req, res) {

  var fileName = "." + req.url;
  console.log(fileName);
  if (fileName === './') {
    //文件读取
    fs.readFile("index.html", 'utf-8', function (err, data) {
      if (err) {
        return console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    })

  }
  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });
    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + Date.now() + "\n\n");
    res.write("data: " + Date.now() + "\n\n");

    interval = setInterval(function () {
      res.write("data: " + Date.now() + "\n\n");
    }, 100);

    req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);
  }
}).listen(8080, "127.0.0.1");