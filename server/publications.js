/**
 * Created by Bob on 23-06-2015.
 */

/*
Meteor.publish('filteredUsers', function(filter , cursor) {
    return filteredWordQuery(filter , cursor);
    //return Lists.find();
})*/;
import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players/players.js';
import { check } from 'meteor/check';
import {Tactic} from  '../imports/api/tactic/tactic';
import {French} from '../imports/api/french/french';
import {English} from  '../imports/api/english/english'

Meteor.publish('allDocs', function () {
    return [
        French.find({})

    ];
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
Meteor.publish('users', function(){
   // return users.find();

});



Meteor.publish('allTactics', function() {
    return Tactic.find();
});
Meteor.publish('allEnglish', function() {
    return English.find();
});

Meteor.publish('allFrench', function() {
    return French.find();
});


Meteor.publish('filteredTactics', function(filter) {

    if (!Roles.userIsInRole(this.userId, ['admin', 'taktiskordbog'])){
        return;
    } else {
        return filteredTacticQuery(this.userId, filter);
    }

});
Meteor.publish('filteredUsers', function(filter) {

    if (!Roles.userIsInRole(this.userId, ['admin'])){
        return Meteor.users.find(this.userId);
    } else {
        return filteredUserQuery(this.userId, filter);
    }

});
