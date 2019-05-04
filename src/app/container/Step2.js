import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import Input, { UseInput } from '../components/input';
import years_data from '../data/years';
import fuel_data from '../data/fuel';
import engines_data from '../data/engine';

import { useFormInput, feeString } from '../components/functions';
import { connect } from 'react-redux';
import {
  doAddTypeEngine,
  doAddTypeFuel,
  doAddYear,
  doAddCost,
  doAddStepCost2,
} from '../actions';

function Step2 ({
  onAddTypeEngine,
  onAddTypeFuel,
  onAddYear,
  allCost,
  stepState,
  cost,
  onAddStepCost2,
}){
  const { angineType, typeFuel, yearCost, costTamojnya } = stepState;

  const fuelType = useFormInput('Бензин');

  useEffect(
    () => {
      const typeFuel = fuelType.value;
      onAddTypeFuel({ typeFuel });
    },
    [ fuelType.value ],
  );

  const engines = useFormInput('2.0');

  useEffect(
    () => {
      const angineType = engines.value;
      onAddTypeEngine({ angineType });
    },
    [ engines.value ],
  );

  const years = useFormInput(2014);

  useEffect(
    () => {
      const year = years.value;
      onAddYear({ year });
    },
    [ years.value ],
  );
  // let cost;
  const [ stepCost, setCost ] = useState(null);

  useEffect(
    () => {
      if (typeFuel !== '' && angineType > 1) {
        if (typeFuel == 'Дизель') {
          if (angineType <= 3.0) {
            if (yearCost && yearCost > 0) {
              setCost(85 * angineType * yearCost);
            }
            else setCost(85 * angineType);
          }
          if (angineType > 3.0) {
            if (yearCost && yearCost > 0) {
              setCost(170 * angineType * yearCost);
            }
            else setCost(170 * angineType);
          }
        }

        if (typeFuel == 'Бензин') {
          if (angineType <= 3.0) {
            if (yearCost && yearCost > 0) {
              setCost(56 * angineType * yearCost);
            }
            else setCost(56 * angineType);
          }
          if (angineType > 3.0) {
            if (yearCost && yearCost > 0) {
              setCost(112 * angineType * yearCost);
            }
            else setCost(112 * angineType);
          }
        }
      }
      console.log(stepCost);
    },
    [ typeFuel, angineType, yearCost, costTamojnya, cost, stepCost ],
  );

  const [ brockerValue, setBrockerValue ] = useState(stepState.brockerValue);

  useEffect(
    () => {
      setBrockerValue(stepState.brockerValue);
    },
    [ stepState.brockerValue ],
  );

  const [ money, setMoney ] = useState({
    summ: undefined,
    nds: undefined,
    fee: undefined,
    feeP: undefined,
    percent: undefined,
  });

  useEffect(
    () => {
      const nds = +(costTamojnya * 0.2);
      const fee = +(costTamojnya * 0.1);
      let percent;
      if (costTamojnya <= 10000) {
        percent = 0.03;
      }
      else if (costTamojnya <= 20000) {
        percent = 0.04;
      }
      else {
        percent = 0.05;
      }
      const feeP = +(costTamojnya * percent);
      const summ = Math.ceil(feeP + fee + nds + brockerValue + stepCost);

      setMoney({ summ, nds, fee, feeP, percent });
    },
    [ costTamojnya, stepCost ],
  );
  onAddStepCost2({ costStep2: money.summ });

  return (
    <Paper background='tomato' header='Расчет раcтаможки'>
      <Select header='Выберете тип топлива' {...fuelType} options={fuel_data} />

      <Select
        header='Выберете год автомобиля'
        {...engines}
        options={engines_data}
      />

      <Select
        header='Выберете обём двигателя'
        {...years}
        options={years_data}
      />

      <Typography
        variant='title'
        color='inherit'
        style={{ fontSize: '0.52em' }}>
        Експедиция в порту Одесса + брокерские услуги
      </Typography>
      <Input brocker={900} enableBrocker />

      <hr />
      {costTamojnya > 0 &&
      cost > 0 && (
        <Typography variant='title' color='primary' style={{ display: 'flex' }}>
          <SummHeader title='ПЛАТЕЖ В БЮДЖЕТ:'>
            {
              <span
                style={{
                  color: 'red',
                  fontSize: 25,
                  marginLeft: 20,
                }}>{`${money.summ} $`}</span>
            }
          </SummHeader>
        </Typography>
      )}
    </Paper>
  );
}
const SummHeader = ({ title, children }) => (
  <h5 style={{ color: '#304ffe', margin: 'auto', fontWeight: 'bold' }}>
    {title}
    {children}
  </h5>
);
const mapStateToProps = state => ({
  stepState: state.step2State,
  cost: state.summaState.costCar,
  allCost: state.summaState.allCost,
});
const mapDispatchToProps = dispatch => ({
  onAddTypeEngine: payload => dispatch(doAddTypeEngine(payload)),
  onAddTypeFuel: payload => dispatch(doAddTypeFuel(payload)),
  onAddYear: payload => dispatch(doAddYear(payload)),
  onAddCost: payload => dispatch(doAddCost(payload)),
  onAddStepCost2: payload => dispatch(doAddStepCost2(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step2);
