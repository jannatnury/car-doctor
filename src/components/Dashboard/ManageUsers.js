import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    const { data: users,isLoading, refetch } = useQuery(['manageUsers'], () => fetch(`https://agile-wildwood-78476.herokuapp.com/api/users`).then(res => res.json()));

    return (
        <table class="table">
            <thead>
                <tr>

                    <th scope="col">User Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    users?.map(u => {
                        return (
                            <tr key={u._id} className="hover">
                                <td>{u?.email}</td>
                                <td>{u?.role ? u?.role : 'client'}</td>
                                <td>
                                    actions

                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ManageUsers;