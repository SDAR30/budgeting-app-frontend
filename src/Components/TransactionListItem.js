import { Link } from "react-router-dom";

const TransactionListItem = ({data,index}) => {

    return(<tr>
        <td>{data.from}</td>
        <td><Link to={`/transactions/${index}`}>{data.name}</Link></td>
        <td>{data.date}</td>
        <td>{data.amount}</td>

    </tr>)

}

export default TransactionListItem;