process.stdin.resume();
process.stdin.setEncoding('ascii');
var util = require('util');

var randomNumber = Math.round((Math.random())*100);
var counter = 0;
console.log('Guess a number between 1 - 100. \nYou have 4 guesses.\n');
process.stdin.on('data', function (text) {
  getGuess(text);
});

function done() {
  console.log('Thank you for playing. The number was ' + randomNumber + '.');
  process.exit();
}

function getGuess(guess)
{
  counter++;
  if (counter === 4 && parseInt(guess) !== randomNumber)
  {
    done();
  }
  if (guess < randomNumber)
  {
    console.log('Higher');
  }
  else if (guess > randomNumber)
  {
    console.log('Lower');
  }
  else
  {
    console.log('Great Job! We both picked ' + randomNumber + '.');
    process.exit();
  }
}

