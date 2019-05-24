const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Admin = new Schema({
  admin_username: {
    type: String
  },
  admin_name: {
    type: String
  },

  western_id: {
    type: String
  }
});

module.exports = mongoose.model("Admin", Admin);
