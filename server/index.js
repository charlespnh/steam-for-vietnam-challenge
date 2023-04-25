const express = require("express");
const app = express();

const PORT = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
module.exports = app;
