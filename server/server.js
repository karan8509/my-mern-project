const express = require("express");
const dbConnect = require("./src/config/db.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config(); //  environment variables

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders : [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
  credentials : true
  })
);

// a simple route
app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

const port = process.env.PORT || 3000; // define the PORT

// Start the server
app.listen(port, async () => {
  await dbConnect();

  console.log(`Server listening on http://localhost:${port}`);
});
