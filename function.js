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

module.exports = {
  returnAiueo,
  getDayOfWeek
};