/**
 * Created by bob on 25/09/14.
 */
import {Tactic} from '../../../imports/api/tactic/tactic';
Template.edittactic.rendered = function () {


};

Template.edittactic.helpers({

     word: function() {
        var quizId = Session.get('qId');
        return Tactic.findOne({_id: quizId});
        console.log(Tactic.findOne({_id: quizId}));
    }

});



Template.edittactic.events({


    'click .opret':function(evt, tmpl){
        evt.preventDefault();

        var tacId = Session.get('qId');
        var ord = tmpl.find('#input-ord').value;
        var abbreviation = tmpl.find('#input-fork').value;
        var def = tmpl.find('#input-definition').value;
        var nato = tmpl.find('#input-nato').value;
        var remarks = tmpl.find('#input-remarks').value;
        var rev = tmpl.find('#input-rev').value;

        Meteor.call('edittactic',tacId, ord, abbreviation, def, nato, remarks, rev);

        Router.go('/list_tactic');
        //alert(options.correct);
    },
    'click .cancel':function(evt, tmpl) {

        Router.go('/list_tactic')

    },

        '.question, keypress':function(evt, tmpl) {

        var max = 500;
        var len = tmpl.find('#input-definition').value.length;
        if (len >= max) {
            $('#charNum').text(' Du har ikke flere karakterer tilbage');
        } else {
            var char = max - len;
            $('#charNum').text(char + ' karakterer tilbage');
        }
    },

 
});
