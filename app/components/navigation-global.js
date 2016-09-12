import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  model: [{title: 'Blog', location: 'blog'},
          {title: 'About', location: 'about'}]
});
