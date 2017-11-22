import { French } from './french.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const FrenchIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { Oversat: -1 };
    },

  }),
  collection: French,
  fields: ['DK', 'Oversat'],
  defaultSearchOptions: {
    limit: 50
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});

