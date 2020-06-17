//import { Schema, model } from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//const Item = model('item', ItemSchema);

module.exports = Item =mongoose.model('item',ItemSchema);