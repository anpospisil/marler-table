import {TableRowProps} from './types'
export const TableRow: React.FC<TableRowProps>  = ({id, name, quantity, category, price, description}) => {
    return(
<tr className="table-row">
    <td><span>id</span>{id}</td>
    <td><span>name</span>{name}</td>
    <td><span>quantity</span>{quantity}</td>
    <td><span>category</span>{category}</td>
    <td><span>price</span>{price}</td>
    <td><span>description</span>{description}</td>
</tr>
    )
}
