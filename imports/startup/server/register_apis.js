

import { PlayersIndex } from '../../api/players/players_index.js';
import { FrenchIndex} from  '../../api/french/french_index.js';
import {DanishFrenchIndex} from '../../api/french/danish_french_index.js';
import { TacticIndex} from '../../api/tactic/tactic_index.js'
import  {EnglishIndex} from '../../api/english/english_index';
import {EngDaIndex} from '../../api/english/englishdanish_index';

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

Meteor.publish('danishenglish', function(searchTerm) {

  return EnglishIndex.search(searchTerm).mongoCursor;

});


Meteor.publish('englishdanish', function(searchTerm) {

  return EngDaIndex.search(searchTerm).mongoCursor;

});