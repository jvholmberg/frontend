import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Immutable from 'immutable';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PieChart from '../../components/PieChart';

const useStyles = makeStyles(() => ({
  center: {
    margin: '0 auto',
  }
}));

const BalanceChart = ({ sessions }) => {
  const classes = useStyles();
  const jsSessions = sessions.toJS();
  const data = jsSessions.reduce((ret, val) => {
    const idx = _.findIndex(ret, e => e.name === val.type.name);

    if (idx === -1) {
      // Adding new record
      ret.push({ name: val.type.name, value: 1 });
    } else {
      // Updating existing record
      ret.splice(idx, 1, { name: val.type.name, value: ret[idx].value + 1 });
    }
    return ret;
  }, []);

  return (
    <>
      <Typography variant="h3" align="center">Balance</Typography>
      <Box>
        <PieChart {...{
          className: classes.center,
          data,
          nameKey: 'name',
          dataKey: 'value',
          width: 200,
          height: 200,
        }} />
      </Box>
    </>
  );
};

BalanceChart.propTypes = {
  sessions: PropTypes.instanceOf(Immutable.List),
};

BalanceChart.defaultProps = {
  sessions: Immutable.List(),
};

export default React.memo(BalanceChart);