import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceChart = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('../../../public/products.json')
            .then(res => res.json())
            .then(data => {

                const productsData = data.map(singleData => {
                    console.log(singleData)
                    const productInfo = {
                        name: singleData.name,
                        price: singleData.price
                    }
                    return productInfo;
                })
                // console.log(productInfo);
                setPrices(productsData);
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-3xl py-12'>Chart Beneath shows the Prices of Our Product</h1>
            <div className='mb-10 w-[450px] mx-auto'>

                <BarChart
                    width={450}
                    height={300}
                    data={prices}
                >
                    <XAxis dataKey="price"></XAxis>
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default PriceChart;