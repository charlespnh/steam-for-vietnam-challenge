const express = require("express");
const app = express();

const PORT = 2000; 

app.use('/v1', require("./routes/v1"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {       // middleware session logger
    console.log(req.method + " request to " + req.url);
    // console.log("Params: " + JSON.stringify(req.params));
    // console.log("Body: " + JSON.stringify(req.body))
    console.log("Status " + res.statusCode + " - " + res.statusMessage);
    next();
})

app.use('/ping', (req, res, next) => {
    res.send('Pong');
    next();
});

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
module.exports = app;
