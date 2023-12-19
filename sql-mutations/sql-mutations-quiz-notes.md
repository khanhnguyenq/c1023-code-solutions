# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

- How do you add a row to a SQL table?
  insert into "<name_of_table>" ("<name_of_column_1>", "<name_of_column_2>", "<name_of_column_3>", "<name_of_column_4>")
  values ('<value_1>', '<value_2>', <value_3>, '<value_4>');

- How do you add multiple rows to a SQL table at once?
  by inserting another set of values after the initial set of values

- How do you update rows in a database table?
  update "<name_of_table>"
  set "<name_of_column>" = <new_value>
  where "<name_of_column>" = <value_of_column>;

- How do you delete rows from a database table?
  delete
  from "<name_of_table>"
  where "<name_of_row>" = <value_of_row>

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  because it specifies the item that needs to be updated or deleted, else it would update or delete the entire column

- How do you accidentally delete or update all rows in a table?
  by not specific the specific value from the table

- How do you get back the modified row without a separate `select` statement?
  returning \*

- Why did you get an error when trying to delete certain films?
  because the key is referenced in a different table

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
