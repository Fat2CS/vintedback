require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const app = express();
const formidable = require("express-formidable");
app.use(cors());
app.use(formidable());

cloudinary.config({
  cloud_name: "dwr7fdqsa",
  api_key: "766154879848168",
  api_secret: "VwWZf9-NFCCVxPcCFstscIDvry4"
});

app.post("/publish", async (req, res) => {
  try {
    console.log(req.fields);
    console.log(req.files.test.path);
    const result = await cloudinary.uploader.upload(req.files.test.path);
    return res.json(result);
  } catch (error) {
    console.group(error.message);
    res.status(400).json(error);
  }
});
app.listen(3000, () => {
  console.log("Start server");
});
