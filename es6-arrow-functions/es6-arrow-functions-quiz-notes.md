# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const/let (optional name of function) = (optional parameters) => {code block}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  without the curly braces, the function only allows one expression. With the curly braces, the function can evaluate multiple expressions.

- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal in parentheses

- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    an anonymous function that takes no parameters and return the value 42
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    function
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    an anonymous function that takes 1 parameter, y, and logs 'the template literal with the variable 4 times y being interpolated' to the console
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    the template literal with the variable 4 times y being interpolated
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    function
  - When does the arrow function's code get executed?
    when arguement is passed into the arrow function that is being passed into bar()
- How does the value of `this` differ between standard functions and arrow functions?
  an arrow function does not create its own this context

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
