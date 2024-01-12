import { useContext } from 'react';
import { AppContext } from './AppContext';

export function useUser() {
  const AppContextValues = useContext(AppContext);
  if (!AppContextValues)
    throw new Error('hook cannot not be used with this component');
  return AppContextValues;
}
