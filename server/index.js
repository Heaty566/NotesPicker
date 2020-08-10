const express = require("express");
const colors = require("colors");

require("./service/password");
const prod = require("./app/prod");
const router = require("./app/router");
const initDB = require("./app/db");
const app = express();

//setup project
initDB();
prod(app);
router(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log(colors.green(`Listening on port ${port}`));
});
