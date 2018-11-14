const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp')

const User = require('./models/User')


// User.create({ name: 'Alice', password:"ironhack2018", job: 'Architect' }, function (err, user) {
//   if (err) {
//       console.log('An error happened:', err);
//   } else {
//       console.log('The user is saved and its value is: ', user);
//   }
// });

// The same code as above but with a Promise version
User.create({ name: 'Alice', password:"ironhack2018", job: 'Architect' })
  .then(user => { console.log('The user is saved and its value is: ', user) })
  .catch(err => { console.log('An error happened:', err) })
  .finally(() => mongoose.connection.close())
