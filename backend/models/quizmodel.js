'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quizModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    //Decides what is returned so it can be used to hide fields ex: the id field
    toJSON() {
      return { ...this.get(), id: undefined }
    }
  };
  quizModel.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    testid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    questionid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'quiz',
    modelName: 'quizModel',
  });
  return quizModel;
};