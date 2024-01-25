export function validateEmail(email: string): boolean {
  const newEmail = email.split('');
  if (newEmail.includes('@') && newEmail.includes('.') && newEmail[0] !== '@') {
    return true;
  }
  return false;
}
