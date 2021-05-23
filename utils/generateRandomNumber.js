const { backupMessages } = require("../bin/backupMessages");

const generateRandomNumber = Math.floor(Math.random() * (backupMessages.length - 1));

module.exports = { generateRandomNumber};
