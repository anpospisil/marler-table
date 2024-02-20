import { useState, useEffect } from "react";

// Filter Hook: Manages data filtering based on category.
export function useFilterData(initialData) {
  // State to store filtered data
  const [filteredData, setFilteredData] = useState(initialData);

  // Filter function: Updates filteredData based on the provided value
  const filter = (value) => {
    if (value) {
      // Apply case-insensitive category filter and update filteredData
      setFilteredData([
        ...initialData.filter((d) =>
          d.category.toLowerCase().includes(value.toLowerCase())
        ),
      ]);
    } else {
      // If no value provided, reset to the original data
      setFilteredData(initialData);
    }
  };

  // Return filteredData state, setFilteredData function, and filter function
  return { filteredData, setFilteredData, filter };
}
