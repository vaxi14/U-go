const mongoose = require('mongoose');

function connectToDatabase() {
  if (!process.env.DB_CONNECT) {
    console.error("Error: The environment variable DB_CONNECT is not set.");
    return Promise.reject(new Error("DB_CONNECT not set"));
  }

  return mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    throw err; 
  });
}

module.exports = connectToDatabase;
