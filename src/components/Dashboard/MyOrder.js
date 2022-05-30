import React from 'react';
import { useQuery } from 'react-query';

const MyOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery(['manageOrders'], () => fetch(`https://agile-wildwood-78476.herokuapp.com/api/orders`).then(res => res.json()));
 console.log(orders);
    return (
        <div className=''>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">PAYMENT</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        orders?.map(order => {
                            return (
                                <tr key={order._id} className="hover">
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

export default MyOrder;