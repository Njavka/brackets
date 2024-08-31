module.exports = function check(str, bracketsConfig) {
  let length = str.length / 2;

  for (let i = 0; i < length; i++) {
    bracketsConfig.forEach((arr) => {
      let pair = arr[0] + arr[1];
      while (str.includes(pair)) {
        str = str.replace(pair, "");
      }
    });
  }
  return !str.length;
};