/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';


const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();


    const { data: select = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['select'],

        queryFn: async () => {
            const res = await axiosSecure('/carts');
            return res.data;
        }
    })

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // console.log(select)


    return (
        <div>
            <div>

            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>

                        {
                            select.map((s, index) => <tbody key={index}>
                                {/* row 1 */}
                                <tr>

                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={s.image} />
                                        </div>
                                    </td>

                                    <td>
                                        <h1>{s.name}</h1>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(s)} ><MdDelete className='text-2xl'></MdDelete></button>
                                    </td>

                                    <th>
                                        <button className="btn btn-accent btn-outline">Pay</button>
                                    </th>
                                </tr>
                            </tbody>)
                        }



                    </table>
                </div>
            </div>

        </div>
    );
};

export default MySelectedClass;