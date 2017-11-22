import { English } from './english.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const EnglishIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { score: -1 };
    },
  }),
  collection: English,
  fields: ['engelsk', 'fork_uk'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
