import Route from '@ember/routing/route';
export default Route.extend({
	model() {
		return this.store.createRecord('teacher');
	},
	actions:{
		createTeacher(){
			debugger;
			let teacher = this.modelFor(this.routeName);
			var self = this;
			teacher.save().then(function() {
				self.transitionTo('teacher');
			}).catch(function(reason) {
			});
		}
	}
});