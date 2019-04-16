import React, { useEffect, useState } from 'react';
import { MyHEader } from '../components/paper';

import { Paper, TextField } from '@material-ui/core/';
import InputNumber from '../components/input';
import { useFormInput} from '../components/functions';
import { connect } from 'react-redux';
import { doAddTypeEngine ,doAddTypeFuel, doAddYear, doAddCost } from '../actions';


function Step2 ({
  costStep1,
  costStep2
}){
 const costDiller = useFormInput(500)
console.log('costDiller', {...costDiller})
  return (
      <Paper style={{ maxWidth: 250, margin: 'auto' }}>
      <MyHEader background='tomato' header={`${!isNaN(costStep1) ? costStep1 : ''} $`}/>
      <MyHEader background='tomato' header={`${costStep2} $`}/>
      <MyHEader background='tomato' header='Расчет разтаможки'/>
      <MyHEader background='tomato' header='Расчет разтаможки'/>
      <InputNumber {...costDiller} />


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
export default connect(mapStateToProps,mapDispatchToProps)(Step2);

