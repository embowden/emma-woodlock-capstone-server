const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mdnRoutes = require("./routes/mdnRoutes");

app.use(express.json());
app.use(cors());
app.use("/mdn", mdnRoutes);
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
