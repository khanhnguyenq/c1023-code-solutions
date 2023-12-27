import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const length = password.length;

  const includeDigit = /[0-9]/.test(password);

  const includeCapital = /[A-Z]/g.test(password);

  function updateError() {
    if (
      length === 0 ||
      length < 8 ||
      (length >= 8 && !includeDigit) ||
      (length >= 8 && !includeCapital)
    ) {
      return <ImCross className="invalid" />;
    } else {
      return <FaCheck className="valid" />;
    }
  }

  function updateTextColor() {
    if (
      length === 0 ||
      length < 8 ||
      (length >= 8 && !includeDigit) ||
      (length >= 8 && !includeCapital)
    ) {
      return 'invalid';
    } else {
      return 'valid';
    }
  }

  function updateText() {
    return length === 0
      ? 'A password is required.'
      : length < 8
      ? 'Your password is too short.'
      : length >= 8 && !includeDigit
      ? 'Your password needs a number.'
      : length >= 8 && !includeCapital
      ? 'Your password needs a capital letter.'
      : '';
  }

  return (
    <div className="flex row-to-column">
      <label htmlFor="password">Password:</label>
      <div className="flex padding-top-10">
        <input
          type="text"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className="padding-left">{updateError()}</span>
      </div>
      <p className={updateTextColor()}>{updateText()}</p>
    </div>
  );
}
