const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  CreateNewProduct,
  getProductByID,
  updateProductByID,
  productDeletion,
  SubtractionProductQuantityBy1ByID,
  lessProductQuantityBy1ByID,
} = require("../controllers/productsControllers");
router.put("/add/:id", SubtractionProductQuantityBy1ByID);
router.put("/less/:id", lessProductQuantityBy1ByID);
router.put("/:id", updateProductByID);
router.get("/", getAllProducts);
router.get("/:id", getProductByID);
router.post("/", CreateNewProduct);
router.delete("/:id", productDeletion);

module.exports = router;
