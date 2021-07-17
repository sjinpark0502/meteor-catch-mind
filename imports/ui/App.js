import './App.html';
import './App.css';
import './dot.js';
import { Dot } from '../api/Dot';
import { Messages } from '../api/Messages';
import { Meteor } from 'meteor/meteor';

Template.mainContainer.onCreated(function(){
  const userId = localStorage.getItem('userId');
  if( !userId ) {
    localStorage.setItem('userId', Random.id());
  }
  this.subscribe("dot");
  this.subscribe("messages");
});

Template.mainContainer.helpers({
  dots (){
    return Dot.find({}, { sort: { idx: 1 } });
  },
  messages (){
    return Messages.find({}, { sort: { createdAt: 1 }});
  },
  isOwnMessage (){
    return this.userId === localStorage.getItem('userId')? 'message-own':'message-other';
  }
});

Template.mainContainer.events({
  "keypress .message-input"(e, t) {
    if (e.which === 13) {
      const userId = localStorage.getItem('userId');
      const name = t.find('.name-input').value;
      const message = e.currentTarget.value;
      // Meteor.call('insert.message', userId, name? name:'unknown', message);
      Messages.insert({
        userId,
        name: name? name:'unknown',
        message,
        createdAt: new Date(),
      });
      e.currentTarget.disabled = true;
      setTimeout(function(){
        e.currentTarget.disabled = false;
      },3000)
    }
  },
});