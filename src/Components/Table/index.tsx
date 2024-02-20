import { useEffect } from 'react';

import { useSortData } from "../../hooks/useSortData";
import { useFilterData } from "../../hooks/useFilterData";
import { TableRow } from "../TableRow";
import { TableProps } from "./types";
import sampleData from "../../sample_table_data.json";

export const Table = () => {
    // Custom Filter Hook
    const { filteredData, filter } = useFilterData(sampleData);
  // Custom Sorting Hook, Default order is "ASC"
  const { order, sortedData, setSortedData, updateOrder } = useSortData(filteredData);


  // Sets types for headers
  type Keys = (keyof (typeof sampleData)[0])[] & {};

  // Defines table headers by the keys of the first entry
  const headers = Object.keys(sampleData[0]) as Keys;

  console.log(headers);

// Call useSortData whenever filteredData changes
  useEffect(() => {  
    setSortedData(filteredData)
  }, [filteredData]);

  return (
    
    <div className="container">
      <div className="search-container">
        <label>
          Search Categories:
          <input
            type="text"
            placeholder="Type here..."
            onChange={(event) => filter(event.target.value)}
          />
        </label>
        {/* Triggers the useSortData hook by updating the order */}
        <button onClick={updateOrder}>
          Sort Price: {order === "asc" ? "ASC" : "DESC"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {/* Displays table headers */}
            {headers.map((header, i) => {
              return <th key={i}>{header.toString()}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* Displays table rows */}
          {sortedData.map((d: TableProps) => {
            return (
              <TableRow
                key={d.id}
                id={d.id}
                name={d.name}
                quantity={d.quantity}
                category={d.category}
                price={d.price}
                description={d.description}
              />
            );
          })}
        </tbody>
      </table>
      {!filteredData.length && (
        <p className="error-message">
          * No results found, please adjust your search query
        </p>
      )}
    </div>
  );
};
