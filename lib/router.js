Router.route('/', function() {
    this.render('observation_list');
});

Router.route('/observe/:instance', function() {
    this.render('dashboard', {
        data: {
            instance: this.params.instance
        },
        waitOn: function() {
            return Observations.find();
        }
    });
});