const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/categories.routes.js")(app);
require("./routes/products.routes.js")(app);
// set port, listen for requests
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});