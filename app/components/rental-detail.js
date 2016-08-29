import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          rental.set(key,params[key]);
        }
      })
      rental.save();
      this.transitionTo('index');
    }
  }
});
