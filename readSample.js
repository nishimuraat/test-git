const fs = require('fs');

function returnAiueo() {
  return 'あいうえお';
}

function getDayOfWeek(date) {
  // Create date object
  const dateObj = new Date(date);
  
  // Array of day names (0=Sunday, 1=Monday, ...)
  const dayNames = [
    'Sunday',
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  // Get day index (0-6) using getDay()
  const dayIndex = dateObj.getDay();
  
  return dayNames[dayIndex];
}

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
