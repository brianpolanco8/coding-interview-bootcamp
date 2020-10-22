// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function twodArraysDS(arr) {
  let startRow = 0;
  let endRow = 3;
  let startColumn = 0;
  let endColumn = 3;
  let currentHourGlass = [];
  let total = 0;

  for (let i = startColumn; i < 3; i++) {
    currentHourGlass.push([]);
  }

  while (startColumn < endColumn && startRow < endRow) {
    for (let i = startColumn; i < endColumn; i++) {
      currentHourGlass[startRow][i] = arr[startRow][i];
    }
    startRow++;
    total = sumHourGlass(currentHourGlass);
  }
}

function sumHourGlass(arr) {
  let sum = 0;
  sum =
    arr[0][0] +
    arr[0][1] +
    arr[0][2] +
    arr[1][1] +
    arr[2][0] +
    arr[2][1] +
    arr[2][2];
  return sum;
}

const arr = [];
arr.push([1, 1, 1, 0, 0, 0]);
arr.push([0, 1, 0, 0, 0, 0]);
arr.push([1, 1, 1, 0, 0, 0]);
arr.push([0, 0, 2, 4, 4, 0]);
arr.push([0, 0, 0, 2, 0, 0]);
arr.push([0, 0, 1, 2, 4, 0]);

twodArraysDS(arr);
