import type { FunctionComponent } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props = {
  covidStats: any;
}

const Graph: FunctionComponent<Props> = ({ covidStats }) => {

  return (
    <BarChart
      width={1200}
      height={750}
      data={covidStats}
      margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="confirmed" fill="#006C8E" />
    <Bar dataKey="deaths" fill="#E75A5A" />
  </BarChart>);    
};

export default Graph;