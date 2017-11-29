/**
 * Created by 00185769 on 24-11-2017.
 */

import './englishToDanish.html';
//import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
//import { EasySearch } from 'meteor/easy:search';
import { EngDaIndex } from '../../../api/english/englishdanish_index';
import { $ } from 'meteor/jquery';


Template.engtodanish.helpers({

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

Template.engtodanish.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        EngDaIndex.getComponentDict().clear();
    },

});