//問題１
const arrays = [2, 4, 7, 5, 4, 3, 8];
const same = arrays.filter(function(x, i, self) {
  return self.indexOf(x) === i;
});
console.log(same);
//問題２
function leapYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return "うるう年です";
  }
  return "うるう年ではありません";
}

console.log(leapYear(2001));