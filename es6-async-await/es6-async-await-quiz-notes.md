# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  to create an asynchronous function and await for its fulfillment value
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  They are the same.
- When do you use `async`?
  when you want a function to have asynchronous, promised based behavior
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when you want to return the fulfillment value of a promise
  await will still return the expression's value even if the function is synchronous
- How do you handle errors with `await`?
  by chaining a catch() handler or using the try/catch code blocks
- What do `try`, `catch` and `throw` do? When do you use them?
  try tells the program to run the codes inside the block
  if the codes inside the try block is rejected, the code inside the catch code block is ran
  throw is used to create a user-defined error
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await has an easier to understand syntax

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
