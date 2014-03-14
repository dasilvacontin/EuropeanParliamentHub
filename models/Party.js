var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var partySchema = new Schema({

  name: String,
  acronym: String,
  logo: String,
  website: String,
  candidates: [Schema.Types.ObjectId]

});

/**
 * Hash the password for security.
 * "Pre" is a Mongoose middleware that executes before each user.save() call.
 */

module.exports = mongoose.model('Party', partySchema);
