import { Tactic } from './tactic.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const TacticIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { score: -1 };
    },
  }),
  collection: Tactic,
  fields: ['ord', 'fork','definition','nato_translation','rev'],
  defaultSearchOptions: {
    limit: 50
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
