const express = require("express");
const router = express.Router();
const {
  getAll,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");


router.get("/get", getAll);
router.post("/post", postProduct);
router.put("/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
module.exports = router;