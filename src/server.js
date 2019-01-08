const express = require("express");
const path = require("path");
const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});
