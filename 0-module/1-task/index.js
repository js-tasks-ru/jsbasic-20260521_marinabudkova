// Складываем два числа
function sum(m, n) {
  return m+n;
}
// Для тестов в Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sum;
}