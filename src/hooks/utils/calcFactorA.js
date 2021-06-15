const calcFactorA = (monthNumber, weekdayNumber, randomNumber) =>
  Math.floor((monthNumber + weekdayNumber) / randomNumber);

export default calcFactorA;