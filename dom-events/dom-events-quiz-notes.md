# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to debug and check if our code is giving the value that we want

- What is the purpose of events and event handling?
  to execute code once the event happens

- Are all possible parameters required to use a JavaScript method or function?
  no some parameters can be optional

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener

- What is a callback function?
  a callback function is a function that is being called as an argument to another function

- What object is passed into an event listener callback when the event fires?
  a defined function?

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the event target is the element on the html page that fires off the event

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  handleclick is being used is an arugment

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
