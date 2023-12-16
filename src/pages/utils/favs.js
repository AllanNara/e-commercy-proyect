export function sortByPriority(arr) {
  return arr.sort((a, b) => {
    if (a.stock === 1 && b.stock !== 1) return -1;
    else if (a.stock !== 1 && b.stock === 1) return 1;

    if (a.status === false && b.status === true) return 1;
    else if (a.status === true && b.status === false) return -1;
    return 0;
  });
}