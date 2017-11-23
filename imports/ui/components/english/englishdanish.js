/**
 * Created by 00185769 on 23-11-2017.
 */
import './englishdanish.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { English } from '../../../api/english/english.js';
import { EngDaIndex } from '../../../api/english/englishdanish_index';
import { $ } from 'meteor/jquery';


Template.searchEngDa.helpers({

    inputAttributes: function () {

        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast dansk ord eller forkortelse...' };
    },
    showMoreattr: function() {
        return { 'class': 'btn btn-success'}
    },
    index: () => EngDaIndex,

    resultsCount: function () {
        return EngDaIndex.getComponentDict().get('count');
    },
    
    
    
})
    
    
    
