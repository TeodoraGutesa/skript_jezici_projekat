'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kolaci extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Kolaci.init({
    naziv: DataTypes.STRING,
    cena: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Kolaci',
  });
  return Kolaci;
};