# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  no it does not. it creates the element but we need to add by using append or appendChild

- How do you add an element as a child to another element?
  .appendChild

- What do you pass as the arguments to the `element.setAttribute()` method?
  the name of attribute and value of what that attribute should be

- What steps do you need to take in order to insert a new element into the page?
  create a new element, if necessary give it an attribute and/or textContent, add the created element by using append or appendChild

- What is the `textContent` property of an element object for?
  the textContent property gets the value of the element's text or set the text value

- Name two ways to set the `class` attribute of a DOM element.
  setAttribute('class', 'class value')
  query for the element then set the className

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  to resuse the function whenever needed
  save time typing out the function code block?

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
