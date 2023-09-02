import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const PriceList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../../public/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-12'>
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default PriceList;