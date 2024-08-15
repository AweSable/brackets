module.exports = function check(str, bracketsConfig) {
  const bracketsPairs = bracketsConfig.map(el => el[0] + el[1]);
  while (bracketsPairs.some(el => str.includes(el))){
    bracketsPairs.map(el => str = str.replace(el, ''));
  }
  return str ? false : true;
}
