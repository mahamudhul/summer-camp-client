/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/undraw_login_re_4vu2 (1).svg'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogIn from '../../Component/SocialLogIn';






const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useContext(AuthContext);



    const onSubmit = data => {
        console.log(data)

        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Log In Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })
            .then(error => console.log(error))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={img} alt="" />
                    </div>


                    {/* ---Form-- */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-400">
                        <p className="text-3xl font-bold m-5 text-center">Login now!</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>

                        </form>
                        <p className='m-5'><small> Already have an account? <Link className='text-orange-500' to='/register'><span className='text-xl m-3 hover:text-orange-300'> Register</span></Link></small></p>

                    </div>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default Login;



// { pattern:/^(?=.{6,})(?=.*[!#$%&? "])(?=.*[A-Z])$/}