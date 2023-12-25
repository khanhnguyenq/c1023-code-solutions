import { useState } from 'react';
import { FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('state:', { userName, passWord });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameCon">Username:</label>
        <input
          type="text"
          name="password"
          id="usernameCon"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <label htmlFor="passwordCon">Password:</label>
        <input
          type="text"
          name="password"
          id="passwordCon"
          value={passWord}
          onChange={(event) => setPassWord(event.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  );
}
