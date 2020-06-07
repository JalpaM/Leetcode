// 273. Integer to English Words
/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
Example 1:
Input: 123
Output: "One Hundred Twenty Three"

Example 2:
Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Example 4:
Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/
var numberToWords = num => {
  const map19 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const mapDozens = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const map = {
    '10e8': 'Billion',
    '10e5': 'Million',
    '10e2': 'Thousand',
    '10e1': 'Hundred',
  };

  const word = n => {
    if(n === 0) return [];
    if(n <= 19) return [map19[n]];
    if(n <= 99) return [mapDozens[Math.floor(n / 10)], ...word(n % 10)];

    for(const div of Object.keys(map)) {
      if(Math.floor(n / div) > 0) {
        return [...word(Math.floor(n / div)), map[div], ...word(n % div)];
      }
    }
  }

  return word(num).join(' ') || 'Zero';
}
