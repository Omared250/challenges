/* Coding Challenge #2

Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

GOOD LUCK 😀 */

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

/// My answers

// 1). Loopin array with the for of
const players = game.scored;
let goal = 0;
for (const player of players) {
    goal += 1;
    console.log(`Goal ${goal}: ${player}`);
}

// 2). Loooping and object
const oddValues = Object.values(game.odds);
let totalOdd = 0;
for (const value of oddValues) {
    totalOdd += value
}
console.log(`The average of the odds is: ${(totalOdd / oddValues.length).toFixed(2)}`);

// 3). Print to the console without hardcode
const bayerVictoryOdd = `Odd of victory ${game.team1}: ${game.odds.team1}`
const drawOdd = `Odd of draw: ${game.odds.x}`
const borussiaVictoryOdd = `Odd of victory ${game.team2}: ${game.odds.team2}`
console.log(bayerVictoryOdd);
console.log(drawOdd);
console.log(borussiaVictoryOdd);

//4). Bonus creating an object player names as properties and goals as values