import { Meteor } from 'meteor/meteor';
import { Dot } from '/imports/api/Dot';
import { Messages } from '/imports/api/Messages';

Meteor.publish("dot", function(){
  return Dot.find({},{sort: {idx: 1}});
});

Meteor.publish("messages", function(){
  return Messages.find({},{ sort: {createdAt: -1}, limit: 12 });
});