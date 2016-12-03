module.exports = function(num, includeCents) {
  if(typeof includeCents === 'undefined') {
    includeCents = true;
  }
     
  num = parseFloat(num);
  var isNeg = num < 0;
  var val = Math.abs(num);
  var parts = (val+'').split('.');
  var dollars = parts[0];
  var cents = parts[1];
  
  if(!dollars) {
    dollars = '0';
  }
  if(!cents) {
    cents = '00';
  }
  
  cents += '000';
  var third = cents.slice(2,3);
  if(parseInt(third) >= 5) {
    cents = (parseInt(cents.slice(0,2))+1)+''; 
  }
  cents = cents.slice(0, 2);
  

  // To add commas, split the dollar-number into an array of numbers, reverse
  // the array, add a comma after every third digit, reverse it back, and
  // re-join the digits
  dollars = ('' + dollars)
  .split('').reverse()
  .map(function (c, i) {
    return c + (i > 0 && i % 3 === 0 ? ',' : '');
  })
  .reverse().join('');

  return (isNeg ? '-' : '')+'$'+dollars+(includeCents ? '.'+cents : '');
};
