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
  var palindromeString;

  if(digits === 2){
    twoDigitPalindromeFactor();
  } else if ( digits === 3){
    palindromeThreeDigAlt();
  } else if (digits === 4){
    palindromeFourDigAlt();
  } else if (digits === 5){
    palindromeFiveDigAlt();
  }

  function twoDigitPalindromeFactor(){
      for (var i = 99; i >= 10; i--) {
        for (var j = 99; i >= 10; j--) {
          palindromeNumber = i*j;
          palindromeString = String(palindromeNumber);

          if(palindromeString.charAt(0) === palindromeString.charAt(palindromeString.length-1)){
            if(palindromeString.charAt(1) === palindromeString.charAt(palindromeString.length-2)){
              factor_0 = i;
              factor_1 = j;
              return;

            }
          }
        };
      };
  }

  function palindromeThreeDigAlt(){
    var palindromeArray = [];
    for (var outest = 9; outest >= 0; outest--) {
      for (var mid =  9; mid >= 0; mid--) {
        for (var inner = 8; inner >= 0; inner--) {
          var palindromeArray = [];
          palindromeArray.push(outest,mid,inner,inner,mid,outest)
          palindromeNumber = Number(palindromeArray.join(''));
          for (var fact = 999; fact >= 100; fact--) {
             if(palindromeNumber%fact === 0 && palindromeNumber/fact<=999){
                factor_0 = fact;
                factor_1 = palindromeNumber/fact;
                return;
              }
          };
        };
      }
    }
  }

  function palindromeFourDigAlt(){
    var palindromeArray = [];
    for (var outest = 9; outest >= 0; outest--) {
      for (var mid =  9; mid >= 0; mid--) {
        for (var inner = 9; inner >= 0; inner--) {
          for (var innest = 8; innest >= 0; innest--) {

            var palindromeArray = [];
            palindromeArray.push(outest,mid,inner,innest,innest,inner,mid,outest)
            palindromeNumber = Number(palindromeArray.join(''));
            for (var fact = 9999; fact >= 1000; fact--) {
               if(palindromeNumber%fact === 0 && palindromeNumber/fact<=9999){
                  factor_0 = fact;
                  factor_1 = palindromeNumber/fact;
                  return;
                }
            };
          }
        };
      }
    }
  }

  function palindromeFiveDigAlt(){
    var palindromeArray = [];
    for (var outest = 9; outest >= 0; outest--) {
      for (var mid =  9; mid >= 0; mid--) {
        for (var inner = 9; inner >= 0; inner--) {
          for (var innest = 9; innest >= 0; innest--) {
            for (var innerest = 8; innerest >= 0; innerest--) {

            var palindromeArray = [];
            palindromeArray.push(outest,mid,inner,innest,innerest,innerest,innest,inner,mid,outest)
            palindromeNumber = Number(palindromeArray.join(''));
            for (var fact = 99999; fact >= 10000; fact--) {
               if(palindromeNumber%fact === 0 && palindromeNumber/fact<=99999){
                  factor_0 = fact;
                  factor_1 = palindromeNumber/fact;
                  console.log(palindromeNumber)
                  console.log(factor_0,factor_1)
                  return;
                }

              }
            };
          }
        };
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};