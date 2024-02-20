import { useState } from "react";

// Sorting Hook: Manages data sorting based on a specified order.
export function useSortData(initialData, initialOrder = "asc") {
  // State to store sorted data, initialized with initialData
  const [sortedData, setSortedData] = useState(initialData);

  // State to store the sorting order, initialized with initialOrder
  const [order, setOrder] = useState(initialOrder);

  // Sorting function: Sorts the data based on the specified value and order
  const sort = (value) => {
    // Determine the sorting direction based on the current order
    const returnValue = order === "desc" ? 1 : -1;
    // Update sortedData by applying the sorting logic
    setSortedData([
      ...sortedData.sort((a, b) => {
        const aValue =
          typeof a[value] === "number"
            ? a[value]
            : String(a[value]).toLowerCase();
        const bValue =
          typeof b[value] === "number"
            ? b[value]
            : String(b[value]).toLowerCase();
        // Compare values based on the sorting direction
        return aValue > bValue ? returnValue * -1 : returnValue;
      }),
    ]);
  };
  // Function to update the sorting order and trigger a sort by 'price'
  const updateOrder = () => {
    // Toggle the order between 'asc' and 'desc'
    const updatedOrder = order === "asc" ? "desc" : "asc";
    // Update the order state
    setOrder(updatedOrder);

    // Perform a sort based on the 'price' field after updating the order
    sort("price");
  };
  // Return order state, sortedData state, setSortedData function, and updateOrder function
  return { order, sortedData, setSortedData, updateOrder };
}
