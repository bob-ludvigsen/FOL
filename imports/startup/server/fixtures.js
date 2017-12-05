import { Meteor } from 'meteor/meteor';
import { Players } from '../../api/players/players.js';
import { English } from '../../api/english/english.js';
import { French } from '../../api/french/french.js';
import { Tactic } from '../../api/tactic/tactic.js';
/*
if (French.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('nested/fransk.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        French.insert(words);
    });

}

if (English.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('nested/eng.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        English.insert(words);
    });

}

if (Tactic.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('nested/taktik.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        Tactic.insert(words);
    });

}




 var users = [
 {name:"Normal User",email:"normal@example.com",roles:''},
 {name:"engelsk",email:"view@example.com",roles: 'hto'},
 {name:"Manage-Users User",email:"manage@example.com",roles: 'manage-users'},
 {name:"Admin User",email:"bolu@fak.dk",roles: 'admin'}
 ];

 _.each(users, function (user) {
 var id;

 id = Accounts.createUser({
 email: user.email,
 password: "belgien123",
 profile: { name: user.name }
 });

 if (user.roles.length > 0) {
 // Need _id of existing user record so this call must come
 // after `Accounts.createUser` or `Accounts.onCreate`
 Roles.addUsersToRoles(id, user.roles, 'default-group');
 }

 });
*/