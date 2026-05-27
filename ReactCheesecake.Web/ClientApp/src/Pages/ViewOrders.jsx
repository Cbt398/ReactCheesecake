import { useState, useEffect } from "react";
import axios from "axios";

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            const { data } = await axios.get('/api/order/getorders');
            setOrders(data);
        }
        loadOrders();
    }, []);

    return (
        <div className="container" style={{ marginTop: 70 }}>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o, index) => (
                        <tr key={index}>
                            <td>
                                <a href={`/orders/${o.id}`}>{o.name} - {o.email}</a>
                            </td>
                            <td>{o.base}</td>
                            <td>{o.toppings}</td>
                            <td>{o.special}</td>
                            <td>{o.quantity}</td>
                            <td>{o.deliveryDate}</td>
                            <td>${o.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewOrders;