import { useEffect } from 'react';
import { useSortData } from '../../hooks/useSortData';
import { useSearchInput } from '../../hooks/useSearchInput';
import { TableRow } from "../TableRow";
import { SearchInput } from "../SearchInput";
import {TableProps} from "./types"

export const Table = () => {

  // Custom Sorting Hook, Default order is "ASC"
  const [order, data, updateOrder] = useSortData("ASC", "price");
  console.log(data);
   // Custom Filter Hook
  const [searchInput, handleChange, filterData] = useSearchInput('');

  // Sets types for headers
  type Keys = (keyof (typeof data)[0])[] & {};

  // Defines table headers by the keys of the first entry
  const headers = Object.keys(data[0]) as Keys;

  console.log(headers);

  return (
    <>
    {/* pass props to SearchIInput component */}
    <label>Search Categories:
<input type="text" value={searchInput} onChange={handleChange} />
<p>{searchInput}</p>
</label>
    <table>
      {/* Triggers the useSortData hook by updating the order */}
      <button onClick={updateOrder}>
        Sort by: {order === "ASC" ? "DESC" : "ASC"}
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
        {data.map((d:TableProps) => {
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
