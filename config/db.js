const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    console.log('Stephan\'s DB Connected');
  } catch (err) {
    console.error(err.message);
    // exit process with error
    process.exit(1)
  }

}

module.exports = connectDB