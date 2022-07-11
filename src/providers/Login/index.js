import { createContext, useContext, useState } from 'react';

const LoginContext = createContext('email');

export const LoginProvider = ({children}) => {
  const [email, setEmail] = useState('');

  return (
    <LoginContext.Provider
      value={{email, setEmail}}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => useContext(LoginContext);