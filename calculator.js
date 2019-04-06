calculator = function (tokenArray) {
  console.log ('Initial:');
  console.log (tokenArray);

  //Calculate first level: exponents (^)
  newArray = [];
  for (index = 0; index < tokenArray.length; index++) {
    token = tokenArray[index]
    if ((tokenArray[index+1]) == '^') {
      index += 2
      nextToken = tokenArray[index];
      newArray.push (Math.pow (token, nextToken));
    }
    else {
      newArray.push (token);
    }
  }
  tokenArray = newArray;
  console.log ('After ^ processing:');
  console.log (tokenArray);

  //Calculate second level: multiplication & division (*, /)
  newArray = [];
  for (index = 0; index < tokenArray.length; index++) {
    token = tokenArray[index]
    if ((action = tokenArray[index+1]) == '*' || action == '/') {
      index += 2
      nextToken = tokenArray[index];
      if (action == '*') {
        newArray.push (token * nextToken);
      }
      else { //must be '/'
        newArray.push (token / nextToken);
      }
    }
    else {
      newArray.push (token);
    }
  }
  tokenArray = newArray;
  console.log ('After *,/ processing:');
  console.log (tokenArray);

  //Calculate second level: addition & subtraction (+, -)
  newArray = [];
  for (index = 0; index < tokenArray.length; index++) {
    token = tokenArray[index]
    if ((action = tokenArray[index+1]) == '+' || action == '-') {
      index += 2
      nextToken = tokenArray[index];
      if (action == '+') {
        newArray.push (token + nextToken);
      }
      else { //must be '-'
        newArray.push (token - nextToken);
      }
    }
    else {
      newArray.push (token);
    }
  }
  tokenArray = newArray;
  console.log ('After +,- processing:');
  console.log (tokenArray);

  return tokenArray[0];
};

array = [2, '*', 3, '^', 2, '+', 4, '/', 3];
result = calculator (array);
document.querySelector('#result').innerHTML = result;
