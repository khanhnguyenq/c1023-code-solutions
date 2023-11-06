# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to see if our code is returning the value we are expecting

- What is a "model"?
  all page content as objects that can be modified

- Which "document" is being referred to in the phrase Document Object Model?
  main entry point to the page

- What is the word "object" referring to in the phrase Document Object Model?
  every html tag, nested tags, and text inside of tag that are on the DOM tree

- What is a DOM Tree?
  the DOM tree shows the content of the webpage based on their relationship with the other elements

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector and getElementById

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  because queryselector returns a live object. By placing it at the bottom, it can target all of the elements.

- What does `document.querySelector()` take as its argument and what does it return?
  a css selectors and it returns the entire element, the tag and the content

- What does `document.querySelectorAll()` take as its argument and what does it return?
  html tags and css selectors, it returns a nodelist of all applicable elements

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
