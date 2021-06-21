import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"
import {useHistory} from "react-router-dom"
import { apiURL } from '../util/apiURL';
 


export default function NewTransaction() {
    const API = apiURL();
    let history = useHistory();

    const getShortDateFormat = (str) =>{
        const monthNames = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
        const month = monthNames[new Date(str).getMonth()];
        const day = new Date(str).getDate() + 1;
        return month + " " + day;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {from, date,subject, amount} = e.target;
        const newTransaction = {
            from: from.value,
            date: getShortDateFormat(date.value),
            name: subject.value,
            amount: Number(amount.value),
          }
        try {
            await axios.post(`${API}/transactions`, newTransaction);
            history.push(`/transactions`);
        }catch(error){
            console.log(error)
        }

    }

    return (<div>
        <h3 className="p-2 border">Enter New Transaction</h3>

        <Form className="w-50 mx-auto pt-3 border p-2" onSubmit={handleSubmit}>

            <Form.Group controlId="date">
                <Form.Label>Date of Transaction</Form.Label>
                <Form.Control type="date" name="date" placeholder="Date of Transaction" required />
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Label>Subject of Transaction</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject" required />
            </Form.Group>

            <Form.Group controlId="amount" className="w-25">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" name="amount" placeholder="amount" required />
            </Form.Group>

            <Form.Group controlId="from" className="w-25">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" name="from" placeholder="from" required />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>

    </div>)
}