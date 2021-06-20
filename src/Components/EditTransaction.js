import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { apiURL } from '../util/apiURL';
const API = apiURL();

const EditTransaction = () => {
    let { index } = useParams();
    let history = useHistory();
    const [transaction, setTransaction] = useState({
        from: "",
        date: "",
        name: "",
        amount: 0
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const updateTransaction = async (e) => {
        e.preventDefault();
        const updatedTransaction = transaction;
        updatedTransaction.date = getShortDateFormat(updatedTransaction.date);
        updatedTransaction.amount = Number(updatedTransaction.amount);
        try {
            await axios.put(`${API}/transactions/${index}`, updatedTransaction);
            history.push(`/transactions`)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTransaction = async (e) => {
        try {
            await axios.delete(`${API}/transactions/${index}`);
            history.push(`/transactions`)
        } catch (error) {
            console.log(error)
        }

    }

    const getShortDateFormat = (str) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[new Date(str).getMonth()];
        const day = new Date(str).getDate() + 1;
        return month + " " + day;
    }

    const getLongDateFormat = (str) => {
        const [month, day] = str.split(" ");

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let monthNumber = (monthNames.indexOf(month) + 1).toString();
        if (monthNumber.length === 1) {
            monthNumber = "0" + monthNumber;
        }
        let dayNumber = (day.length === 1) ? "0" + day : day;
        return `2021-${monthNumber}-${dayNumber}`;
    }

    const fetchTransaction = async () => {

        try {
            const { data } = await axios.get(`${API}/transactions/${index}`);
            data.date = getLongDateFormat(data.date)
            setTransaction(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTransaction();
    }, []);

    return (
        <div className="Edit">
            <h3 className="p-2 border">Edit Transaction</h3>
            <div className="w-75 p-1 border mx-auto">
                <Form className="w-50 mx-auto pt-4" onSubmit={updateTransaction}>

                    <Form.Group controlId="date">
                        <Form.Label>Date of Transaction</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date of Transaction" value={transaction.date} onChange={handleTextChange} required />
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Subject of Transaction</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Subject" value={transaction.name} onChange={handleTextChange} required />
                    </Form.Group>

                    <Form.Group controlId="amount" className="w-25">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" name="amount" placeholder="amount" value={transaction.amount} onChange={handleTextChange} required />
                    </Form.Group>

                    <Form.Group controlId="from" className="w-25">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="text" name="from" placeholder="from" value={transaction.from} onChange={handleTextChange} required />
                    </Form.Group>


                    <Button variant="primary" type="submit" className="m-2">
                        Update Transaction
                </Button>

                </Form>

                <Button variant="danger" className="m-1" onClick={deleteTransaction}>
                    Delete Transaction
            </Button>
            </div>
        </div>
    )
}

export default EditTransaction;