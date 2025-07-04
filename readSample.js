const fs = require('fs');

function returnAiueo() {
  return 'あいうえお';
}

function getDayOfWeek(date) {
  // 日付オブジェクトを作成
  const dateObj = new Date(date);
  
  // 曜日の配列（0=日曜日, 1=月曜日, ...）
  const dayNames = [
    '日曜日',  // Sunday
    '月曜日',  // Monday
    '火曜日',  // Tuesday
    '水曜日',  // Wednesday
    '木曜日',  // Thursday
    '金曜日',  // Friday
    '土曜日'   // Saturday
  ];
  
  // getDay()で曜日のインデックス（0-6）を取得
  const dayIndex = dateObj.getDay();
  
  return dayNames[dayIndex];
}

console.log(returnAiueo()); // 追加

// 日付から曜日を取得する例
console.log('今日の曜日:', getDayOfWeek(new Date()));
console.log('2024年1月1日の曜日:', getDayOfWeek('2024-01-01'));
console.log('2024年12月25日の曜日:', getDayOfWeek('2024-12-25'));

fs.readFile('txt/sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('ファイルの読み込み中にエラーが発生しました:', err);
    return;
  }
  console.log('ファイルの内容:');
  console.log(data);
});
