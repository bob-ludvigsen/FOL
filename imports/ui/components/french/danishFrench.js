/**
 * Created by bob on 20/11/2017.
 */

import './danish_french.html';
//import './danishFrench.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
//import { DanishFrenchIndex } from '../../../api/french/danish_french_index';
//import {DanishFrenchIndex} from '../../api/french/danish_french_index.js';
//import {DanishFrenchIndex} from  '../../../api/french/danish_french_index';
import { FrenchIndex } from '../../../api/french/french_index.js';
import { $ } from 'meteor/jquery';


Template.danishfrench.helpers({
    inputAttributes: function () {
        console.log("Nå nå");
        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast fransk ord eller forkortelse...' };
    },

   // index: function () {
     //   return DanishFrenchIndex;
    //},


    index: () => FrenchIndex,

    resultsCount: function () {
        return FrenchIndex.getComponentDict().get('count');
    },

    renderTmpl: () => Template.renderTemplate
});

Template.danishfrench.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        FrenchIndex.getComponentDict().clear();
    },

    'click .inc': function () {
        Meteor.call('updateScore', Session.get("selectedPlayer"));
    },
    'change .category-filter': function (e) {
        FrenchIndex.getComponentMethods()
            .addProps('categoryFilter', $(e.target).val())
        ;
    }
});
