const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
  // sessionId: {
  //   type: String,
  //   required: true,
  //   trim : true,
  //   index : true,
  //   unique : true,
  // },
  email: {  //username
    type: String,
    required: true,
    trim : true,
    index : true,
  },
  ipAddress: {
    type: String,
    required: true,
    trim : true
  },
  signedInAt: {
    type: Date, 
    default: Date.now()
  },
  signedOutAt: {
    type : Date,
  }
});

module.exports = mongoose.model("session", SessionSchema);