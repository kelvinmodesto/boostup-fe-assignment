import type { ChangeEvent, FunctionComponent } from 'react';

import { ProvinceListResponse, ProvinceResponse } from '@report-types/services-province';

import { Box, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import useStyles from './Filter.styles';

type Props = {
  statesList: ProvinceListResponse;
  applyDate: (date: string) => void;
  applyState: (state: string) => void;
};

const FilterForm: FunctionComponent<Props> = ({ statesList, applyDate, applyState }) => {
  const classes = useStyles();
  
  const handleChangeDate = (date: ChangeEvent<any>) => {
    applyDate(date.target.value);
  }

  const handleChangeState = (state: ChangeEvent<any>) => {
    applyState(state.target.innerText);
  }

  return (<Box className={classes.root}>
    <Autocomplete
      id="combo-box-states"
      options={statesList}
      getOptionLabel={(state: ProvinceResponse) => state.province}
      style={{ width: 220 }}
      onChange={handleChangeState}
      getOptionSelected={(option: ProvinceResponse, value: ProvinceResponse) => option === value}
      renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
    />
    <TextField 
      id="date" 
      type="date" 
      placeholder="Date" 
      defaultValue="2021-01-01" 
      inputProps={{ min: "2020-01-01", max: "2021-11-15"}} 
      variant="outlined"
      onChange={handleChangeDate} 
      className={classes.date} 
    />
  </Box>)
};

export default FilterForm;