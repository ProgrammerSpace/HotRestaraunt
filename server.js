var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customerCount = 0;
var reservations = [
    {
        name: "aaa",
        ph: "12345",
        email: "abc@xyz.com",
        uniqueId: "aaa"
    }
];
var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html.html"));
});

app.get("/api/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitList);
});

app.post("/api/customer", function (req, res) {
    var newCustomer = req.body;

    console.log(newCustomer);

    if (customerCount < 5) {
        reservations.push(newCustomer);
    } else {
        waitList.push(newCustomer);
    }

    res.json(newCustomer);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});