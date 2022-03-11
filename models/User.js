const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim : true
  },
  lastname: {
    type: String,
    required: true,
    trim : true
  },
  email: {
    type: String,
    required: true,
    trim : true,
    index : true,
    unique : true,
  },
  password: {
    type: String,
    required: true,
    trim : true
  },
  active: {
    type: Boolean,
    default : true,
  },
  createdAt: {
    type: Date, 
    default: Date.now()
  },
  updatedAt: {
    type : Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", UserSchema);