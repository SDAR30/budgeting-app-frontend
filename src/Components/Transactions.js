import { useState, useEffect } from "react";
import axios from "axios"
import { apiURL } from "../util/apiURL"
import TransactionListItem from "./TransactionListItem";
import Table from 'react-bootstrap/Table'

const API = apiURL();

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [total, setTotal] = useState(0)
    const [bankAmountColor, setBankAmountColor] = useState("black")

    const getTransactions = async () => {
        try {
            const { data } = await axios.get(`${API}/transactions`);
            const newTotal = data.reduce((acc, index) => acc + index.amount, 0)
            if (newTotal < 0) { setBankAmountColor("red") }
            else if (newTotal > 1000) { setBankAmountColor("green") }
            else { setBankAmountColor("black") }
            setTotal(newTotal)
            setTransactions(data)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getTransactions()
    }, [])


    return (<div className="transactions">
        <h2 style={{ color: `${bankAmountColor}` }}>Bank Account Total: {total}</h2>
        <Table responsive="sm" striped bordered hover>
            <thead>
                <tr>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => <TransactionListItem key={index} index={index} data={transaction} />)}
            </tbody>
        </Table>
    </div>)

}

export default Transactions;