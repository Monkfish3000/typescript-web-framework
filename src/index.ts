import { User } from './models/User';

const user = new User({ id: 6, name: 'William', age: 100 });

user.on('save', () => {
  console.log(user);
});

user.save();
