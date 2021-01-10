'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quiz', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      testid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questionid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quiz');
  }
};