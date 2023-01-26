import {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext(null);
export const AuthContextProvider = ({children}): JSX.Element => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState<boolean>(true);
  function onAuthStateChange(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subs = auth().onAuthStateChanged(onAuthStateChange);
    return subs;
  }, []);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{user, initializing}}>
      {children}
    </AuthContext.Provider>
  );
};
