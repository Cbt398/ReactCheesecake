import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const loadOrder = async () => {
            const { data } = await axios.get(`/api/order/getorder?id=${id}`);
            setOrder(data);
        }
        loadOrder();
    }, []);

    if (!order) return <div>Loading...</div>;

    return (
        <div className="container d-flex justify-content-center" style={{ marginTop: 70 }}>
            <div className="card p-4 text-center" style={{ width: 500 }}>
                <h3 className="fw-bold">{order.name}</h3>
                <p>{order.email}</p>
                <p>{order.base}</p>
                <p>{order.toppings}</p>
                <p>{order.special}</p>
                <p>{order.quantity}</p>
                <p>{order.deliveryDate}</p>
                <p>${order.total}</p>
                <button className="btn btn-primary" onClick={() => navigate('/orders')}>
                    Back to Orders
                </button>
            </div>
        </div>
    );
}

export default OrderDetails;