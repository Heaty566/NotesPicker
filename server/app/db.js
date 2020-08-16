const mongodb = require("mongodb");
const mongodbURI = require("mongodb-uri");
const colors = require("colors");

let _db;

//initialized database
module.exports = function () {
        mongodb.connect(process.env.MONGODB_URL, { useUnifiedTopology: true }, (error, result) => {
                const dbInfo = mongodbURI.parse(process.env.MONGODB_URL);
                console.log(colors.green(`Connect to notespicker on host ${dbInfo.hosts[0].host}`));
                _db = result.db("notespicker");
        });
};

//get db for controller
module.exports.getDB = () => {
        if (!_db) {
                console.log(colors.red("You have to initialized DB"));
                return;
        }

        return _db;
};
