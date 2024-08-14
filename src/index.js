module.exports = function check(str, bracketsConfig) {
  const bracketsObj = {};
  const open = 0;
  const close = 1;
  const same = 3;
  for (let index in bracketsConfig){
    const pairBrackets = bracketsConfig[index];
    if (pairBrackets[0] == pairBrackets[1]){
      bracketsObj[pairBrackets[0]] = {type: same, pair: pairBrackets[1]};
    } else {
      bracketsObj[pairBrackets[0]] = {type: open, pair: pairBrackets[1]};
      bracketsObj[pairBrackets[1]] = {type: close, pair: pairBrackets[0]};
    }
  }
  const possibleBrackets = Object.keys(bracketsObj);
  const stack = [];
  for (ch of str){
    if (possibleBrackets.includes(ch)){
      if (bracketsObj[ch].type == open){
        stack.push(ch);
      } else if (bracketsObj[ch].type == same){
        stack.at(-1) == ch ? stack.pop() : stack.push(ch); 
      } else if (stack.length > 0){
        let previousBracket = stack.at(-1);
        if (previousBracket != bracketsObj[ch].pair) return false;
        stack.pop();
      }
    } else return false;
  }
  return stack.length == 0 ? true : false;
}
