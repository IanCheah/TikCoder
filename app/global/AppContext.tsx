import React, { createContext, useContext, useState } from 'react';

// Define the type of the context value
type MyContextType = {
  phone: string;
  setPhone: (value: string) => void;
  token: string;
  setToken: (value: string) => void;
  userID: string;
  setUserID: (value: string) => void;
  userName: string;
  setUserName: (value: string) => void;
}

// Create a context object
const AppContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: any) => {
  const [phone, setPhone] = useState('');
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('');
  const [userName, setUserName] = useState('');

  const contextValue: MyContextType = {
    phone,
    setPhone,
    token,
    setToken,
    userID,
    setUserID,
    userName,
    setUserName,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};