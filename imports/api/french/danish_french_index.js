import { French } from './french.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const DanishFrenchIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { DK: 1 };
    },

  }),
  name: 'DanishFrenchIndex',
  collection: French,
  fields: ['DK','DKForkortelse'],
  defaultSearchOptions: {
    limit: 20
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});

