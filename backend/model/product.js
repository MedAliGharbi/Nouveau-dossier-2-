module.exports = (connection, DataTypes) => {
    const Product = connection.define(
      "products",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        imgurl: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        description: {
          type: DataTypes.STRING,
        }
      },
      {
        tableName: "products",  // Explicit table name to match your DB table
        timestamps: false,       // Disable timestamps if you don't need them
      }
    );
    return Product;
  };
  