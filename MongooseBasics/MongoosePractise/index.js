const mongoose = require('mongoose');
const nodemon = require('nodemon');

// movieApp---> movieSchema------>Movie----->some variable

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
   console.log('Connection success');
   
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// it will creates a collection movies 


// we can see this in node shell 
// steps:
// node
// .load index.js
// amadeus
// amadeus.save()

// mongosh
// use movieApp
// debug.movies.find()

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });


Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })


