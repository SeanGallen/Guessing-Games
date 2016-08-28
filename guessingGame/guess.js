var prompt = require('prompt');
var random = Math.random();
var multi = random * 100;
var number = Math.round(multi);
var counter = 0;

prompt.start();


console.log('Guess a number between 1 - 100 \nYou have 4 guesses.\n');
function promptGet() {
  prompt.get(['guess'], function (err, result) {
    if (err) { return onErr(err); }
    var guess = result.guess;
    console.log(guessingGame(guess, number));
  });
};


function onErr (err) {
  console.log(err);
  return 1;
}
promptGet();

function guessingGame(guess, number)
{
  counter++;
  if (counter === 4)
  {
   return ('Thank you for playing. The number was ' + number);
  }
  if (guess < number)
  {
    console.log('Higher ');
    promptGet();
  }
  else if (guess > number)
  {
    console.log('Lower ');
    promptGet();
  }
  else
  {
    return('Great Job! We both picked ' + number);
  }
}

