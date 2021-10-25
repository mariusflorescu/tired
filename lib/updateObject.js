const updateObject = (updatedItem, list) => {
  let updatedList = list;
  const objIndex = list.findIndex((obj) => obj.key === updatedItem.key);
  updatedList[objIndex].text = updatedItem.text;

  return updatedList;
};

export default updateObject;
