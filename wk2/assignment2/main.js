const myGames = [
    { name: 'Jigsaw Puzzle', type: 'Puzzle', numberOfPlayers: '3 or 4 Players ', rating: 'Five Stars', shortDescription:'Put together tiny cardboard peices to make a larger image.' },
    { name: 'Telestrations', type: 'Board Game', numberOfPlayers: 'Up to 8 Players ', rating: 'Five Stars', shortDescription: 'A funny group game that combines the skills of Pictionary and the confusion of Telephone' },
    { name: 'Cards Against Humanity', type: 'Card Game', numberOfPlayers: '4 or More Players ', rating: 'Five Stars', shortDescription: 'A funny, Absurd card game for adults. Best played while drinking.' }
];
console.log(myGames);

const userpick = prompt(" Pick a number between 1 and 3 and I will choose a game for you!");

alert('you selected the game ' + myGames[userpick - 1].name + ' that is a ' + myGames[userpick - 1].type + ' with ' + myGames[userpick - 1].numberOfPlayers + 'with a rate of ' + myGames[userpick - 1].rating + ' and is a ' + myGames[userpick - 1].shortDescription);