var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Section = new keystone.List('Section', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
		sortable: true
});

Section.add({
	title: { type: Types.Text, required: true, index: true, initial:true },
	image: { type: Types.CloudinaryImage }
});

Section.relationship({ path: 'categories', ref: 'Category', refPath: 'section' });

/**
 * Registration
 */

Section.defaultColumns = 'title, image';
Section.register();
