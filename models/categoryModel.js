const { DataTypes } = require('sequelize');
const Sequelize = require('../config/dbConnection')

const Category = Sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING(255), // Optional: You can set a maximum length for the string
    allowNull: true,
  },
  imagePath: {
    type: DataTypes.STRING(255), // Optional: You can set a maximum length for the string
    allowNull: true,
  },
  cssClassName: {
    type: DataTypes.STRING(100), // Optional: Set a reasonable length
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING(255), // Optional: Set a reasonable length
    allowNull: true,
  },
  description: {  // Fixed typo here
    type: DataTypes.STRING(500), // Optional: Adjust length based on your need
    allowNull: true,
  },
  keyword: {
    type: DataTypes.STRING(255), // Optional: Set a reasonable length
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('yes', 'no'),  // Optional: Enum with 'yes' and 'no'
    defaultValue: 'yes',  // Default value
    allowNull: false,     // It's often good practice to set it as 'not null'
  }
});

module.exports = Category;
