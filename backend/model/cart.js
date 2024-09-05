module.exports = (connection, DataTypes) => {
    const Cart = connection.define('Cart', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      ImageUrl: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return Cart; 
  };
  