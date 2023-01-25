import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// случайное число от min до (max+1)
export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const removeFirstElemToLastElemArray = (arr) => {
  let removed = arr.splice(0, 1);
  arr.push(removed[0]);
  return arr;
}

export const removeFirstElem = (arr) => {
  arr.splice(0, 1);
  return arr;
}

// перемешать элементы массива
export const mixArrayElements = (arr) => {
  let len = arr.length - 1;
  while (len) {
    let index = randomInteger(0, len);
    let tempElement = arr[len];
    arr[len] = arr[index];
    arr[index] = tempElement;
    len -= 1;
  }
  return arr;
}
