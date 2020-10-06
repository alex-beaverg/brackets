module.exports = function check(str, bracketsConfig) {
  let result = str;
  let etalon = '';
  let pare = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
        pare.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  } 
  while (result !== etalon) {
        etalon = result;
    for (let item of pare) {
                if (result.indexOf(item) !== -1) {
                        result = result.slice(0, result.indexOf(item)) + result.slice(result.indexOf(item) + 2);       
                }
    }
  } 
  if (result === '') return true;
  else return false;
}
