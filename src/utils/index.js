export const convert = (p) => {
  return new Promise((resolve) => {
    p.then((res) => {
      resolve([null, res]);
    }).catch((err) => {
      resolve([err, null]);
    });
  });
};
