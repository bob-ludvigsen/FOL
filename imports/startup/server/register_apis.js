

import { PlayersIndex } from '../../api/players/players_index.js';
import { FrenchIndex} from  '../../api/french/french_index.js';
import {DanishFrenchIndex} from '../../api/french/danish_french_index.js';
import { TacticIndex} from '../../api/tactic/tactic_index.js'

Meteor.publish('test-search', function (searchTerm) {
  const { userId } = this;

  return PlayersIndex.search(searchTerm, { userId }).mongoCursor;
});

Meteor.publish('test-french', function(searchTerm) {


  return FrenchIndex.search(searchTerm).mongoCursor;

});


Meteor.publish('danishfrench', function(searchTerm) {


  return DanishFrenchIndex.search(searchTerm).mongoCursor;

});

Meteor.publish('tactic-index', function(searchTerm) {

  return TacticIndex.search(searchTerm).mongoCursor;

});