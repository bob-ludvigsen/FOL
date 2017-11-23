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

Router.route('searchEngDa', function () {
    this.render('english');

});