array = [2, '*', 3, '^', 2, '+', 4, '/', 3];
result = calculator (array);
document.querySelector('#result').innerHTML = result;

function calculator (tokenArray) {
  console.log ('Initial:');
  console.log (tokenArray);

  //Calculate first level: exponents (^)
  tokenArray = calclevel (tokenArray, ['^']);
  console.log ('After ' + ['^'] + ' processing:');
  console.log (tokenArray);

  //Calculate second level: multiplication & division (*, /)
  tokenArray = calclevel (tokenArray, ['*', '/']);
  console.log ('After ' + ['*', '/'] + ' processing:');
  console.log (tokenArray);

  //Calculate second level: addition & subtraction (+, -)
  tokenArray = calclevel (tokenArray, ['+', '-']);
  console.log ('After ' + ['+', '-'] + ' processing:');
  console.log (tokenArray);

  return tokenArray[0];
}

function calclevel (oldArray, check) {
  // check should be an array of tokens to check against
  // like ['-', '+'] -> must be valid actions in calculateNums ()
  newArray = [];
  for (index = 0; index < oldArray.length; index++) {
    currentToken = oldArray[index];
    actionToken = oldArray[index+1];
    if (check.includes (actionToken)) {
      index += 2
      nextToken = oldArray[index];
      calculation = calculateNums (currentToken, nextToken, actionToken);
      newArray.push (calculation);
    }
    else {
      newArray.push (currentToken);
    }
  }
  return newArray;
}

function calculateNums (num1, num2, action) {
  switch (action) {
    case '^':
      return Math.pow(currentToken, nextToken);
    case '*':
      return currentToken * nextToken;
    case '/':
      return currentToken / nextToken;
    case '+':
      return currentToken + nextToken;
    case '-':
      return currentToken - nextToken;
  }
}
