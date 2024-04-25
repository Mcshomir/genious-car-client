import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-three-jade.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-center mt-16 p-6'>
                <p className=" bold text-2xl">Service</p>
                <h1 className=' text-5xl '>Our services area !</h1>
                <p className=' bold text-xl'>Unlock a world of information with InfoFlow Connect, the cutting-edge online service product designed to cater to your information needs. With its lightning-fast search capabilities and vast database, InfoFlow Connect seamlessly connects you to a plethora of insights, answers, and resources. Whether you're a student, professional, or curious mind, our user-friendly interface ensures a smooth and engaging experience. Stay updated with real-time news, explore in-depth articles, or collaborate with others effortlessly. Empower yourself with knowledge using InfoFlow Connect – where information meets innovation. Join us today and embark on a journey of limitless learning! </p>

            </div>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                ></ServicesCard>)}
            </div>

        </div>
    );
};

export default Services;