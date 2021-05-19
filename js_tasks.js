let testData = [1, 2, 1990, 85, 24, 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com', true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{
  'name': 'Vasya',
  'email': 'vasya@example.com',
  'age': 20,
  'skills': { 'php': 0, 'js': -1, 'madness': 10, 'rage': 10 }
}, {
  'name': 'Dima',
  'email': 'dima@example.com',
  'age': 34,
  'skills': { 'php': 5, 'js': 7, 'madness': 3, 'rage': 2 }
}, {
  'name': 'Colya',
  'email': 'colya@example.com',
  'age': 46,
  'skills': { 'php': 8, 'js': -2, 'madness': 1, 'rage': 4 }
}, {
  'name': 'Misha',
  'email': 'misha@example.com',
  'age': 16,
  'skills': { 'php': 6, 'js': 6, 'madness': 5, 'rage': 2 }
}, {
  'name': 'Ashan',
  'email': 'ashan@example.com',
  'age': 99,
  'skills': { 'php': 0, 'js': 10, 'madness': 10, 'rage': 1 }
}, {
  'name': 'Rafshan',
  'email': 'rafshan@example.com',
  'age': 11,
  'skills': { 'php': 0, 'js': 0, 'madness': 0, 'rage': 10 }
}];
let testData4 = [{ 'name': 'Vasya', 'email': 'vasya@example.com', 'age': 20 }, {
  'name': 'Dima',
  'email': 'dima@example.com',
  'age': 34
}, { 'name': 'Colya', 'email': 'colya@example.com', 'age': 46 }, {
  'name': 'Misha',
  'email': 'misha@example.com',
  'age': 16
}, { 'name': 'Ashan', 'email': 'ashan@example.com', 'age': 99 }, {
  'name': 'Rafshan',
  'email': 'rafshan@example.com',
  'age': 11
}, 1, 2, 1990, 85, 24, 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com', true, false, [[[[1, 2, 1990, 85, 24, 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com', true, false, [{
  'name': 'Rafshan',
  'email': 'rafshan@example.com',
  'age': 11
}]]]]]];

//1. Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.

let object = {
  'name': 'Vasya',
  'email': 'vasya@example.com',
  'age': 20,
  'skills': { 'php': 0, 'js': -1, 'madness': 10, 'rage': 10 }
};

function cloneDeep (obj) {
  let objCopy = {};
  let key;
  for (key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

console.log(cloneDeep(object));

//2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть
// все элементы входных массивов.

let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce(function (a, b) {
  return a.concat(b);
});

console.log(result);

//4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

let arr = [1, 2, 3];

let Array = [0].concat(arr);
console.log(Array);

//5. Выведите все элементы массива используя рекурсию.

let array = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog (arr) {
  if (arr.length > 0) {
    console.log(arr.shift());
    recuseLog(arr);
  }
}

recuseLog(array);

//7. Сделать функцию поиска значений в массиве.

function array_find (arr, search) {
  let reg = new RegExp(search)
  console.log(search);
  return arr.find(element =>  {
    return reg.exec(element)
  })
}

let result7_1 = array_find(testData, '/^raf.*/i')
let result7_2 = array_find(testData, "Rafshan")

console.log("task 7",result7_1, result7_2);

//10. Сделать функцию которая возвращает уникальные элементы массива.

function array_unique (arr) {
  let result = [];

  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

let result10 = array_unique(testData.concat(testData2));
console.log(result10);

//12. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а
// другой как значения. Не подходящие ключи массивов должны быть исключены.

function array_combine (arr1, arr2) {
  let object = {};
  for (let i=0; i < arr1.length; i++){
    object[arr1[i]] = arr2[i];
  }
  return object;
}

let result12 = array_combine(testData, testData2);
console.log(result12);