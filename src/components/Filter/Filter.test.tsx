import { render, screen, fireEvent, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import Filter from '.';
import { statesListMock } from './__mocks__';

const applyStateMock = jest.fn();
const applyDateMock = jest.fn();

const defaultProps = {
  statesList: statesListMock,
  applyState: applyStateMock,
  applyDate: applyDateMock,
};

const setup = async (props: React.ComponentProps<typeof Filter> = defaultProps) => {
  const utils = render(
    <Filter
      applyDate={props.applyDate}
      applyState={props.applyState}
      statesList={props.statesList}
    />,
  );

  const components = {
    dateInput: screen.getByPlaceholderText(/date/i),
    autoComplete: screen.getByRole('combobox'),
  };
  
  return {
    components,
    ...utils,
  };
};

describe('Filter', () => {
  beforeEach(() => {
    applyDateMock.mockReset();
    applyStateMock.mockReset();
  });

  it('should render component', async () => {
    const { components } = await setup();

    expect(components.autoComplete).toBeInTheDocument();
    expect(components.dateInput).toBeInTheDocument();
  });

  it('should run applyState function', async () => {
    const { components: { autoComplete } } = await setup();

    const statesList = screen.getByRole('textbox', { name: /state/i });

    autoComplete.focus();

    fireEvent.change(statesList, { target: { value: 'California' } });
    
    fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autoComplete, { key: 'Enter' });

    expect(applyStateMock).toBeCalledTimes(1);
  });

  it('should run applyDate function', async () => {
    const { components: { dateInput } } = await setup();

    fireEvent.focus(dateInput);
    
    fireEvent.change(dateInput, { target: { value: '2021-03-07' } });

    expect(applyDateMock).toBeCalledTimes(1);
  });
});
