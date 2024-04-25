import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const CheckOut = () => {
    const { title, price, _id } = useLoaderData()
    const { user } = useContext(AuthContext);
    const handleClick = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form?.email.value || "unregistered";
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            custumerName: name,
            phone,
            email,
            message

        }
        console.log(order);



        fetch("http://localhost:4000/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("order is confirm !")
                    form.reset();

                }
                console.log(data)

            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleClick} className='m-24'>
            <h1 className='text-4xl text-center underline'>ORDER</h1>
            <h2 className="text-2xl"> Name : {title}</h2>
            <h4 className=' text-2xl'> Pirce: {price}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-4 py-10'>

                <input name="firstName" type="text" placeholder="Your first-name" className="input input-bordered w-full " required />
                <input name="lastName" type="text" placeholder="Your last-name" className="input input-bordered w-full " required />
                <input name="phone" type="text" placeholder="Your Number" className="input input-bordered w-full " required />
                <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
            </div>
            <textarea name="message" className='h-24 w-full rounded-md border-4 border-slate-300  p-3' placeholder='write your order discriptions' required ></textarea>
            <input className='btn btn-primary mt-3' type="submit" value="Place your order" />
        </form>
    );
};

export default CheckOut;