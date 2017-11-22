/**
 * Created by bob on 20/11/2017.
 */
import './french.html';
import '../french/french.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { French } from '../../../api/french/french.js';
import { FrenchIndex } from '../../../api/french/french_index.js';
import { $ } from 'meteor/jquery';

Template.french.helpers({
    inputAttributes: function () {
        return { 'class': 'form-control empty', 'placeholder': 'Indtast fransk ord eller forkortelse...' };
    },
    players: function () {
        return French.find({});
    },
    selectedName: function () {
       // var player = PlayersIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedPlayer") });
       // return player && player.name;
    },
    index: function () {
        return FrenchIndex;
    },
    resultsCount: function () {
        return FrenchIndex.getComponentDict().get('count');
    },
    showMore: function () {
        return false;
    },
    renderTmpl: () => Template.renderTemplate
});

Template.french.events({
    'click .inc': function () {
        Meteor.call('updateScore', Session.get("selectedPlayer"));
    },
    'change .category-filter': function (e) {
        FrenchIndex.getComponentMethods()
            .addProps('categoryFilter', $(e.target).val())
        ;
    }
});