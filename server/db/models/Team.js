const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db.js");
require("dotenv").config();

const { STRING, INTEGER, BOOLEAN } = Sequelize;

const Team = db.define("teams", {
  name: {
    type: STRING,
  },
  spread: {
    type: STRING,
  },
  rank: {
    type: INTEGER,
  },
  locked: {
    type: BOOLEAN,
    defaultValue: false,
  },
  lastTeam: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Team;
