const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize('ecommerce',"root", "root",{
  host: "localhost",
  dialect: "mysql",
});
async function testconnection(){
  try{
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error){
     console.error("Unable to connect to the database:", error);
  }
}
testconnection();

const db = {};

db.User=require('./user')(connection,DataTypes)
db.Product = require("./product")(connection, DataTypes);
db.Cart = require("./cart")(connection, DataTypes);
 

// db.User.hasMany(db.Product);
// db.Product.belongsTo(db.User);
// db.cart.hasMany(db.Product);



// connection.sync({ force: true });


// 

module.exports = db;
