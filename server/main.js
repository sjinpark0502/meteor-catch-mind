import { Meteor } from 'meteor/meteor';
import '/imports/api/server/publications';
import '/imports/api/methods';
import { Dot } from '/imports/api/Dot';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Dot.findOne({ idx: 1 })) {
    let size = 50 * 50;
    for( let i=0; i<size; i++ ) {
      Dot.insert({ idx: i, isSelect: false });
    }
  }
});
