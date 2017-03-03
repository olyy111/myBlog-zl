/**
 * Created by zl on 2017/2/21.
 */
var mongo = require('mongoose');
var CategoriesSchema = require('../schemas/categories');

module.exports = mongo.model('Category', CategoriesSchema);