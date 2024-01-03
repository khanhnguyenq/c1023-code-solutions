import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('form values:', formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" placeholder="username" />
      </label>

      <label>
        Password:
        <input type="password" name="password" placeholder="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
