// sort case insensitive
/*
DevChallenge.answer = [
  "fJwZlTdPc",
  "t",
  "nQaBhQg",
  "dGj",
  "iGm",
  "dKdRbBu",
  "t",
  "oEj",
  "Aq",
  "ByDl"
].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
*/
// ----------------------------------------------------------------------------
// Combining arrays
// I've put two arrays with random strings in DevChallenge.data.
// I am looking for a single list which contains one element from a,
// then one from b, and so forth.
/*
var d = {
  a: ['Lq','m','LbMbFq','tIdOrYv','pAlCoIzJc','g','UbVwCgJo','hEmEmRpNx','g','XsMnBm'],
  b: ['Gl','HrRiNi','yFjMg','PdZkZnKhYh','j','Ue','DmHwEi','Nw','l','Wg'],
}

var fn = function(arr1, arr2) {
  var result = [];

  for (var i = 0; i <= arr1.length + arr2.length; i++) {
    arr1[i] && result.push(arr1[i])
    arr2[i] && result.push(arr2[i])
  }

  return result;
}

var d = {
	a: ['aaron', 'johann', 'louise', 'alfred'],
  b: ['craig', 'dan', 'martin']
}

const reducer = (memo, a , i) => {
	memo.splice(2 * i, 0, a);
  return memo;
};

console.log(d.a.reduce(reducer, d.b));
*/
// ----------------------------------------------------------------------------
// Julius Caesar protected his confidential information from his enemies by encrypting it.
// Caesar rotated every letter in the string by a fixed number K.
// This made the string unreadable by the enemy.
// You are given a string S and the number K. What is the enrcypted string?
// K: 96
// S: Caesar salad - aka Et tu, Brute?
// Example:
// If the string is 'BAZ-zeg' and K=2, the encoded string is 'DCB-bgi'.
// Note that only the letters are encrypted while symbols like '-' are untouched.
// 'B' becomes 'D' when rotated twice,
// 'Z' becomes 'B',
// '-' remains the same because only letters are encoded,
// 'z' becomes 'b' when rotated twice.
/*
var fn = (text, shift) => {
  return text
  .replace(/[A-Z]/g, a =>
    String.fromCharCode(65 + (a.charCodeAt(0) - 65 + shift) % 26))
  .replace(/[a-z]/g, a =>
    String.fromCharCode(97 + (a.charCodeAt(0) - 97 + shift) % 26));
}

console.log(fn('Caesar salad - aka Et tu, Brute?', 96));
*/
// ----------------------------------------------------------------------------
/*
Imagine that I have three counters X, Y and Z.
They are coloured red, white and blue, but not necessarily in this order.

One, but only one, of the following statements is true:
X is blue
Y is not blue
Z is not white

Can you work out the colours of the counters?
Your answer should be an array containing the colours of the counters in the order:
X, Y, Z

Assuming all are true one by one -> Z is not white is true so ["white", "blue", "red"]
*/
// ----------------------------------------------------------------------------
/*
In the next challenge you'll get a random string in DevChallenge.data
Your task is to answer how many at least two character long substrings does it contain which has maximum two different letters.

Example:
    'aabaccb'
        ['aa', 'aab', 'ab', 'aaba', 'aba', 'ba', 'ac', 'acc', 'cc', 'ccb', 'cb'] -> 11
    'abcabc'
        ['ab', 'bc', 'ca', 'ab', 'bc'] -> 5

Your string is: caddadaead
 */
/*
const str = 'caddadaead';
let arr = [], tmp = '', amount = 0;

for(let i=0;i<=str.length;i++) {
	// push the first string that has 2 chars
	if (str.substr(i, 2).length === 2) arr.push(str.substr(i, 2));

  tmp = str.substr(i, 3);
  amount = tmp.split("").sort().join("").match(/(.)\1+/g);
  if (tmp.length === 3 && amount && amount.length === 1) arr.push(tmp);

  tmp = str.substr(i, 4);
  amount = tmp.split("").sort().join("").match(/(.)\1+/g);
  if (tmp.length === 3 && amount && (amount.length === 1 || amount.length === 2)) arr.push(tmp);
}

console.log(arr.length);
 */
