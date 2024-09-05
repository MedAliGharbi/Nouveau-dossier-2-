module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "user",
      {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // Ensure usernames are unique
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // Ensure emails are unique
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
      },
    );
    return User;
  };
  