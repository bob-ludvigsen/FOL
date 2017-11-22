import { Meteor } from 'meteor/meteor';
import { Players } from '../../api/players/players.js';
import { English } from '../../api/english/english.js';
import { French } from '../../api/french/french.js';
import { Tactic } from '../../api/tactic/tactic.js';

if (French.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('nested/fransk.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        French.insert(words);
    });

}
/*
if (English.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('eng.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        English.insert(words);
    });

}

if (Tactic.find().count() === 0) {

    // create sample polls
    var sampleWords = JSON.parse(Assets.getText('taktik.json'));

    // loop over each sample poll and insert into database
    _.each(sampleWords, function(words) {
        Tactic.insert(words);
    });

}
*/



/*
var first_names = [
      "Ada",
      "Grace",
      "Marie",
      "Carl",
      "Nikola",
      "Claude",
      "Peter",
      "Stefan",
      "Stephen",
      "Lisa",
      "Christian",
      "Barack"
    ],
    last_names = [
      "Lovelace",
      "Hopper",
      "Curie",
      "Tesla",
      "Shannon",
      "Müller",
      "Meier",
      "Miller",
      "Gaga",
      "Franklin"
    ],
    categories = ["Genius", "Geek", "Hipster", "Idler"];

  Meteor.startup(function () {
    if (Players.find().count() < 100) {
      // ten thousand docs
      for (var i = 0; i < 10 * 1000; i++) {
        console.log(i + ' doc indexed');
        Players.insert({
          name: Random.choice(first_names) + ' ' + Random.choice(last_names),
          score: Math.floor(Random.fraction() * 1000 / Random.fraction() / 100),
          category: Random.choice(categories)
        });
      }

      console.log('done!');
    }
  });
*/