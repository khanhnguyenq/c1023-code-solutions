# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when it first renders and after every re-render

- What is a React Effect?
  a react effect is a hook that allows you to perform side effects in your components, such as updating the DOM

- When should you use an Effect and when should you not use an Effect?
  an Effect should not be used if the component does not need to perform side actions

- When do Effects run?
  the effects run on every render

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  all the states that are used within the effect.
  in an array as the second arguement to the useeffect

- Why would you want to clean up from an Effect?
  to reduce memory leaks

- How do you clean up from an Effect?
  by adding a return funnction inside the useEffect

- When does the cleanup function run?
  on unmount and every re-render with changed dependancies

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
