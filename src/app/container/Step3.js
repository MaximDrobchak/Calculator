import React, { useEffect, useState } from 'react';
import Paper, { MyHEader } from '../components/paper';

import { Typography } from '@material-ui/core/';
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
    <Paper
      background='tomato'
      style={{ maxWidth: 400, margin: 'auto' }}
      header={`  Полная стоимость авто ${!isNaN(costStep2) &&
        +costStep2 + +costStep1 + ' $'} `}>
      <Typography variant='title' style={{ color: 'purple', marginTop: 5 }}>
        Платеж в бюджет{' '}
        <span style={{ color: 'red', fontSize: 20, marginLeft: 7 }}>
          {!isNaN(costStep2) && costStep2 + ' $'}
        </span>
      </Typography>
      <Typography variant='title' style={{ color: 'purple' }}>
        Стоимость доставленого лота
        <span style={{ color: 'red', fontSize: 20, marginLeft: 7 }}>
          ${!isNaN(costStep1) && costStep1}
        </span>
      </Typography>
      <InputNumber {...costDiller} />
      <hr />
      <div style={{ display: 'flex' }}>
        <Typography variant='title' color='primary' style={{ margin: 0 }}>
          {
            <SummHeader title='ОБЩАЯ СТОИМОСТЬ :'>
              <span
                style={{
                  color: 'red',
                  fontSize: 25,

                  margin: 0,
                }}>
                {`  ${!isNaN(costStep2) && +costStep2 + +costStep1 + ' $'} `}
              </span>
            </SummHeader>
          }
        </Typography>
      </div>
    </Paper>
  );
}
const SummHeader = ({ title, children }) => (
  <h6 style={{ color: '#304ffe', fontSize: 25, fontWeight: 'bold', margin: 0 }}>
    {title}
    {children}
  </h6>
);
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
