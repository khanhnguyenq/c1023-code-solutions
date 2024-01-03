import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const length = password.length;

  const hasDigit = /[0-9]/.test(password);

  const hasCapital = /[A-Z]/g.test(password);

  let errorIcon = <ImCross className="invalid" />;
  let errorColor = 'invalid';
  let error = '';

  if (length === 0) {
    errorIcon = <ImCross className="invalid" />;
    errorColor = 'invalid';
    error = 'A password is required.';
  } else if (length < 8) {
    errorIcon = <ImCross className="invalid" />;
    errorColor = 'invalid';
    error = 'Your password is too short.';
  } else if (length >= 8 && !hasDigit) {
    errorIcon = <ImCross className="invalid" />;
    errorColor = 'invalid';
    error = 'Your password needs a number.';
  } else if (length >= 8 && !hasCapital) {
    errorIcon = <ImCross className="invalid" />;
    errorColor = 'invalid';
    error = 'Your password needs a capital letter.';
  } else {
    errorIcon = <FaCheck className="valid" />;
    errorColor = 'valid';
    error = '';
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
        <span className="padding-left">{errorIcon}</span>
      </div>
      <p className={errorColor}>{error}</p>
    </div>
  );
}
