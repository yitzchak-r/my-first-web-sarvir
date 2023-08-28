//עמוד ראשי app
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const routerProduct = require("./router/router");

// להוסיף פונקציית ביניים של לוגר

// פונקצית בניים של כורס
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use(express.text());
app.use(routerProduct);

// פונקציית ביניים של תפיסת שגיאות שמקורן בשרת
app.use(morgan("tiny"));

app.listen(3000, (err) => {
  // התניה שאם יש שגיאה אז להדפיס הודעת הקונסול
  console.log("server is running an port 3000");
});
