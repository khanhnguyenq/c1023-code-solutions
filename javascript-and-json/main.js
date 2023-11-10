const library = [
  {
    isbn: '0-375-82668-8',
    title: 'Eragon',
    author: 'Christopher Paolini',
  },
  {
    isbn: '0-688-16317-3',
    title: 'Shutter Island',
    author: 'Dennis LeHane',
  },
  {
    isbn: '9780151660346',
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
  },
];

console.log('library value:', library);
console.log('library typeof:', typeof library);

const jsonLibrary = JSON.stringify(library);

console.log('jsonLibrary:', jsonLibrary);
console.log('jsonLibrary typeof:', typeof jsonLibrary);

const string = '{"idNumber":1023,"studentName":"Khanh Nguyen"}';

console.log('string value:', string);
console.log('string typeOf:', typeof string);

const jsonString = JSON.parse(string);

console.log('jsonString value:', jsonString);
console.log('jsonString typeof:', typeof jsonString);
