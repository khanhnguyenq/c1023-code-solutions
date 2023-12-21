# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  hooks set data between render and triggers react to re-render with new data

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  hooks can only be called at the top level of your components or your own hooks
  hooks can't be called inside conditions, loops, or nested functions

- What is the purpose of state in React?
  to toggle between data without refreshing the page?

- Why can't we just maintain state in a local variable?
  local variables do not persist between renders and changes to local variables will not trigger renders

- What two actions happen when you call a `state setter` function?
  update the variable and trigger React to render the component again

- When does the local `state variable` get updated with the new value?
  after the component is re-rendered

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
