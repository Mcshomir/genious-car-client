import React, { useEffect, useState } from 'react';
import OrderImage from './OrderImage';

const OrderRow = ({ order, handleDelete }) => {
    const { serviceName, price, custumarName, phone, message, _id } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://genius-car-server-three-jade.vercel.app/service`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data)
                console.log("this is setOrderService", data)
            })
    }, [])

    return (


        <div className="overflow-x-auto">

            <table className="table">


                <tbody>

                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="rounded w-12 h-12">

                                        {
                                            orderService?.img &&
                                            <img className='h-16 w-16 rounded' src={orderService.img} />
                                        }

                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{serviceName}</div>
                                    <div className="text-sm opacity-50">${price}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {custumarName}
                            <br />
                            <span className="badge badge-ghost badge-sm">{phone}</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">{message}</button>
                        </th>
                    </tr>

                </tbody>


            </table>
        </div>
    );
};

export default OrderRow;