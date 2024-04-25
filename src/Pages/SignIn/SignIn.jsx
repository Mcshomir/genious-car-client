import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const SignIn = () => {
    const { signIn } = useContext(AuthContext)


    const navegate = useNavigate()
    const signInClick = event => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUsers = {
                    email: user.email

                }

                console.log(currentUsers);



                fetch('http://localhost:4000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUsers)

                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("genius_token", data.token)
                        console.log(data)
                    })
                navegate('/');


            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
                <div className="text-center lg:text-left">

                    <img className='w-9/12' src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login!</h1>
                    <form onSubmit={signInClick} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />

                        </div>
                    </form>
                    <div className='text-center'>
                        <p><small>If you have not account ? plz <Link to='/signup'>Sing-Up</Link></small></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;