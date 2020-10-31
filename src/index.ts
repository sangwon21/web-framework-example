import { User } from './models/User'

const user = new User({ name: 'name', age: 12 })

console.log(user.get('name'))
console.log(user.get('age'))
