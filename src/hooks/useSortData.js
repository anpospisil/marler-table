import { useState } from 'react';

// Sorting Hook
export function useSortData(initialData, initialOrder = "asc") {
  const [sortedData, setSortedData] = useState(initialData);
  // State of Order
  const [order, setOrder] = useState(initialOrder);

  const sort = (value) => {
    const returnValue = order === 'desc' ? 1 : -1;
    
    setSortedData([...sortedData.sort((a, b) => {
      const aValue = typeof a[value] === 'number' ? a[value] : String(a[value]).toLowerCase();
      const bValue = typeof b[value] === 'number' ? b[value] : String(b[value]).toLowerCase();
      return aValue > bValue ? returnValue * -1 : returnValue;
    })]);
  }
  const updateOrder = () => {
    const updatedOrder = order === 'asc' ? 'desc' : 'asc';

    setOrder(updatedOrder);
    sort('price');
   
  };
  return { sortedData, updateOrder };
}