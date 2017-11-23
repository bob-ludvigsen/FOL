import { PlayersIndex } from '../../api/players/players_index.js';
import {FrenchIndex} from  '../../api/french/french_index.js';
import {DanishFrenchIndex} from  '../../api/french/danish_french_index.js';
import {EngDaIndex} from  '../../api/english/englishdanish_index.js';
Tracker.autorun(() => {
  //console.log(PlayersIndex.search('Hopper', { limit: 20 }).fetch());EngDaIndex
  ///console.log(FrenchIndex.search('venstre', {limit:10}).fetch());
  //console.log(DanishFrenchIndex.search('venstre', {limit:10}).fetch());
    console.log(EngDaIndex.search('gun', {limit:10}).fetch());
});
