import React, {
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
} from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import Input from '../components/input';

import auction_data, { typeCar } from '../data/auction';
import { portListOdessa } from '../data/ports';
import { connect } from 'react-redux';
import {
  doAddAuction,
  doAddSize,
  doAddCyti,
  doAddCostTransit,
  doAddStepCost1,
} from '../actions';
import { useFormInput, calculta } from '../components/functions';

function Step1 ({
  stepState,
  onAddAuction,
  onAddSize,
  onAddCyti,
  summaState,
  children,
  onAddStepCost1,
}){
  const auction = useFormInput('Copart');

  useEffect(
    () => {
      onAddAuction({ auction: auction.value });
    },
    [ auction.value ],
  );

  const size = useFormInput('size');

  useEffect(
    () => {
      onAddSize({ size: size.value });
    },
    [ size.value ],
  );
  const cytiUse = useFormInput('cityUse');

  useEffect(
    () => {
      onAddCyti({ cytiUse: cytiUse.value });
    },
    [ cytiUse.value ],
  );

  var index = typeCar.filter(item => item[1] === size.value && item[2]);
  let costTransit = 0;
  let result = 0;
  let summ = 0;
  if (stepState.mainCraft) {
    result = portListOdessa
      .map(item => item[0] === stepState.mainCraft[2] && item[1])
      .filter(el => el !== false);
    result = +result[0];

    costTransit =
      stepState.mainCraft && +stepState.mainCraft[index[0] && index[0][2]];
    summ = +result + +costTransit;
  }
  const [ calcInsurance, setCalcInsurance ] = useState(0);

  useEffect(
    () => {
      const calcInsurance = Math.ceil(
        (summaState.costCar + calculta(auction.value, summaState.costCar)) *
          0.015,
      );
      setCalcInsurance(calcInsurance);
    },
    [ summaState.costCar ],
  );

  useEffect(
    () => {
      onAddStepCost1({
        costStep1: (+summaState.allCost + +calcInsurance + +summ).toFixed(0),
      });
    },
    [ summaState.allCost, calcInsurance, summ ],
  );

  return (
    <Paper background='tomato' header='Расчет доставки авто'>
      {children}
      <Radio {...auction} options={auction_data} />
      <Typography variant='title' color='inherit'>
        Цена лота
      </Typography>

      <label>
        <Input enableLabel enableTamojnya />
      </label>

      <div style={{ display: 'inline-flex' }}>
        <Select
          header='Выберете площадку'
          {...cytiUse}
          options={stepState.cytisData}
        />
        <br />
        <div style={{ width: 75 }} />
      </div>

      <Select header='Размер Машины' {...size} options={typeCar} />

      <Typography variant='title' color='primary' style={{ fontSize: 12 }}>
        СТОИМОСТЬ ДОСТАВКИ В ПОРТ ОДЕССА:
        <span style={{ color: 'primary', fontSize: '1.90em', marginLeft: 10 }}>
          {
            !isNaN(summ) ? summ :
            0}
          <span style={{ marginLeft: 4 }}>$</span>
        </span>
      </Typography>
      <span style={{ color: 'black', fontSize: '0.4em' }}>
        Точную стоимость лоставки узнайте у менеджера
      </span>
      <hr />
      <div style={{ display: 'flex' }}>
        <Typography variant='title' color='primary' style={{ margin: 'auto' }}>
          {
            summaState.costCar &&
            summ &&
            isNaN(summaState.costCar + summ) ? null :
            <SummHeader title='ОБЩАЯ СТОИМОСТЬ :'>
              {!isNaN(
                (summaState.allCost + calcInsurance + summ).toFixed(0),
              ) && (
                <span
                  style={{
                    color: 'red',
                    fontSize: 25,
                    marginLeft: 20,
                  }}>{`${(summaState.allCost + calcInsurance + summ).toFixed(
                  0,
                )} $`}</span>
              )}
            </SummHeader>}
        </Typography>
      </div>
    </Paper>
  );
}
const mapStateToProps = state => ({
  stepState: state.step1State,
  summaState: state.summaState,
});
const mapDispatchToProps = dispatch => ({
  onAddAuction: payload => dispatch(doAddAuction(payload)),
  onAddSize: payload => dispatch(doAddSize(payload)),
  onAddCyti: payload => dispatch(doAddCyti(payload)),
  onAddCostTransit: payload => dispatch(doAddCostTransit(payload)),
  onAddStepCost1: payload => dispatch(doAddStepCost1(payload)),
});
const SummHeader = ({ title, children }) => (
  <h5 style={{ color: '#304ffe', margin: 0, fontWeight: 'bold' }}>
    {title}
    {children}
  </h5>
);
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
