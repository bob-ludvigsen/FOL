import { French } from './french.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const FrenchIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { FR: 1 };
    },
  }),
  name: 'FrenchIndex',
  collection: French,
  fields: ['FR','FRForkortelse'],
  defaultSearchOptions: {
    limit: 50
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});

