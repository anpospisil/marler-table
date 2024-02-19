import {TableRowProps} from './types'
export const TableRow: React.FC<TableRowProps>  = ({id, name, quantity, category, price, description}) => {
    return(
<tr className="table-row">
    <td >{id}</td>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{category}</td>
    <td>{price}</td>
    <td>{description}</td>
</tr>
    )
}
