# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the element that includes the "tab active" class

- What is the affect of setting an element to `display: none`?
  it hides the element

- What does the `element.matches()` method take as an argument and what does it return?
  it takes a selector and returns a boolean

- How can you retrieve the value of an element's attribute?
  getAttribute

- At what steps of the solution would it be helpful to log things to the console?
  every steps :D
  to name a few below.
  log to see if your variable declarations are correct
  log to see if event.target.matches return the correct value
  log to see what value is being return for getAttribute

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  query for each individual tabs, then change the className on each click of the element?

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  query for the class "tab active" and change the className on every click?

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
