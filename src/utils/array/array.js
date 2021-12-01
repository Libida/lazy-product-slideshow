export const splitOnChunks = (arr, size = 1) => {
  if (!arr) {
    return null;
  }

  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};
