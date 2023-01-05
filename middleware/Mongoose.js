const mongoose = require("mongoose");
const uri =
  "mongodb+srv://thexhacker:rEAKAK3MPKNmmM9g@cluster0.ugev3.mongodb.net/new_login_insta";
// require('dotenv').config();
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connection[0]) {
    return handler(req, res);
  }
  mongoose.connect(uri);

  return handler(req, res);
};

export default connectDb;
