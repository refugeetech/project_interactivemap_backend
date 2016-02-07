var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Post = new keystone.List('Post', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
		sortable: true
});

Post.add({
	title: { type: Types.Text, required: true, index: true, initial:true },
	image: { type: Types.CloudinaryImage },
  text: { type: Types.Html, wysiwyg: true },
  category: { type: Types.Relationship, ref: 'Category' }
});

/**
 * Registration
 */

Post.defaultColumns = 'title, image';
Post.register();
