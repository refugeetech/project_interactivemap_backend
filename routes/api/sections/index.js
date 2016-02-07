var keystone = require('keystone'),
    Section = keystone.list('Section'),
    Category = keystone.list('Category'),
    Post = keystone.list('Post');

exports = module.exports = function(req, res) {

  Section.model.find().exec(function(err,sections){
    Category.model.find().exec(function(err,categories){
      Post.model.find().exec(function(err,posts){
        var final = []
        sections.forEach(function(s){
          var sec = {}
          sec.id = s.id
          sec.title = s.title
          sec.image = s.image
          sec.categories = []

          categories.forEach(function(c){
            if ( c.section == s.id ) {
              var cat = {}
              cat.id = c.id
              cat.title = c.title
              cat.image = c.image
              cat.text = c.text
              cat.posts = []

              posts.forEach(function(p){
                if (p.category == c.id ){
                  var post = {}
                  post.id = p.id
                  post.title = p.title
                  post.image = p.image
                  post.text = p.text

                  cat.posts.push(post)
                }
              })

              sec.categories.push(cat)
             }
          })

          final.push(sec)
        })

        res.send(final)
      })
    })
  })
};
