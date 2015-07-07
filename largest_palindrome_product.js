/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */

module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  calculateHigestFactors(digits)

  function calculateHigestFactors(number){
    var array = [];
    var n = number;
    while(n>0){
      array.push(9);
      n--
    }
    var maxFactor = Number(array.join(''));
    var minFactor =Math.pow(10,digits)/10;
    for (var i=maxFactor ; i>0; i--){

      var firstHalfArray = i.toString().split('');
      palindromeNumber = Number(firstHalfArray.join('').concat(firstHalfArray.reverse().join('')))
      for (var fact = maxFactor; fact >= minFactor; fact--) {
        if(palindromeNumber%fact === 0 && palindromeNumber/fact<=maxFactor){
          factor_0 = fact;
          factor_1 = palindromeNumber/fact;
          return;
        }
      }
    }
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};