/**
 * Created by Bob on 24-06-2015.
 */

Template.layout.events({
    'click .logout': function (event) {
        event.preventDefault();
        Meteor.logout();
        console.log('logger ud.....')
        Router.go('/');
    }
})
