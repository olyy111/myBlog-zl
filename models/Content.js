/**
 * Created by zl on 2017/2/22.
 */
var mongo = require('mongoose');
var contentSchema = require('../schemas/content');

module.exports = mongo.model('Content', contentSchema);