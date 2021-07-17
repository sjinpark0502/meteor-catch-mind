import { Meteor } from 'meteor/meteor';
import { Dot } from './Dot';
import { Messages } from './Messages';

Meteor.methods({
  'update.dot'(_id, isSelect) {
    Dot.update(
      {
        _id: _id
      },
      {
        $set: {
          isSelect: !isSelect
        }
      }
    )
  },
  'insert.message'(userId, name, message) {
    Messages.insert(
      {
        userId,
        name,
        message,
        createdAt: new Date(),
      }
    );
  },
  'clear.dots'() {
    Dot.update({},{$set:{isSelect:false}},{multi:true});
  },
  'clear.chat'() {
    Messages.remove({});
  }
});