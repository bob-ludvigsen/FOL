/**
 * Created by bob on 25/09/14.
 */

Template.createfrench.events({

    'click .opret':function(evt, tmpl){
        evt.preventDefault();
        var Kategori = tmpl.find('#input-cat').value;
        var DK = tmpl.find('#input-dk').value;
        var FR = tmpl.find('#input-fr').value;
        var DKForkortelse = tmpl.find('#input-fork-dk').value;
        var FRForkortelse = tmpl.find('#input-fork-fr').value;
        var Ordklasse = tmpl.find('#input-klasse').value;
        var Ejefald = tmpl.find('#input-ejefald').value;
        var Flertal = tmpl.find('#input-plural').value;
        var Ukategori1 = tmpl.find('#input-ukat1').value;
        var Ukategori2 = tmpl.find('#input-ukat2').value;
        var Ukategori3 = tmpl.find('#input-ukat3').value;

        Meteor.call('createfrench', Kategori, DK, FR, DKForkortelse, FRForkortelse, Ordklasse, Ejefald, Flertal, Ukategori1, Ukategori2, Ukategori3);

        Router.go('/list_french');

    },
    'click .cancel':function(evt, tmpl) {

        Router.go('/list_french')

    },



});
