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
      <label htmlFor="usernameUnCon">Username:</label>
      <input
        type="text"
        id="usernameUnCon"
        name="username"
        placeholder="username"
      />

      <label htmlFor="passwordUnCon">Password:</label>
      <input
        type="password"
        id="passwordUnCon"
        name="password"
        placeholder="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
