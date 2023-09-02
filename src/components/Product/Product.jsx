import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl rounded-lg">
                <figure><img className='rounded h-[256px] w-[100%]' src={product.image_url} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="ml-5 card-title py-2 font-bold text-2xl">{product.name}</h2>
                    <p className='ml-5'>{product.price}</p>
                    <p className='ml-5'>{product.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn p-4 bg-rose-300 rounded-lg m-5">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;