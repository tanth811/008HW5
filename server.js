const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
global.__basedir = __dirname;
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/" , (req,res) => {
    res.json({ message : "Welocome to manage account bro!!"})
})
require("./app/routes/user.routes")(app);
require("./app/routes/file.routes")(app);

// require("./app/routes/newfile.routes")(app);
// require("./app/models/db");  // we can remove it 

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log("Server is running on port ." +PORT);
});