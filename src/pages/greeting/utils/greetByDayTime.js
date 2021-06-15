const greetByDayTime = time => (
  (time >= 5 && time < 12 && 'Good Morning') ||
  (time >= 12 && time < 16 && 'Good Afternoon') ||
  (time >= 16 && time < 22 && 'Good Evening' ) ||
  (time >= 22 && time < 5 && 'Good Night')
);

export default greetByDayTime;
