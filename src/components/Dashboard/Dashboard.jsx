import React from 'react';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const relationArray = [
        {
            id: 1,
            name: 'person 1',
            closeness: 80,
            distance: 0
        },
        {
            id: 2,
            name: 'person 2',
            closeness: 85,
            distance: 15
        },
        {
            id: 3,
            name: 'person 3',
            closeness: 80,
            distance: 0
        },
        {
            id: 4,
            name: 'person 4',
            closeness: 85,
            distance: 10
        },
        {
            id: 5,
            name: 'person 5',
            closeness: 100,
            distance: 0
        },
        {
            id: 6,
            name: 'person 1',
            closeness: 80,
            distance: 0
        },
        {
            id: 7,
            name: 'person 2',
            closeness: 95,
            distance: 15
        },
        {
            id: 8,
            name: 'person 3',
            closeness: 85,
            distance: 10
        },
        {
            id: 9,
            name: 'person 4',
            closeness: 80,
            distance: 10
        },
        {
            id: 10,
            name: 'person 5',
            closeness: 100,
            distance: 0
        }
    ]



    return (
        <div>
            <h2 className='text-center text-3xl py-12'>Beneath Chart shows the status of relationship<br /> of our customers🥵</h2>
            <div className=' mx-auto'>
                <LineChart
                    width={425}
                    height={300}
                    data={relationArray}
                >
                    <Line
                        dataKey='closeness'
                    ></Line>
                    <Line
                        dataKey='distance'
                    ></Line>
                    <Tooltip></Tooltip>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;