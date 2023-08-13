import { useContext, createContext, useReducer } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export const useDataContext = () => useContext(DataContext);
