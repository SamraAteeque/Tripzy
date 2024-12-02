// it connect to database... for connection of database we make a url that connect to environmental variable
// url make in .env file
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;