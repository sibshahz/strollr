import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sunday', activeUsers: 4000, inActiveUsers: 2400 },
  { name: 'Monday', activeUsers: 3000, inActiveUsers: 1398 },
  { name: 'Tuesday', activeUsers: 2000, inActiveUsers: 9800 },
  { name: 'Wednesday', activeUsers: 2780, inActiveUsers: 3908 },
  { name: 'Thursday', activeUsers: 1890, inActiveUsers: 4800 },
  { name: 'Friday', activeUsers: 2390, inActiveUsers: 3800 },
  { name: 'Saturday', activeUsers: 3490, inActiveUsers: 4300 },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label">{`Day: ${label}`}</p>
        <p>{`Active Users: ${payload[0].value}`}</p>
        <p>{`Inactive Users: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

// Custom Legend Component
const CustomLegend = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ backgroundColor: '#1A631B', width: '20px', height: '20px', display: 'inline-block' }}></span>
        <span style={{ marginLeft: '10px' }}>Inactive Users</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ backgroundColor: '#E5E5E5', width: '20px', height: '20px', display: 'inline-block' }}></span>
        <span style={{ marginLeft: '10px' }}>Active Users</span>
      </div>
    </div>
  );
};

export default class StatusOverviewBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Display only horizontal lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="inActiveUsers" fill="#1A631B" className="hover:cursor-pointer" />
          <Bar dataKey="activeUsers" fill="#E5E5E5" className="hover:cursor-pointer" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
