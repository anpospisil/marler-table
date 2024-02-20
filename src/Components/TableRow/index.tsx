import {RowProps} from './types'
export const TableRow: React.FC<RowProps>  = ({data}) => {
    return(
<tr className="table-row">
{
        Object.keys(data).map(function(key:string) {
            return(
                <td><span>{key}</span>{data[key as keyof typeof data]}</td>
            )
          })
    }
</tr>
    )
}
