
var path = require("path");



module.exports = function(app) {

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
}