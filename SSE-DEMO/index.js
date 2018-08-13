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
    // console.log('用户连接')
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });

    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + Date.now() + "\n\n");
    //res.write("data: " + Date.now() + "\n\n");

    var s = 0;
    interval = setInterval(function () {
      res.write("data: " + Date.now() + "\n\n");
      res.write('id:' + s++ + '\n')
    }, 1000);

    req.connection.addListener("close", function () {
      clearInterval(interval);
      // console.log('用户取消l')
    }, false);
  }
}).listen(8080, "127.0.0.1");