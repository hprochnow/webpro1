const myMovies = ['Thunder Road', 'Uncut Gems', 'The Revenant', 'What did Jack Do?', 'What about Bob?'];
console.log(myMovies);

const yourMovie = prompt('What is your favorite movie?');
myMovies.push(yourMovie);
console.log(myMovies.toString());

alert ('Our favorite movies are: ' + myMovies);
