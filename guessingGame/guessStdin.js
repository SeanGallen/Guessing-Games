process.stdin.resume();
process.stdin.setEncoding('ascii');
var util = require('util');

var randomNumber = Math.round((Math.random())*100);
var counter = 0;
console.log('Guess a number between 1 - 100. \nYou have 4 guesses.\n');
console.log(randomNumber);
process.stdin.on('data', function (text) {
  getGuess(text);
});

function done() {
  console.log('Thank you for playing. The number was ' + randomNumber + '.');
  process.exit();
}

function getGuess(input)
{
  counter++;
  var guess = Number(input);
  if (counter === 4 && guess !== randomNumber)
  {
    done();
  }
  if (isNaN(guess))
  {
    console.log('This is not a number. Try Again.');
  }
  else if (guess < 1 || guess > 100)
  {
    console.log('Your guess is out of the range of 1 - 100. Try Again.');
  }
  else if (guess < randomNumber)
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

