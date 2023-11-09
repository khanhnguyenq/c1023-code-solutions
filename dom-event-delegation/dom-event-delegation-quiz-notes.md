# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the event.target targets the html element that we are applying our addEventListener to
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  because the eventlistener analyzes bubbled events to find a match on the child elements

- What DOM element property tells you what type of element it is?
  the tagName?

- What does the `element.closest()` method take as its argument and what does it return?
  it takes selectors as arguments and it returns the closest ancestor element or itself

- How can you remove an element from the DOM?
  element.remove

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding a parent element to the clickable DOM elements and add the eventListener to the parent element

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
