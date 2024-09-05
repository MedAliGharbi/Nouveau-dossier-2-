const express = require("express");
const router = express.Router();


const {
  getAll,
  postCart,
  updateCart,
  deleteCart,
} = require("../controller/cart.js");


router.get("/get", getAll);
router.post("/post", postCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);



module.exports = router;