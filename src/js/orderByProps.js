
export default function orderByProps(obj, filterProp) {
  const currentObj = { ...obj };
  const withPropArr = [];
  const withOutPropArr = [];

  if (filterProp) {
    filterProp.forEach((item) => {
      withPropArr.push({ key: item, value: currentObj[item] });
      delete currentObj[item];
    });
  }

  for (const item in currentObj) {
    if (currentObj) {
      withOutPropArr.push({ key: item, value: currentObj[item] });
    }
  }

  withOutPropArr.sort((prev, next) => (prev.key > next.key ? 1 : -1));

  return [...withPropArr, ...withOutPropArr];
}
