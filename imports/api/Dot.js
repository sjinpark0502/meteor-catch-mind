import { Mongo } from 'meteor/mongo';

export const Dot = new Mongo.Collection('dot');

Dot.allow({
  update(){
    return true;
  }
});