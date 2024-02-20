import { useEffect } from "react";
import { useSortData } from "../../hooks/useSortData";
import { useFilterData } from "../../hooks/useFilterData";
import { TableRow } from "../TableRow";
import { TableProps } from "./types";
import sampleData from "../../sample_table_data.json";

// Table Component: Displays a table with dynamic headers and sortable rows.
export const Table = () => {
  
 // Custom Filter Hook: Use this hook to filter data based on category.
  const { filteredData, filter } = useFilterData(sampleData);

  // Custom Sorting Hook: Handles sorting of data based on the 'price' property.
  // Default order is ascending ('asc').
  const { order, sortedData, setSortedData, updateOrder } =
    useSortData(filteredData);

// Define type for table headers
  type HeaderKeys = (keyof (typeof sampleData)[0])[] & {};

  // Extract headers based on the keys of the first entry in the sample data
  const headers = Object.keys(sampleData[0]) as HeaderKeys;

  // Use effect to update sortedData when filteredData changes
  useEffect(() => {
    setSortedData(filteredData);
  }, [filteredData]);

  return (
    <div className="container">
      <div className="search-container">

        {/* Input for searching categories */}
        <label>
          Search Categories:
          <input
            type="text"
            placeholder="Type here..."
            onChange={(event) => filter(event.target.value)}
          />
        </label>
      {/* Button to trigger sorting based on 'price' */}
        <button onClick={updateOrder}>
          Sort by Price: {order === "asc" ? "ASC" : "DESC"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
        {/* Display table headers dynamically */}
            {headers.map((header, i) => {
              return <th key={i}>{header.toString()}</th>;
            })}
          </tr>
        </thead>
        <tbody>
         {/* Display table rows using the TableRow component */}
          {sortedData.map((data: TableProps, index:number) => {
            return (
              <TableRow
              key={index}
                data={data}
              />
            );
          })}
        </tbody>
      </table>
      {/* Display an error message if no results are found */}
      {!filteredData.length && (
        <p className="error-message">
          * No results found, please adjust your search query
        </p>
      )}
    </div>
  );
};
