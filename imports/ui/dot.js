import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import './dot.html';
import { Dot } from '../api/Dot';

Template.dot.helpers({
  color() {
    return this.isSelect? 'black':'white';
  }
});

Template.dot.events({
  "click .dot"(e, t) {
    Dot.update({_id:this._id},{$set:{isSelect:!this.isSelect}});
  }
});