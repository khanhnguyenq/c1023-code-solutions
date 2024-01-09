# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  scope is determined globally or locally when a function is created

- What allows JavaScript functions to "remember" variables from their surroundings?
  closure

- What values does a closure contain?
  all the values created in scope at the time of creation of the function

- When is a closure created?
  when the function is created

- How can you tell if a function will be created with a closure?
  all functions are created with a closure. however, closure is more relevant when a function returns a function

- In React, what is one important case where you need to know if a closure was created?
  when we are using the useCallback and useEffect hooks?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';

 1: function createCounter() {
 2:   let counter = 0
 3:   const myFunction = function() {
 4:     counter = counter + 1
 5:     return counter
 6:   }
 7:   return myFunction
 8: }
 9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)

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
