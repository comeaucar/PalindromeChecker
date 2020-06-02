function palindrome(str) {
//create regex to only match characters & integers//
  var regX = /[A-Za-z0-9]+/gi;
  var newStr = str.toLowerCase();
  var arrOne = newStr.match(regX);
  //initialize the strings that will be evaluated//
  var joinedStr  = arrOne.join('');
  var evalStr = '';

//loop through backwards adding each letter to the new str//
  for(let i = joinedStr.length - 1; i >= 0; i--){
    evalStr += joinedStr[i];
  }

  //if the string forward is the same as backwards then return true//
  if(joinedStr === evalStr){
    return true
  }

  return false;
}
