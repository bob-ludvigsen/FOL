/**
 * Created by bob on 20/11/2017.
 */


import './french.html';
//import '../french/french.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { French } from '../../../api/french/french.js';
import { FrenchIndex } from '../../../api/french/french_index.js';
import { $ } from 'meteor/jquery';



Template.french.helpers({
    
    inputAttributes: function () {
        console.log("Nå nå");
        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast fransk ord eller forkortelse...' };
    },
    showMoreattr: function() {
        return { 'class': 'btn btn-success'}
    },
    index: () => FrenchIndex,
    resultsCount: function () {
        return FrenchIndex.getComponentDict().get('count');
    },
    showMore: function () {
        return false;
    },
    renderTmpl: () => Template.renderTemplate
});

Template.french.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        FrenchIndex.getComponentDict().clear();
    },


});