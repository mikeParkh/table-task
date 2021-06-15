const getAverage = data => data.reduce((acc, val, i, data) => {
  return i + 1 === data.length ? Math.floor((acc + val) / data.length) : Math.floor(acc + val)
}, 0);

export default getAverage;
