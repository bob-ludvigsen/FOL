/**
 * Created by bob on 25/09/14.
 */

Template.createtactic.events({
   
    'click .image': function(evt, tmpl) {
        evt.preventDefault();
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = tmpl.find('#image').files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);

        if(type == ("image/png") || ("image/gif") || ("image/bmp") || ("image/jpg")){
            var reader = new FileReader();
            reader.onload = function(e) {
               // alert('billede uploaded');
                Quizzes.update({_id: quizId},{ $set:{logo : e.target.result}});
                //return false;
            };
            reader.readAsDataURL(file);
        }
        else{
            alert('Du skal vælge en png, gif, bmp eller jpg fil');
        }

    },

    'click #delete-logo': function(evt, tmpl){
        evt.preventDefault();
        var quizId = this._id;
        var r = confirm("Vil du virkelig slette dette billede?");
        if (r == true) {
            //alert('fjern billede med id: ' + quizId)
            Quizzes.update({_id: quizId},{ $unset:{logo : ""}})
        }

    },

    'click .correct': function(evt, tmpl) {
        evt.preventDefault();
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = tmpl.find('#audio-correct').files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);
        if(type === "audio/mp3"){
        var reader = new FileReader();
        reader.onload = function(e) {
            //console.log("id er: " + quizId + "  sti er: " + e.target.result);
            //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
            Quizzes.update({_id: quizId},{ $set:{audiocorrect : e.target.result}})
            //return false;
        };
        reader.readAsDataURL(file);
    }
        else{
            alert('Du skal vælge en mp3 fil');
        }

    },
    'click #audio-correct-delete': function(evt, tmpl){
        evt.preventDefault();
        var quizId = this._id;
        var r = confirm("Vil du virkelig slette denne lydfil?");
        if (r == true) {
            //alert('fjern lydfil med id: ' + quizId)
            Quizzes.update({_id: quizId},{ $unset:{audiocorrect : ""}})
        }

    },
    'click .wrong': function(evt, tmpl) {
        evt.preventDefault();
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = tmpl.find('#audio-wrong').files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);
        if(type === "audio/mp3"){
            var reader = new FileReader();
            reader.onload = function(e) {
                //console.log("id er: " + quizId + "  sti er: " + e.target.result);
                //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
                Quizzes.update({_id: quizId},{ $set:{audiowrong : e.target.result}})
                //return false;
            };
            reader.readAsDataURL(file);
        }
        else{
            alert('Du skal vælge en mp3 fil');
        }

    },
    'click #audio-wrong-delete': function(evt, tmpl){
        evt.preventDefault();
        var quizId = this._id;
        var r = confirm("Vil du virkelig slette denne lydfil?");
        if (r == true) {
            //alert('fjern lydfil med id: ' + quizId)
            Quizzes.update({_id: quizId},{ $unset:{audiowrong : ""}})
        }

    },
    'click .audio-question': function(evt, tmpl) {
        evt.preventDefault();
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = tmpl.find('#audio-question').files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);
        if(type === "audio/mp3"){
            var reader = new FileReader();
            reader.onload = function(e) {
                //console.log("id er: " + quizId + "  sti er: " + e.target.result);
                //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
                Quizzes.update({_id: quizId},{ $set:{audioquestion : e.target.result}})
                //return false;
            };
            reader.readAsDataURL(file);
        }
        else{
            alert('Du skal vælge en mp3 fil');
        }

    },
    'click #audio-question-delete': function(evt, tmpl){
        evt.preventDefault();
        var quizId = this._id;
        var r = confirm("Vil du virkelig slette denne lydfil?");
        if (r == true) {
            //alert('fjern lydfil med id: ' + quizId)
            Quizzes.update({_id: quizId},{ $unset:{audioquestion : ""}})
        }

    },
    'click .opret':function(evt, tmpl){
        evt.preventDefault();


        var ord = tmpl.find('#input-ord').value;
        var abbreviation = tmpl.find('#input-fork').value;
        var def = tmpl.find('#input-definition').value;
        var nato = tmpl.find('#input-nato').value;
        var remarks = tmpl.find('#input-remarks').value;
        var rev = tmpl.find('#input-rev').value;

        Meteor.call('createtactic', ord, abbreviation, def, nato, remarks, rev);

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

  /*  'dragover #audio-correct' : function(e, t) {
        e.preventDefault();
        $(e.currentTarget).addClass('dragover');
    },

    'dragleave #audio-correct' : function(e, t) {
        $(e.currentTarget).removeClass('dragover');
    },

    'change #audio-correct' : function(e, tmpl) {
        e.preventDefault();

        //var files = e.target.files || e.dataTransfer.files;
        //var fileList = e.dataTransfer.files;
        //console.log(files[0]);
        //alert(files[0].name);
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = e.target.files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);
        if(type === "audio/mp3"){
            var reader = new FileReader();
            reader.onload = function(e) {
                //console.log("id er: " + quizId + "  sti er: " + e.target.result);
                //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
                Quizzes.update({_id: quizId},{ $set:{audiocorrect : e.target.result}})
                //return false;
            };
            reader.readAsDataURL(file);
        }
        else{
            alert('Du skal vælge en mp3 fil');
        }



    },
    'dragover #audio-wrong' : function(e, t) {
        e.preventDefault();
        $(e.currentTarget).addClass('dragover');
    },

    'dragleave #audio-wrong' : function(e, t) {
        $(e.currentTarget).removeClass('dragover');
    },

    'change #audio-wrong' : function(e, tmpl) {
        e.preventDefault();

        //var files = e.target.files || e.dataTransfer.files;
        //var fileList = e.dataTransfer.files;
        //console.log(files[0]);
        //alert(files[0].name);
        var quizId = this._id;
        //var quizId =  this.data._id;
        var file = e.target.files[0];
        var type = file.type;
        //console.log('Filtypen er: ' +  file.type);
        if(type === "audio/mp3"){
            var reader = new FileReader();
            reader.onload = function(e) {
                //console.log("id er: " + quizId + "  sti er: " + e.target.result);
                //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
                Quizzes.update({_id: quizId},{ $set:{audiowrong : e.target.result}})
                //return false;
            };
            reader.readAsDataURL(file);
        }
        else{
            alert('Du skal vælge en mp3 fil');
        }



    },
    'dragover #audio-question' : function(e, t) {
    e.preventDefault();
    $(e.currentTarget).addClass('dragover');
},

'dragleave #audio-question' : function(e, t) {
    $(e.currentTarget).removeClass('dragover');
},

'change #audio-question' : function(e, tmpl) {
    e.preventDefault();

    //var files = e.target.files || e.dataTransfer.files;
    //var fileList = e.dataTransfer.files;
    //console.log(files[0]);
    //alert(files[0].name);
    var quizId = this._id;
    //var quizId =  this.data._id;
    var file = e.target.files[0];
    var type = file.type;
    //console.log('Filtypen er: ' +  file.type);
    if(type === "audio/mp3"){
        var reader = new FileReader();
        reader.onload = function(e) {
            //console.log("id er: " + quizId + "  sti er: " + e.target.result);
            //Posts.update({_id: postID},{ $set:{logo:e.target.result}});
            Quizzes.update({_id: quizId},{ $set:{audioquestion : e.target.result}})
            //return false;
        };
        reader.readAsDataURL(file);
    }
    else{
        alert('Du skal vælge en mp3 fil');
    }



},*/

    'click .deleteQuestionAudio':function() {
        if (confirm('Er du sikker på du vil slette?')) {
            var quizId = Session.get('qId');

            var data = Quizzes.findOne({_id:quizId});
            var url = data.audioquestion;
            //alert('virker det?  '+ quizId )
            Meteor.call('deleteFile', url, quizId);
            Quizzes.update({_id: quizId},{ $unset:{audioquestion : ""}})

        }
    },
    'click .deleteQuestionWrong':function() {
        if (confirm('Er du sikker på du vil slette?')) {
            var quizId = Session.get('qId');

            var data = Quizzes.findOne({_id:quizId});
            var url = data.audiowrong;
            //alert('virker det?  '+ url )
            Meteor.call('deleteFile', url, quizId);
            Quizzes.update({_id: quizId},{ $unset:{audiowrong : ""}})

        }
    },
    'click .deleteImage':function() {
        if (confirm('Er du sikker på du vil slette?')) {
            var quizId = Session.get('qId');

            var data = Quizzes.findOne({_id:quizId});
            var url = data.audiowrong;
            //alert('virker det?  '+ url )
            Meteor.call('deleteFile', url, quizId);
            Quizzes.update({_id: quizId},{ $unset:{logo : ""}})

        }
    }

});
