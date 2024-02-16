import data from '../../sample_table_data.json'

export const Table = () => {
    // Sets types for headers
    type Keys = (keyof typeof data[0])[] & {};
    // Defines table headers by the keys of the first entry
    const headers = Object.keys(data[0]) as Keys; 

    console.log(headers)
  return(
<table>
    <thead>
<tr>
   {
    headers.map((h) => {
        return <th key={h}>{h}</th>
    })
   }
  </tr>
  </thead>
  <tbody>
    
  </tbody>
</table>
 
)}
