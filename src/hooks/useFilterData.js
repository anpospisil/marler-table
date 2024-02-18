import { useState } from 'react';

// Filter Hook
export function useFilterData(initialData) {
  const [filteredData, setFilteredData] = useState(initialData);

  const filter = (value) => {
    if (value) {
      setFilteredData([...initialData.filter((d) => d.category.toLowerCase().includes(value.toLowerCase()))]);
    } else {
      setFilteredData(initialData);
    }
  };
  
  return { filteredData, filter };
}

