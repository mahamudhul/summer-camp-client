/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseClasses from '../../../Hooks/UseClasses';

const ClassesDetails = ({cl}) => {
    const { name, image, price,instructorName, _id } = cl;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, , refetch] = UseClasses();




    const handleAddClass = item => {
        console.log(user.email)


        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Classes added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        
        
        else {
            Swal.fire({
                title: 'Please login to see the classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    // TODO: style classes card component
    return (
        <div>
            <div  className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-96' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructor: {instructorName}</p>
                    <p>Available Seat: {cl.availableSeats}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-start mt-3">
                        <button onClick={() => handleAddClass(cl)} className="btn btn-accent btn-outline">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesDetails;