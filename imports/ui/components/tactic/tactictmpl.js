/**
 * Created by 00185769 on 23-11-2017.
 */
import './tactictmpl.html';
//import './danishFrench.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { TacticIndex } from '../../../api/tactic/tactic_index';
import { $ } from 'meteor/jquery';


Template.tactictempl.helpers({

    inputAttributes: function () {

        return { 'class': 'form-control empty', 'noDocumentsOnEmpty':'false', 'placeholder': 'Indtast dansk ord eller forkortelse...' };
    },
    showMoreattr: function() {
        return { 'class': 'btn btn-success'}
    },


    index: () => TacticIndex,
    
    resultsCount: function () {
        return TacticIndex.getComponentDict().get('count');
    },
    test: function () {

        console.log(TacticIndex.search('post', {limit:10}).fetch());

    }
    
})

Template.tactictempl.events({

    'click .btn-danger': function () {
        $('.empty').val('');
        TacticIndex.getComponentDict().clear();
    },

})
