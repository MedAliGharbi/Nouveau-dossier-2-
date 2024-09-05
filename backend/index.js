const express = require("express");
const productRoutes = require("./routes/product");
const CartRoutes = require("./routes/cart");
const userRouter=require ("./routes/user")


const db = require('./index');
const cors = require('cors');
const app = express();
const PORT =3000;

app.use(express.json());

app.use(cors());

app.use('/api/user',userRouter)

app.use("/api/product", productRoutes);

app.use("/api/cart", CartRoutes);


app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});
