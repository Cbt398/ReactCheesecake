import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const basePrice = 49.99;
const toppingPrice = 3.95;
const toppings = [
  
    "Strawberry Sauce",
    "Blueberry Compote",
    "Cherry Pie Filling",
    "Oreo Crumbles",
    "Chocolate Ganache",
    "Caramel Drizzle",
    "Salted Caramel",
    "Crushed Graham Crackers",
    "Mini Chocolate Chips",
    "Peanut Butter Drizzle",
    "Nutella",
    "Toasted Marshmallows",
    "Pecan Praline",
    "Cookie Dough Bites",
    "Espresso Syrup",
    "White Chocolate Shavings",
    "Dark Chocolate Curls",
    "Crushed Pretzels",
    "Macadamia Nuts",
    "Candied Walnuts",
    "Biscoff Cookie Crumbs",
    "Hot Fudge",
];

const baseFlavors = [

    "Classic",
    "Chocolate",
    "Red Velvet",
    "Strawberry",
    "Lemon",
    "Caramel",
    "Oreo",
];

 


const Order = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        name: '',
        email: '',
        base: '',
        special: '',
        quantity: 1,
        deliveryDate: ''
    });

    const [selectedToppings, setSelectedToppings] = useState([]);

    const onInputChange = e => {
        const copy = { ...order };
        copy[e.target.name] = e.target.value;
        setOrder(copy);
    }

    const onCheckChange = (topping) => {
        if (selectedToppings.includes(topping)) {
           setSelectedToppings(selectedToppings.filter(t => t !== topping));
        }
        else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    }

    const getTotal = () => {
        return order.base ? (basePrice + selectedToppings.length * toppingPrice) * order.quantity : 0;
    }

    const onSubmitClick = async () => {
        const completeOrder = {
            ...order,
            toppings: selectedToppings.join(", "),
            total: getTotal()
        };

        await axios.post('/api/order/addorder', completeOrder);
        navigate('/orders');
    }


    const { name, email, base, special, quantity, deliveryDate } = order;

    return (
        <div className="container" style={{ marginTop: 70 }}>
            <h2 className="text-center mb-4">Cheesecake Factory Order Form</h2>
            <div className="row">

                
                <div className="col-md-7">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={onInputChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onInputChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor (${basePrice})</label>
                        <select className="form-select" name="base" value={base} onChange={onInputChange}>
                            <option value="">Choose...</option>
                            {baseFlavors.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional ${toppingPrice})</label>
                        {toppings.map(t => (
                            <div className="form-check" key={t}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectedToppings.includes(t)}
                                    onChange={() => onCheckChange(t)}
                                />
                                <label className="form-check-label">{t}</label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" name="special" value={special} onChange={onInputChange} rows={3} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="quantity" value={quantity} min={1} onChange={onInputChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" name="deliveryDate" value={deliveryDate} onChange={onInputChange} />
                    </div>

                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                </div>

                <div className="col-md-4 offset-md-1">
                    <h5>Live Preview</h5>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="cheesecake"
                        className="img-fluid rounded mb-3"
                    />
                    <div className="card p-3">
                        <strong>Your Custom Cheesecake</strong>
                        <p className="mb-1 mt-2">Base: {base || "Choose..."}</p>
                        <p className="mb-1">Toppings: {selectedToppings.join(", ")}</p>
                        <p className="mb-1">Special Requests: {special}</p>
                        <p className="mb-1">Quantity: {quantity}</p>
                        <p className="mb-1">Delivery Date: {deliveryDate}</p>
                        <p className="mb-0"><strong>Total: ${getTotal()}</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Order;
