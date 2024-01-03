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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="password"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={passWord}
          onChange={(event) => setPassWord(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
