var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
		sortable: true
});

Category.add({
	title: { type: Types.Text, required: true, index: true, initial:true },
	image: { type: Types.CloudinaryImage },
  text: { type: Types.Html, wysiwyg: true  },
  section: { type: Types.Relationship, ref: 'Section' }
});

Category.relationship({ path: 'posts', ref: 'Post', refPath: 'category' });

/**
 * Registration
 */

Category.defaultColumns = 'title, image';
Category.register();
