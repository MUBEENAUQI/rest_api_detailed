const express = require("express");
const router = express.Router();

//getting all the post
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling get requests to /products",
  });
});

//getting a single post
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you received the special data",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed the special data",
    });
  }
});

//posting a post
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling post requests to /products",
  });
});

//update a post
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "updated a product",
  });
});

//delete a post
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "deleted a product",
  });
});

module.exports = router;
