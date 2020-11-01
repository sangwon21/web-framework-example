import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'nam', age: 20 });

const userEdit = new UserEdit(document.querySelector('#root'), user);

userEdit.render();

console.log(userEdit);
