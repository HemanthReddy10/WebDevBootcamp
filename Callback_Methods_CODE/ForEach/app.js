const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// function print(num){
//     console.log(num);
// }
// numbers.forEach(print);
//      (or)
// numbers.forEach(function(num){
//     console.log(num);
// })

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// Before for loop people always used forEach
// for (let el of numbers) {
//     console.log(el);
// }

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// Type-1: old
movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

// Type-2: new
for (let movie of movies) {
  console.log(`${movie.title} - ${movie.score}/100`);
}
