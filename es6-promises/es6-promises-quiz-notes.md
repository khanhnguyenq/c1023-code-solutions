# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  the processes of how a promise is executed, where:
  the promise task is put onto the event queue
  the code is executed until the function ends
  the Event Loop runs
  the Promise task is removed from the Event Queue and executed
  then handler for successful task
  catch for error
  finally handler for all cases
- What are the three states a Promise can be in?
  pending - initial state
  fulfilled - operation was completed sucessfully
  rejected - operation failed
- How do you handle the fulfillment of a Promise?
  .then
- How do you handle the rejection of a Promise?
  .catch

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
