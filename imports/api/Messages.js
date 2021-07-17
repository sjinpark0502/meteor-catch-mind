import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Messages.allow({
  insert(){
    return true;
  }
});