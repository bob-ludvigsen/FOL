import { English } from './english.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const EngDaIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { value: 1 };
    },
  }),
  name: 'EngDaIndex',
  collection: English,
  fields: ['engelsk', 'fork_uk'],
  defaultSearchOptions: {
    limit: 50
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
