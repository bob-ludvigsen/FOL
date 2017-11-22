import { PlayersIndex } from '../../api/players/players_index.js';
import { FrenchIndex} from  '../../api/french/french_index.js';

Meteor.publish('test-search', function (searchTerm) {
  const { userId } = this;

  return PlayersIndex.search(searchTerm, { userId }).mongoCursor;
});

Meteor.publish('test-french', function(searchTerm) {


  return FrenchIndex.search(searchTerm).mongoCursor;

})
