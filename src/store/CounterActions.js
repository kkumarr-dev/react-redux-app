const inc = "1";
const desc = "-1";
const addCount = () => ({
  type: inc,
});
const subCount = () => ({
  type: desc,
});

export { inc, desc, addCount, subCount };
