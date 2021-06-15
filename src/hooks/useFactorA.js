import { useMemo } from 'react';
import { getMonthNumber, getWeekdayNumber, getRandomInt, calcFactorA } from './utils';

function useFactorA() {
  const date = useMemo(() => new Date(), []);
  const factorA = useMemo(() => calcFactorA(
    getMonthNumber(date),
    getWeekdayNumber(date),
    getRandomInt(),
  ), [date]);

  return factorA;
}

export default useFactorA;
