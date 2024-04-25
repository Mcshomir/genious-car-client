import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/Context';



const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const signInClick = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/signin');


                console.log(user);
            })
            .catch(error => console.error('error', error));
    }
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
                <div className="text-center lg:text-left">

                    <img className='w-9/12' src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">SignUp!</h1>
                    <form onSubmit={signInClick} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </div>
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
                        <p><small>
                            If you have an accout  ! plz <Link to='/signin'>Sign-In</Link>
                        </small></p>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default SignUp;