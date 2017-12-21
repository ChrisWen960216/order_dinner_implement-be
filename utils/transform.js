function decode (strings, set) {
  const stringArray = strings.split(',');
  for (let i = 0; i < stringArray.length; i++) {
    set.add(stringArray[i]);
  }
  // return set;
}

function encode (set) {
  const setArray = [];
  for (const item of set.keys()) {
    setArray.push(item);
  }
  return setArray.toString();
}

exports.decode = decode;
exports.encode = encode;
