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
<<<<<<< HEAD

  if (fileName === "./stream") {
    // console.log('用户连接')
=======
  if (fileName === "./stream") {
>>>>>>> b705d2b604b181ad8bc01c7e900fdad430c72f69
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });
<<<<<<< HEAD

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
=======
    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + Date.now() + "\n\n");
    res.write("data: " + Date.now() + "\n\n");

    interval = setInterval(function () {
      res.write("data: " + Date.now() + "\n\n");
    }, 100);

    req.connection.addListener("close", function () {
      clearInterval(interval);
>>>>>>> b705d2b604b181ad8bc01c7e900fdad430c72f69
    }, false);
  }
}).listen(8080, "127.0.0.1");