/**
 * Created by bob on 20/11/2017.
 */
import './english.html';
import '../english/english.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { English } from '../../../api/english/english.js';
import { EnglishIndex } from '../../../api/english/english_index.js';
import { $ } from 'meteor/jquery';

Template.english.helpers({
    inputAttributes: function () {
        return { 'class': 'easy-search-input', 'placeholder': 'Start searching...' };
    },   
   
    index: function () {
        return EnglishIndex;
    },
    resultsCount: function () {
        return EnglishIndex.getComponentDict().get('count');
    },
    showMore: function () {
        return false;
    },
    renderTmpl: () => Template.renderTemplate
});

Template.english.events({
    'click .inc': function () {
        Meteor.call('updateScore', Session.get("selectedPlayer"));
    },
    'change .category-filter': function (e) {
        EnglishIndex.getComponentMethods()
            .addProps('categoryFilter', $(e.target).val())
        ;
    }
});