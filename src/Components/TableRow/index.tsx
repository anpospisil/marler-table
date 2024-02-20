import {RowProps} from './types'

// TableRow Component: Displays a row of data in the table.
export const TableRow: React.FC<RowProps>  = ({data}) => {
    
    return(
<tr className="table-row">
      {/* Map over data keys to generate table cells */}
{
        Object.keys(data).map(function(key:string) {
            // Check if the key is 'price'
        if (key === 'price') {
            // Format the price with two decimal places
            return <td key={key}><span>{key}</span>$ {(data[key as keyof typeof data] as number).toFixed(2)}</td>;
        } else {
          return <td key={key}><span>{key}</span>{data[key as keyof typeof data]}</td>;
        }
      })}
    
</tr>
    )
}
