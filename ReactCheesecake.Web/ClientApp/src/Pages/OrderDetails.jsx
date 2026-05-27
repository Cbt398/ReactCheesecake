import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get(`/api/order/getorder?id=${id}`);
            setOrder(data);
        }
        getOrder();
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
               
                <Link to="/viewOrders">
                    <button className="btn btn-primary w-100">
                        Back to Orders
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OrderDetails;