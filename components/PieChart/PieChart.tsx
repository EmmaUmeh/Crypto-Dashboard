"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ICOPieChart: React.FC = () => {
  const pieStyle = {
    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          cx="50%"
        //   cy="50%"
          innerRadius={70} // Increased innerRadius for padding
          outerRadius={90} // Decreased outerRadius for padding
          fill="#8884d8"
          dataKey="value"
          style={pieStyle}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={70} // Increased innerRadius for padding
          outerRadius={90} // Decreased outerRadius for padding
          fill="#8884d8"
          dataKey="value"
          style={pieStyle}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ICOPieChart;