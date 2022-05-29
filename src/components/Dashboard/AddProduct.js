import React from 'react';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const model = e.target.model.value;
        const image = e.target.image.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const supplier = e.target.supplier.value;
        const details = e.target.details.value;
        const url = 'https://agile-wildwood-78476.herokuapp.com/api/products/';

        console.log(name, image, price, supplier, quantity);
        // fetch format
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name,model,price,image,supplier,quantity,details
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            e.target.reset();
    }

    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow rounded-10 bg-light'>
                <h2 className="text-center">Add Products</h2>
                <form onSubmit={handleAddProduct}>
                    <div className='mb-2 mt-2'>
                        <input className="form-control" type='text' name='name'
                            id='name' placeholder='Name: Wheel' required />
                    </div>
                    <div className='mb-2 mt-2'>
                        <input className="form-control" type='text' name='model'
                            id='model' placeholder='Model: 2hi31w' required />
                    </div>
                    <div className='mb-2 mt-2'>                      
                            <input className="form-control" type='text' name='quantity'
                                id='quantity' placeholder='Quantity: 250' required />                       
                    </div>
                    <div className='mb-2 mt-2'>                      
                            <input className="form-control" type='text' name='price'
                                id='price' placeholder='price: 250' required />                       
                    </div>
                    <div className='mb-2 mt-2'>                      
                            <input className="form-control" type='text' name='supplier'
                                id='supplier' placeholder='Supplier name :' required />                       
                    </div>
                    <div className='mb-2'>                                    
                            <input className="form-control"
                                type='text'
                                name='image'
                                id='image' placeholder='Image link :' required
                            />
                    </div>
                    <div className='mb-2'>                                    
                            <input className="form-control"
                                type='text'
                                name='details'
                                id='details' placeholder='Product description:' required
                            />
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Add Product
                    </button>

                </form>
                <div className='row justify-content-between align-items-center mt-2 px-3'>
                    <hr className="col-5" />
                    <p className="col-1">0</p>
                    <hr className="col-5" />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;