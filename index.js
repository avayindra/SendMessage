const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let pLanguages = [];

app.get("/", (req, res) => {
  res.render("index", { plNames: pLanguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});
