/**
 * Created by bob on 25/09/14.
 */
import {English} from  '../../../imports/api/english/english';

Template.editeng.helpers({

     word: function() {
        var quizId = Session.get('qId');
        return English.findOne({_id: quizId});

    }

});



Template.editeng.events({


    'click .opret':function(evt, tmpl){
        evt.preventDefault();

        var tacId = Session.get('qId');
        var dk = tmpl.find('#input-dk').value;
        var eng = tmpl.find('#input-eng').value;
        var fork = tmpl.find('#input-fork').value;
        var dkfork = tmpl.find('#input-fork-dk').value;
        var dkSort = tmpl.find('#input-dk').value.toLowerCase();
        var engSort = tmpl.find('#input-eng').value.toLowerCase();


        Meteor.call('editeng',tacId, dk, eng, fork, dkfork, dkSort, engSort);

        Router.go('/list_english');
        //alert(options.correct);
    },
    'click .cancel':function(evt, tmpl) {

        Router.go('/list_english')

    }


});
