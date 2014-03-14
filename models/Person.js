var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var personSchema = new Schema({

  name: String,
  surname: String,
  pimg: String,
  birthdate: String,

  deputyForParty: Schema.Types.ObjectId,
  candidateForParty: Schema.Types.ObjectId,

  currentPosition: String,
  profession: String,

  twitter: String,
  email: String,
  web: String

});

/**
 * Hash the password for security.
 * "Pre" is a Mongoose middleware that executes before each user.save() call.
 */

module.exports = mongoose.model('Person', personSchema);
