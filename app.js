const express = require("express");
const app = express();
const morgan = require("morgan");
//reates routes
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
//for getting more details on postman
app.use(morgan("dev"));

//displaying first message
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "First message",
//   });
// });
//calling them
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//handling errror for routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//handling errors for database
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
