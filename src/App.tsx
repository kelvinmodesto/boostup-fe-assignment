import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { ProvinceResponse, ProvinceListResponse, CityListResponse } from '@report-types/services-province';

import { Box } from '@material-ui/core';

import useStyles from 'App.styles';
import Filter from 'components/Filter';
import Graph from 'components/Graph';
import { useFetchStatesList, useFetchReport } from 'services/reports/list';

const App: FunctionComponent = () => {
  const classes = useStyles();

  const [statesList, setStatesList] = useState<ProvinceListResponse>([]);
  const [reportList, setReportList] = useState<CityListResponse>(undefined);
  const [filters, setFilters] = useState<{state?: string; date?: String;}>({ state: 'California', date: '2021-01-01'});

  const fetchStatesList = useFetchStatesList();
  const fetchReport = useFetchReport();

  useEffect(() => {
    if (fetchStatesList.data) {
      setStatesList(fetchStatesList.data.data.filter((it: ProvinceResponse) => !it.province.includes(',')));
    }
  }, [fetchStatesList.data]);
  
  useEffect(() => {
    if (fetchReport.data && fetchReport.response.ok && fetchReport.data.data[0].region.cities.length) {
      setReportList(fetchReport.data.data[0].region.cities);
    } else {
      setReportList(undefined);
    }
  }, [fetchReport]);

  useEffect(() => {
    if (fetchReport.loading) {
      fetchReport.abort();
    }
    fetchReport.get(`?region_name=US&region_province=${filters.state}${filters.date ? `&date=${filters.date}`: ''}`);
  }, [filters]);

  const changeDate = ((date: string) => setFilters({ ...filters, date }));
  
  const changeState = ((state: string) => setFilters({ ...filters, state }));

  return (
    <Box className={classes.root}>
      <Filter statesList={statesList} applyDate={changeDate} applyState={changeState} />
      { reportList && <Graph covidStats={reportList} /> }
    </Box>
  );
}

export default App;
