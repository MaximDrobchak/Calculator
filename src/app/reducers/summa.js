import * as actionTypes from '../constants';

const initialState = {
  costCar: 0,
  costTransit: 0,
  allCost: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COST_CAR: {
      return applyCostCar(state, action);
    }
    case actionTypes.COST_TRANSIT: {
      return applyCostTransit(state, action);
    }
    default:
      return state;
  }
};

const applyCostCar = (state, action) => {
  const costCar = action.payload.numberformat;

  return {
    ...state,
    costCar
  }
};
const applyCostTransit = (state, action) => {
  const summ =  +action.payload.stateResult ;
  const costCar = state.costCar;
  const allCost  = +costCar + +summ;
console.log('applyCostTransit', summ)
  return {
    ...state,
    costTransit: summ,
    allCost:  allCost
  }
};
