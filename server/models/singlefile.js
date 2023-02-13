const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName:String,
    filePath:String,
    fileType:String,
    fileSize:String,
}, {timestamps: true});

module.exports = mongoose.model('SingleFile', singleFileSchema);