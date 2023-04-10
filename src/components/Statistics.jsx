
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignment = [
        {
            id: 1,
            name: 'A 1',
            marks : 60,
        },
        {
            id: 2,
            name: 'A 2',
            marks : 60,
        },
        {
            id: 3,
            name: 'A 3',
            marks : 59,
        },
        {
            id: 4,
            name: 'A 4',
            marks : 60,
        },
        {
            id: 5,
            name: 'A 5',
            marks : 60,
        },
        {
            id: 6,
            name: 'A 6',
            marks : 60,
        },
        {
            id: 7,
            name: 'A 7',
            marks : 60,
        },
        {
            id: 8,
            name: 'A 8',
            marks : 60,
        },
    ]
    return (
        <>
                <AreaChart
                width={1000}
                height={400}
                data={assignment}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area dataKey="marks" stroke="#0284c7  " fill="#8884d8" />
                </AreaChart>
        </>
    );
};

export default Statistics;