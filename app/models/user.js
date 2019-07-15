"use strict";

const bookshelf = require('../db/bookshelf');

const Comment = require('./comment');
const Post = require('./post');
const bcrypt = require('bcrypt');

const bcrypt = require('bcrypt');

const User = bookshelf.Model.extend({
  tableName: 'users',
  initialize: function() {
    this.on('creating', this.encryptPassword);
  },
  hasTimestamps: true,
  posts: function() {
    return this.hasMany(Posts, 'author');
  },
  comments: function() {
    return this.hasMany(Comments);
  },
<<<<<<< HEAD
  encryptPassword:(model, attrs, options) => {
=======
encryptPassword:(model, attrs, options) => {
>>>>>>> 560c15313e64f74e827bc4f7969fa7604959a2d0
    return new Promise((resolve, reject) => {
      bcrypt.hash(model.attributes.password, 10, (err, hash) => {
        if (err) return reject(err);
        model.set('password', hash);
        resolve(hash);
      });
    });
  },
  validatePassword: function(suppliedPassword) {
    let self = this;
    return new Promise(function(resolve, reject) {
      const hash = self.attributes.password;
      bcrypt.compare(suppliedPassword, hash, (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      });
    });
  }
});
module.exports = bookshelf.model('User', User);
