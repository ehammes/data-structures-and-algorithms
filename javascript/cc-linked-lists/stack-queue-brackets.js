'use strict';

const { Stack } = require('./stack-and-queue');

function validate(string){
  let newStack = new Stack();
  for (let i = 0; i < string.length; i++){
    if (string[i] === ')' || string[i] === ']' || string[i] === '}' ){
      return false;
    } else {
      if (string[i] === '(' || string[i] === '[' || string[i] === '{' ){
        newStack.push(string[i]);
      } else if (string[i] === ')' || string[i] === ']' || string[i] === '}' ) {
        let top = newStack.peek(this.top);
        if (top === '(' || top === '[' || top === '{'){
          newStack.pop(string[i]);
        } else {
          return false;
        }
        return true;
      }
    }
    return newStack.isEmpty();
  }
}

let bracket = validate('{[]}');
console.log(bracket);

module.exports = validate;
