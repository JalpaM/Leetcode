var flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '_' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});


console.log(flattenObject({ a: { b: { c: 1 }, e: [{f: 3, g: 4}] }, d: 1, h:[2,4,6,7] }));
