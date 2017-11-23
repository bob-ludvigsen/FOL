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
import {DanishFrenchIndex} from  '../../../api/french/danish_french_index';
import { FrenchIndex } from '../../../api/french/french_index.js';
import { $ } from 'meteor/jquery';

Template.danishfrench.helpers({
    

    inputAttributes: function () {

        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast dansk ord eller forkortelse...' };
    },
    showMoreattr: function() {
        return { 'class': 'btn btn-success'}
    },
    index: () => DanishFrenchIndex,

    resultsCount: function () {
        return DanishFrenchIndex.getComponentDict().get('count');
    },

    renderTmpl: () => Template.renderTemplate,

/*
    test : function () {
        console.log('hey');
        console.log(DanishFrenchIndex.search('venstre', {limit:10}).fetch());
    },
    */
});

Template.danishfrench.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        DanishFrenchIndex.getComponentDict().clear();
    },

});
