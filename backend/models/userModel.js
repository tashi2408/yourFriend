const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    picture: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetToken: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    expireToken: {
      type: Date,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    dob: {
      type: String,
      default: 'N/A'
    },
    gender: {
      type: String,
      default: 'N/A'
    },
    occupation: {
      type: String,
      default: 'N/A'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
