const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/boilermaker', {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
