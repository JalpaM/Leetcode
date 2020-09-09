var flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "_" : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

// {a_b_c: 1, a_e_0_f: 3, a_e_0_g: 4, d: 1, h_0: 2, h_1: 4, h_2: 6, h_3: 7}
console.log(
  flattenObject({
    a: { b: { c: 1 }, e: [{ f: 3, g: 4 }] },
    d: 1,
    h: [2, 4, 6, 7],
  })
);
