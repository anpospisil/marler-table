import { useState, useEffect } from 'react';

// Filter Hook
export function useFilterData(initialData) {
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    setFilteredData(initialData);
   }, [initialData]);

  const filter = (value) => {
    if (value) {
      setFilteredData([...initialData.filter((d) => d.category.toLowerCase().includes(value.toLowerCase()))]);
    } else {
      setFilteredData(initialData);
    }
  };
  
  return { filteredData,setFilteredData, filter };
}

