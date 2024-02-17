import { useState } from 'react';
import sampleData from "../sample_table_data.json";

// Sorting Hook
export function useSortData(initialValue, sortByColumn) {

  // State of all Data
  const [data, setData] = useState(sampleData);
  // State of Price
  const [order, setOrder] = useState(initialValue);

  // Toggles the order between ASC or DESC
  const updateOrder = () => {
    setOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
  };

  // Sorts table data depending on the current order
  const sortedData = [...data].sort((a, b) => {
    return order === "ASC"
      ? a[sortByColumn] - b[sortByColumn]
      : b[sortByColumn] - a[sortByColumn];
  }); 

  return [order, sortedData, updateOrder];
}

