import { useSortData } from '../../hooks/useSortData';
import { useFilterData } from '../../hooks/useFilterData';
import { TableRow } from "../TableRow";
import { SearchInput } from "../SearchInput";
import {TableProps} from "./types"
import sampleData from "../../sample_table_data.json";
export const Table= () => {

    // Custom Sorting Hook, Default order is "ASC"
    const { sortedData, updateOrder } = useSortData(sampleData);
    // Custom Filter Hook
    const { filteredData, filter } = useFilterData(sortedData);


 

  // Sets types for headers
  type Keys = (keyof (typeof sampleData)[0])[] & {};

  // Defines table headers by the keys of the first entry
  const headers = Object.keys(sampleData[0]) as Keys;

  console.log(headers);

  return (
    <>
    {/* ========== pass props to SearchInput component =========== */}
    <label>Search Categories:
    <input
          type="text"
          placeholder="Filter items"
          onChange={(event) => filter(event.target.value)}
        />
</label>
    <table>
      {/* Triggers the useSortData hook by updating the order */}
      <button onClick={updateOrder}>Update order
      </button>
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
        {filteredData.map((d:TableProps) => {
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
    </>
  );
};
