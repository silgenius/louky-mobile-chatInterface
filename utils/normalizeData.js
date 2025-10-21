const normalizeData = (item) => {
    let data;
    let allIds = [];
    if (Array.isArray(item)) {
      data = item.reduce((acc, curr) => {
        allIds.push(curr.id);
        return { [curr.id]: curr, ...acc };
      }, {});
      return { data, allIds };
    }
    return {};
  };
  
  export default normalizeData;