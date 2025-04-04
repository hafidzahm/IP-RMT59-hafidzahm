'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  }
  Bookmark.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          msg: "UserId is required"
        },
        notNull:{
          msg: "UserId is required"
        }
      }
    },
    title: {
      type: DataTypes.STRING
    },
    thumb: {
      type: DataTypes.STRING
    }, 
    author: {
      type: DataTypes.STRING
    }, 
    tag: {
      type: DataTypes.STRING
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg: "Key is required"
        },
        notNull:{
          msg: "Key is required"
        }
      }
    },
    statusRead: {
      type: DataTypes.BOOLEAN,
    defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};