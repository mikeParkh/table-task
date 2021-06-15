const setPhraseByWeekday = (weekdayNumber) => (
  (weekdayNumber - 1) % 2 === 0 ? 'Do it now...' : 'Relax...'
);

export default setPhraseByWeekday;
