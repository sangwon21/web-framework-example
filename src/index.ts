import { User } from './models/User';

const user = new User({ name: 'name', age: 12 });

user.on('change', () => {
    console.log('hello');
});

console.log(user);
