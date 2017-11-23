/**
 * Created by bob on 20/11/2017.
 */
import './danishenglish.html';
import './danishenglish.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { English } from '../../../api/english/english.js';
import { EnglishIndex } from '../../../api/english/english_index.js';
import { $ } from 'meteor/jquery';

Template.searchDaEng.helpers({
    inputAttributes: function () {

        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast dansk ord eller forkortelse...' };
    },
    showMoreattr: function() {
        return { 'class': 'btn btn-success'}
    },
    index: () => EnglishIndex,

    resultsCount: function () {
        return EnglishIndex.getComponentDict().get('count');
    },
    
});

Template.searchDaEng.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        EnglishIndex.getComponentDict().clear();
    },
    
});