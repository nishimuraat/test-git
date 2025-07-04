const fs = require('fs');
const { returnAiueo, getDayOfWeek } = require('./function');

console.log(returnAiueo()); // 追加

// Get day of week from date examples
console.log('Today\'s day of week:', getDayOfWeek(new Date()));
console.log('Day of week for 2024-01-01:', getDayOfWeek('2024-01-01'));
console.log('Day of week for 2024-12-25:', getDayOfWeek('2024-12-25'));

fs.readFile('txt/sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('ファイルの読み込み中にエラーが発生しました:', err);
    return;
  }
  console.log('ファイルの内容:');
  console.log(data);
});
