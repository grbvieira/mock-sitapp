var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/', function (_, res) {
  res.setHeader('Content-Type', 'application/json');
res.end(`
    Apis criadas: \n \n
    /api/v1/waiting \n
    /api/v1/deliveries
  `);
});
app.get('/api/v1/waiting', function (_, res) {
  res.setHeader('Content-Type', 'application/json');
  json = {
    items: [{
        id: 123,
        title: "My waiting item",
        tracking_code: "ASD-12345"
      },
      {
        id: 124,
        title: "My waiting second item",
        tracking_code: "ASD-12345"
      }
    ]
  }
  res.end(JSON.stringify(json));
});
app.get('/api/v1/deliveries', function (_, res) {
  res.setHeader('Content-Type', 'application/json');
  json = {
    items: [{
        id: 123,
        title: "My delivered tem",
        send_at: "2020-03-20"
      },
      {
        id: 124,
        title: "Another delivered item",
        send_at: "2020-03-20"
      }
    ]
  }
  res.end(JSON.stringify(json));
});
app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});