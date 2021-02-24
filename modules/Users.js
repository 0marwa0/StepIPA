const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  phone: { type: String },
  name: { type: String },
  dgree: { type: String },
  specialty: { type: String },
});

const Users = mongoose.model(`users`, UserSchema);
module.exports = Users;
