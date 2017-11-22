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

Router.route('french', function () {
    this.render('french');

});

Router.route('english', function () {
    this.render('english');

});