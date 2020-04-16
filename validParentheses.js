// Valid Parentheses
// Input: {([])} // true
// {]{)}  // false
// {({abvb})}  // true

function peek(stack) {
  return stack[stack.length - 1];
}

function isValidParentheses(s) {
  let stack = [];

  // if 1st character is any of the closing parentheses then return false
  if(s[0] === ')' || s[0] === ']' || s[0] === '}') return false;

  for(const c of s) {
    // skip anything apart from parentheses
    if(c !== '(' && c !== ')' && c !== '[' && c !== ']' && c !== '{' && c !== '}') continue;

    if(c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else if(c === ')' && stack.length !== 0 && peek(stack) === '(') {  // check for stack peek
      stack.pop();
    } else if(c === '}' && stack.length !== 0 && peek(stack) === '{') {
      stack.pop();
    } else if(c === ']' && stack.length !== 0 && peek(stack) === '[') {
      stack.pop();
    } else {
      return false;
    }
  }

  return (stack.length === 0);
}

// OR

function isValidParentheses1(s) {
  const chars = s.split(""), map = {"{":"}", "(":")","[":"]"}, stack = []
  for(let c of chars){
    if(map[c]) stack.push(map[c])
    else if(c != stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
