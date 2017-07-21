/* Write a program that will convert a dollar amount to the number of coins 
that make up the amount. Use the common American coins of quarters, 
dimes, nickels, and pennies. */

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
console.log("hello");



function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {}

let money = 0.67;

   money = money * 100;

  let quarters = parseInt(money/25);
    money = money - (25 * quarters);

  let dimes = parseInt(money/10);
    money = money - (10 * dimes);

  let nickles = parseInt(money/5);
    money = money - (5 * nickles);

  let pennies = parseInt(money/1);

coinPurse.quarters = quarters;
coinPurse.dimes = dimes;
coinPurse.nickles = nickles;
coinPurse.pennies = pennies;

return coinPurse;
}

var coins = coinCounter();
console.log(coins);


// .quarter, .dimes, etc are properties of the coinPurse object
 





