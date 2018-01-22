// Catch uncaught Exception
// NEED TO BE HERE !!
process.on('uncaughtException', () => {
    process.exit(1);
});

/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
const express = require('express');
// const configuration = require('./configuration');
const path = require('path');

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const app = express();
const router = express.Router();

app.use(router);

// Deploy client app
app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(3000, () => {
    console.log('listening on 3000');
});

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
// Export to be used from dev environment
module.exports = app;
