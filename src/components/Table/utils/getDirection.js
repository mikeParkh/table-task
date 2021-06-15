const getDirection = (average, factorA) => (
  average > factorA 
    ? 'up' : average < factorA 
      ? 'down' : 'horizontal'
);

export default getDirection;
