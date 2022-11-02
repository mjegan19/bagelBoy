const mongoose = require('mongoose');

//mongodb://localhost:37017/bagelBoy
async function connect(connectionString) {
    console.log("connecting...")
    try {
        const connectionResult = await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true  });
        if (connectionResult) console.log("Connection to MongoDB established.")
    } catch (err) {
        (err) => console.error("Connection failed.", err);
    }
}

module.exports.connect = connect;