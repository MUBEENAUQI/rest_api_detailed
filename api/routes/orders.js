const express = require("express");
const router = express.Router();

//getting all the orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "orders were fetched",
  });
});

//getting a single order
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order details",
    orderId: req.params.orderId,
  });
});

//posting an order
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "orders were posted",
  });
});

//deleting a single order
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order deleted",
    orderId: req.params.orderId,
  });
});

//updating a single order
router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order has been updated",
    orderId: req.params.orderId,
  });
});

module.exports = router;
