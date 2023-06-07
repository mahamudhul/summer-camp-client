/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/undraw_welcome_re_h3d9 (1).svg'
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogIn from '../../Component/SocialLogIn';




const Register = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const { createUser, updateUserProfile } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {

                    })
                    .catch((error) => {

                    })

            })
            .then(error => {
                console.log(error)
            });
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>

                        <img src={img} alt="" />
                    </div>


                    {/* ---Form-- */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-400">
                        <p className="text-3xl font-bold m-5 text-center">Register now!</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-500'>Photo url is required</span>}
                            </div>

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

                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}

                                {errors.password?.type === 'minLength' && <p className='text-red-500'>password  must be 6 cherecters</p>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-primary" type="submit" value="Register" />
                            </div>
                            <SocialLogIn></SocialLogIn>

                        </form>
                        <p className='m-5'><small> Already have an account? <Link className='text-fuchsia-50' to='/login'> <span className='text-xl m-3 hover:text-orange-300'> login</span> </Link></small></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;

// TODO: password validation
// { pattern:/^(?=.{6,})(?=.*[!#$%&? "])(?=.*[A-Z])$/}