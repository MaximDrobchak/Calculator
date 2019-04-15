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
import { doAddTypeEngine ,doAddTypeFuel, doAddYear, doAddCost } from '../actions';


function Step2 ({
  onAddTypeEngine,
  onAddTypeFuel,
  onAddYear,
  allCost,
  stepState,
  cost,
}){
  const {
    angineType,
    typeFuel,
    yearCost,
    costTamojnya
  } = stepState;

    const fuelType = useFormInput('Бензин');

    useEffect(() => {
      const typeFuel = fuelType.value;
      onAddTypeFuel({ typeFuel });

    }, [fuelType.value]);

  const engines = useFormInput('2.0');

  useEffect(() => {
    const angineType = engines.value;
    onAddTypeEngine({ angineType });

  }, [engines.value]);

  const years = useFormInput(2014);

  useEffect(() => {
    const year = years.value;
    onAddYear({ year });

  }, [years.value]);
  // let cost;
  const [stepCost, setCost] = useState(null);

  useEffect(() => {
    if(typeFuel !== '' && angineType > 1){


      if(typeFuel == 'Дизель'){
        if(angineType <= 3.0){
          if(yearCost && yearCost > 0){
            setCost((85 * angineType) * yearCost);
          } else
          setCost(85 * angineType);
        }
        if(angineType > 3.0){
          if(yearCost && yearCost > 0){
            setCost((170 * angineType) * yearCost);
          } else
        setCost(170 * angineType);
        }
      }

    if(typeFuel == 'Бензин'){
        if(angineType <= 3.0){
          if(yearCost && yearCost > 0){
            setCost((56 * angineType) * yearCost);
          } else
          setCost(56 * angineType);
        }
        if(angineType > 3.0){
          if(yearCost && yearCost > 0){
            setCost((112 * angineType) * yearCost);
          } else
          setCost(112 * angineType);
        }

      }

    }
    console.log(stepCost)
  }, [typeFuel, angineType, yearCost,  costTamojnya, cost , stepCost]);


  const [brockerValue, setBrockerValue] = useState(stepState.brockerValue);

    useEffect(() => {
      setBrockerValue(stepState.brockerValue)
    }, [stepState.brockerValue]);

    const [money, setMoney] = useState(null);

    useEffect(() => {
      const nds = +(costTamojnya * 0.2);
      const fee = +(costTamojnya * 0.1);
      let percent;
      if(costTamojnya <= 10000){
        percent = 0.03;}
      else if(costTamojnya <= 20000){
        percent = 0.04;}
      else {percent = 0.05;}
      const feeP = +(costTamojnya * percent);
      const summ = Math.ceil(feeP + fee + nds + brockerValue + stepCost);
        console.log('feeP', feeP)
      setMoney({ summ, nds, fee , feeP, percent })
    }, [costTamojnya, stepCost]);


  return (
      <Paper background='tomato' header='Расчет разтаможки'>
      <Typography variant="title" color="inherit">
        Выберете тип топлива
        </Typography>
        <Select
          header='Выберете тип топлива'
          {...fuelType}
          options={fuel_data}
        />
        <Typography variant="title" color="inherit">
        Выберете обём двигателя
        </Typography>

        <Select
          header='Выберете обём двигателя'
          {...engines}
          options={engines_data}
        />

        <Typography variant="title" color="inherit">
          Выберете год автомобиля
        </Typography>

        <Select
          header='Выберете обём двигателя'
          {...years}
          options={years_data}
        />

        <Typography  variant="title" color="inherit">
          Експедиция в порту Одесса + брокерские услуги
        </Typography>
        <Input brocker={900} enableBrocker/>
        <Typography variant="title" color="secondary">
          Стоимость авто для расчетов растаможки: {allCost}$ +400$
        </Typography>
        {costTamojnya > 0  && (feeString(money, stepCost))}
          <hr />
        {(costTamojnya > 0 && cost > 0) && (
          <Typography  variant="h6" color="primary">
              ОБЩИЙ ТАМОЖЕННЫЙ СБОР: {money.summ}$
          </Typography>
        )}

      </Paper>

  );
}
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

});
export default connect(mapStateToProps,mapDispatchToProps)(Step2);

