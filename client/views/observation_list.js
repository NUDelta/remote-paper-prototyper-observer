Template.observationList.helpers({
    observations: function () {
        var obs = Observations.find().fetch();
        return _.uniq(obs, false, function(entry) { return entry.observation });
    }
});

Template.observationList.events({
    'click .adder-wait': function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleAdder();
    },
    'click #cancel': function (event) {
        // toggleAdder();
    },
    'click #save': function (event) {
        $('#save').attr('disabled','true');;
    },
    'submit form': function (event) {
        event.preventDefault();
        event.stopPropagation();

        console.log(event.target.name.value);

        for (var i in emptyInteractions) {
            emptyInteractions[i].observation = event.target.name.value;
            Observations.insert(emptyInteractions[i]);
        }
        event.target.name.value = "";
        toggleAdder();
    }
});

var toggleAdder = function () {
    $('.adder-wait').slideToggle();
    $('.adder-add').slideToggle();
}
var emptyInteractions = [
            {
                name: 'Tap/Pan Gesture',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Close Location Tracking',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Take Picture',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Menu/Button Navigation',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'View Informational Page',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Unfamiliar Location Tracking',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Consecutive Action Stream',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Passive Actions',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Textual Input',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Teleconferencing',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Unique Phone Placement',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
            {
                name: 'Image Editing',
                type: 'counter',
                correct: 0,
                incorrect: 0,
            },
        ];
