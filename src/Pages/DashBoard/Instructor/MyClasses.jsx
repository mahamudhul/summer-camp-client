/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: classes = [], isLoading: loading, } = useQuery({
        queryKey: ['classes'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/${user?.email}`);
            refetch()
            return res.json();

        }

    })

    const handleUpdate = () => {
        console.log('update stutes')
    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Enrolled Students </th>
                            <th>Feedback </th>
                            <th>Action </th>
                        </tr>
                    </thead>

                    {
                        classes.map((cl, index) => <tbody key={index}>
                            <tr >
                                <th>{index + 1}</th>
                                <td>{cl.name}</td>
                                <td>{cl.status}</td>
                                <td>0</td>
                                <td>no feedback</td>
                                <td>
                                    <button onClick={handleUpdate} className="btn btn-outline btn-info btn-sm">Update</button>
                                </td>
                            </tr>
                        </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyClasses;