import Ember from 'ember';

const NavigationLinkComponent = Ember.Component.extend({
  tagName: '',
  href: Ember.computed('params.[]', function () {
    return this.get('params.location');
  }),
  title: Ember.computed('params.[]', function () {
    return this.get('params.title');
  }),
  active: Ember.computed('params.[]', function () {
    return 'active';
  })
});

NavigationLinkComponent.reopenClass({
  positionalParams: ['params']
});

export default NavigationLinkComponent;
