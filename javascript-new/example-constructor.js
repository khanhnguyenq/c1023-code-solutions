function ExampleConstructor() {}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof of prototype:', typeof ExampleConstructor.prototype);

const test = new ExampleConstructor();

console.log('value of test:', test);

const testInExample = test instanceof ExampleConstructor;
console.log('instanceof test in ExampleConstructor:', testInExample);
