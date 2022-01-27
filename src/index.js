const express = require('express');
const app = express();

app.get("/", (req,res) => {
    console.log("Serving a new request")
    res.send("Hello World!");
});

app.get("/health", (req,res) => {
    res.status(200).send("healthy");
});

app.listen(3000, () => {
    console.log("App is running...");
});
