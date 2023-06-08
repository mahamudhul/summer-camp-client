/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';


const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();


    const { data: select = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['select'],

        queryFn: async () => {
            const res = await axiosSecure('/carts');
            return res.data;
        }
    })

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
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
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
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={s.image} />
                                        </div>
                                    </td>
                                    <td>
                                        <h1>{s.name}</h1>
                                    </td>
                                    <td>
                                        <div>
                                            <button ><MdDelete className='text-2xl'></MdDelete></button>
                                        </div>
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