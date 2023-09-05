require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4001;
const router = express.Router();


// middlewares ===========================================
app.use(
  cors({
    // Sets Access-Control-Allow-Origin to the UI URI
    origin: process.env.URL_FRONTEND,
    // Sets Access-Control-Allow-Credentials to true
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =======================================================

// Rutas ==================================================

const routerInit = router.get("/", function (req, res, next) {
  res.send("User- Backend");
  res.end();
});

app.use(cookieParser());
app.use(routerInit);

// ========================================================

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
