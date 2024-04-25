import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg';
import persons from '../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row border-red-500">
                <div className='w-1/2 relative'>

                    <img src={persons} alt="" className='shadow-2 h-full w-4/5 rounded-lg shadow-orange-50' />
                    <img src={parts} className='absolute w-3/5 left-60 top-2/4 rounded-xl shadow-slate-700' alt="" />
                </div>
                <div className=' w-1/2'>
                    <h1 className='text-xl text-orange-800 bold '>About-us</h1>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa facilis inventore repudiandae voluptas, delectus error commodi exercitationem perspiciatis, saepe cum fuga omnis quae autem ducimus architecto eos corrupti a?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nisi tempora impedit consequuntur, sunt totam alias eligendi. Consectetur sed maiores molestiae cumque tempora aperiam corrupti doloribus cupiditate accusamus delectus esse, aliquam id? Itaque illum architecto, molestias quae assumenda aliquam ipsa!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;