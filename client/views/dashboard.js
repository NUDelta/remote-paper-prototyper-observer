Template.dashboard.helpers({
    interactions: function () {
        return Observations.find({observation: Session.get('instance')});
    }

});

Template.dashboard.rendered = function () {
    Session.set('instance', this.data.instance);
};

Template.dashboard.events({
    'click .btn-success': function (event) {
        event.preventDefault();
        event.stopPropagation();
        Observations.update(event.target.value, {$inc: {correct: 1}});
    },
    'click .btn-danger': function (event) {
        event.preventDefault();
        event.stopPropagation();
        Observations.update(event.target.value, {$inc: {incorrect: 1}});
    },

});