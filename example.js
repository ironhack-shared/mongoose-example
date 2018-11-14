const mongoose = require('mongoose');

const Cat = require('./models/Cat')


mongoose.connect('mongodb://localhost/exampleApp')


// const kitty = new Cat({ name: 'Ironhacker' });
//
// kitty.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });


Cat.find({}, (err, cats) => {
  // cats is an array of Cat instances
  cats.forEach((cat)=> {
    console.log(' --> cat: ', cat.name);
  });
})
