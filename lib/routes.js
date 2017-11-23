/**
 * Created by bob on 20/11/2017.
 */


Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('home');

});

Router.route('leaderboard', function () {
    this.render('leaderboard');

});

Router.route('searchfr', function () {
    this.render('french');

});

Router.route('search', function () {
    this.render('danishfrench');

});



Router.route('searchTactic', function () {
    this.render('tactictempl');

});


Router.route('descriptiontac', function () {
    this.render('descrtac');

});


Router.route('descriptionfr', function () {
    this.render('descrfr');

});

Router.route('descriptioneng', function () {
    this.render('descreng');

});
Router.route('/searchEngDa', function () {
    this.render('searchEngDa');
});

Router.route('/searchEng', function () {
    this.render('searchDaEng');
});

//