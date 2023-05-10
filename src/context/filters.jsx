import { createContext, useState } from "react";

//crear contexto
export const FiltersContext = createContext();

//crear provider para proveer el contexto
export function FiltersProvider({ children }) {
const [filters, setFilters]= useState({
  category: 'all',
  minPrice: 0
})
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
