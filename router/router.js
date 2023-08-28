//ראוטר ראשי לניווט בין הראוטרים
const express = require("express");
const router = express.Router();
// להביא את הנתב של המוצרים מהקובץ הנכון
const routerProduct = require("../products/routes/productRoutes");

// להפעיל את פונקציית הביניים שבקשות עם הנתיב של המוצרים יעביר לנתב של המוצרים
router.use("/products", routerProduct);

router.use(express.static("./public"));

router.use("*", (req, res) => {
  console.log("עמוד לא נמצא");
  res.status(404).send("עמוד לא נמצא");
});

module.exports = router;
