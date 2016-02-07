var keystone = require('keystone'),
    Section = keystone.list('Section');

exports = module.exports = function(req, res) {

  console.log(req.params.id)

  Section.model.findById(req.params.id)
  .populate('categories')
  .exec(function(err, section){

  })
};
