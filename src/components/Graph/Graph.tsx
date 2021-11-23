import type { FunctionComponent } from 'react';

import { CityListResponse } from '@report-types/services-province';

import { Box } from '@material-ui/core';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props = {
  covidStats: CityListResponse;
}

const Graph: FunctionComponent<Props> = ({ covidStats }) => {

  return (
    <Box data-testid="bar-chart-stats">
      <BarChart
        width={1100}
        height={500}
        data={covidStats}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" fill="#006C8E" />
        <Bar dataKey="deaths" fill="#E75A5A" />
      </BarChart>
    </Box>
    
  );    
};

export default Graph;