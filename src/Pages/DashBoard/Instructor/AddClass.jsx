/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

const AddClass = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
    }


    return (
        <div>
           <div>

           </div>
           
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" placeholder="Instructor Email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats*</span>
                        </label>
                        <input type="number" {...register("number", { required: true })} placeholder="seats" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <input className="btn btn-outline btn-success mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;