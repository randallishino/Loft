const express = require('express');
var port = process.env.PORT || 5000;
const path = require('path');
const app = express();

  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(process.env.PORT || 5000, () => console.log(`Listening on ${ port }`));
