export const filterData = (data, query) => {
  return data.filter((row) => {
    let a = false;
    for (let key of Object.keys(row)) {
      a = a || row[key].toString().toLowerCase().includes(query.toLowerCase());
    }
    return a;
  });
};
