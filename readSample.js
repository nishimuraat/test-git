const fs = require('fs');

function returnAiueo() {
  return 'あいうえお';
}

console.log(returnAiueo()); // 追加

fs.readFile('txt/sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('ファイルの読み込み中にエラーが発生しました:', err);
    return;
  }
  console.log('ファイルの内容:');
  console.log(data);
});
