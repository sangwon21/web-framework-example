import { User } from './models/User';

const user = new User({ name: 'name', age: 12 });

user.set({ name: 'newname', age: 50 });

console.log(user.get('name'));
console.log(user.get('age'));
