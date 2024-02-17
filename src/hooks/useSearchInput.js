import { useState, useEffect } from 'react';
import sampleData from "../sample_table_data.json";

// Filter Hook
export function useSearchInput(initialValue) {
  const [searchInput, setSearchInput] = useState(initialValue);
// State of all Data
const [data, setData] = useState(sampleData);

// handles onChange event for Search Input
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // Filters sample data array depending on categories that match the search input value
  useEffect(() => {
    const filteredData = sampleData.filter((d) => d.category.includes(searchInput));
    setData(searchInput.length > 0 ? filteredData : sampleData);
  }, [searchInput]);

  return [searchInput, handleChange, data];
}
