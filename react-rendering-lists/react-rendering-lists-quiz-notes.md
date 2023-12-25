# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  when the only difference between the items are the data

- Why is it important for React components to be data-driven?
  so it can be reused across different components that has the same type of data

- Where in the component code would a list of React components typically be built?
  as a local variable in the App component

- What `Array` method is commonly used to create a list of React components?
  map

- Why do components in a list need to have unique keys?
  the keys will match with the coressponding items, in case of sorting, elements get inserted or deleted

- What is the best value to use as a "key" prop when rendering lists?
  a stable ID based on the data

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
