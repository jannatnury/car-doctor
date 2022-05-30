import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { auth } from '../../firebase.init';

const ManageOrder = () => {
    const [user, loading] = useAuthState(auth)
    const { data: orders,isLoading, refetch } = useQuery(['manageOrders'], () => fetch(`https://agile-wildwood-78476.herokuapp.com/api/orders?email=${user?.email}`).then(res => res.json()));
    if(loading, isLoading){
        return <h1 className='my-5'>Loading</h1>
    }
    console.log(orders);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">USER EMAIL</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.map(order => {
                            return (
                                <tr key={order._id} className="hover">
                                    <td>{order?.user}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.paid ? order?.transactionId : 'unpaid'}</td>
                                    <td>
                                        actions

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;