import React, { useEffect, useState } from 'react';
import { MyHEader } from '../components/paper';

import { Paper, Typography } from '@material-ui/core/';
import InputNumber from '../components/input';
import { useFormInput } from '../components/functions';
import { connect } from 'react-redux';
import {
  doAddTypeEngine,
  doAddTypeFuel,
  doAddYear,
  doAddCost,
} from '../actions';

function Step3 ({ costStep1, costStep2 }){
  const costDiller = useFormInput(500);
  return (
    <Paper style={{ maxWidth: 400, margin: 'auto' }}>
      <MyHEader
        header={` Стоимость доставленого лота ${!isNaN(costStep1) && costStep1}
         `}
        style={{ color: 'purple' }}>
        Стоимость доставленого лота
      </MyHEader>
      <Typography variant='title' style={{ color: 'purple', marginTop: 5 }}>
        Платеж в бюджет{' '}
        <span style={{ color: 'red', fontSize: 20, marginLeft: 7 }}>
          {!isNaN(costStep2) && costStep2 + ' $'}
        </span>
      </Typography>
      <InputNumber {...costDiller} />
      <Typography variant='title' style={{ color: 'purple' }}>
        Полная стоимость авто
        <span style={{ color: 'red', fontSize: 20, marginLeft: 7 }}>
          {!isNaN(costStep2) && costStep2 + ' $'}
        </span>
      </Typography>
    </Paper>
  );
}
const mapStateToProps = state => ({
  costStep1: state.summaState.costStep1,
  costStep2: state.summaState.costStep2,
});

const mapDispatchToProps = dispatch => ({
  onAddTypeEngine: payload => dispatch(doAddTypeEngine(payload)),
  onAddTypeFuel: payload => dispatch(doAddTypeFuel(payload)),
  onAddYear: payload => dispatch(doAddYear(payload)),
  onAddCost: payload => dispatch(doAddCost(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step3);
