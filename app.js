// import npm apps
const express = require("express");
const app = express();

// import routes
// .. index routes
indexRoutes = require("./routes/index");

// initialize npm apps
// .. ejs
app.set("view enginge", "ejs");
// .. bodyparser
// .. mongoose
// .. methodoverride
// .. flash

// add public dir to autopath -- needed for stylesheet in header partial
app.use(express.static(__dirname + "/public"));

// configure passport

// define middleware for user check & flash messages

// use routes -- do it after middleware fired!
app.use(indexRoutes);

// start server
try {
    app.listen(process.env.PORT || 3000, () => {
        console.log("App running...");
    });
}
catch(ex) {
    console.error(ex.message);
}
