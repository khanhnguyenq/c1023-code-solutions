import { useContext } from 'react';
import { AppContext } from './AppContext';

export function useUser() {
  const appContextValues = useContext(AppContext);
  if (!appContextValues)
    throw new Error('hook cannot not be used with this component');
  return appContextValues;
}
