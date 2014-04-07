var express = require('express'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  port = process.env.PORT || 8080;


app.use(express.cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.session({ secret: 'keyboard like ziax dash', key: 'dash.ziax.dk' }));
app.use(express.static(__dirname + '/www' ));

app.configure('development', function () {
  console.log("configure development");
});

app.configure('production', function () {
  console.log("configure production");
});


server.listen(port, function () {
  console.log("Running on " + port);
});
