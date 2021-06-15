const serializeDataByID = data => (
  data.reduce((acc, item) => {
    return { ...acc, [item.id]: item }
  }, {})
);

export default serializeDataByID;
