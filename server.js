let http = require("http"); //Requesting the http to enable connections with the serve
let port = 3030; // this the port number
let hostname = "127.0.0.1";
let fs = require("fs"); //requiring the filestream library to work with file

//Server created
let server = http
  .createServer(function(req, res) {
    let filename = "VisitorInformation.html";

    fs.readFile(filename, function(err, data) {
      if (err) {
        // This function will be exuted if the user request data which does not exist
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found"); //Error message displayed
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data); //writing the data derived from index.html on the browseer
      // res.write(req.url);
      return res.end(); //msg written on the website
    });
  })
  .listen(port);

server.listen(port, hostname, function() {
  console.log("server is running at http://" + hostname + ":" + port);
});
