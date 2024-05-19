const mongoose = require("mongoose");

const ConnectDatabase= ()=>{
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data) => {
  console.log('Connected to MongoDB successfully!',data.connection.host);
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
}

module.exports = ConnectDatabase