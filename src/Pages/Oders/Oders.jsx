import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import OrderRow from './OrderRow';

const Oders = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("this is real user", user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:4000/orders?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("genius_token")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 401) {
                        return logOut();
                    }
                    return res.json()
                })
                .then(data => {
                    console.log("this is ", data);
                    setOrders(data)
                })
        }

    }, [user?.email, logOut])

    const handleDelete = (id) => {
        console.log("click id", id);
        const proced = window.confirm("Are you sure to delete?");
        if (proced) {
            fetch(`http://localhost:4000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfull');
                        const reamining = orders.filter(odr => odr._id !== id)
                        setOrders(reamining);
                    }
                })


        }
    }

    return (
        <div>
            <h2>You have {orders.length}</h2>


            <div className="">
                <table className="table">



                    <tbody>
                        {
                            orders?.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            ></OrderRow>)
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Oders;