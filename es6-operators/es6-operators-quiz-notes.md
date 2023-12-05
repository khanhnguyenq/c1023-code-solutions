# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && and || can be used to compare values. Outside of if statements, these operators will return the value of the operand instead of a boolean value
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  short-circuit evaluation refers to how the second arguments will only be evaluated if the first statement is true or the entire statement is true. In case of &&, the code will only be executed if all of the statements are true. For ||, the code will execute if one of the statement is true.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? will assigns the value of the right side of the operator to the variable if the left side of the operator evaluates to null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it takes a condition and two expressions. the first expresion will execute if the condition evaluates to true, else the second expression will execute.
  it can be used interchangly with if/else?

- What is the `?.` (optional chaining) operator? When would you use it?
  it returns the value of the property only if that property exists.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  the spread syntax is used when all elements need to be included in a new array or object

- What data types can be spread into an array? Into an object?
  only iterable values can be spread into an array
  all primitives can be spread into objects

- How does spread syntax differ from rest syntax?
  spread expands an array into its elements, while rest collects the elements and condenses them

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
