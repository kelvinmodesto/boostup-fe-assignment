import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import Graph from '.';
import { cityListMock } from './__mocks__';

const defaultProps = {
  covidStats: cityListMock,
};

const setup = async (props: React.ComponentProps<typeof Graph> = defaultProps) => {
  const utils = render(
    <Graph covidStats={props.covidStats} />,
  );
  
  const components = {
    barChart: screen.getByTestId('bar-chart-stats')
  }

  return {
    components,
    ...utils,
  };
};

describe('Graph', () => {
  it('should render component', async () => {
    const { components } = await setup();
    expect(components.barChart).toBeInTheDocument();
  });

});
