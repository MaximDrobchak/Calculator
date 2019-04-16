import * as actionTypes from '../constants';

const initialState = {
  costCar: 0,
  costTransit: 0,
  allCost: 0,
  comission: 0,
  costStep1: 0,
  costStep2: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COST_CAR: {
      return applyCostCar(state, action);
    }
    case actionTypes.COST_TRANSIT: {
      return applyCostTransit(state, action);
    }
    case actionTypes.COST_STEP_1: {
      return applyStep1(state, action);
    }
    case actionTypes.COST_STEP_2: {
      return applyStep2(state, action);
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

const applyStep1 = (state, action) => ({
  ...state,
  costStep1: action.payload.costStep1
});

const applyStep2 = (state, action) => ({
  ...state,
  costStep2: action.payload.costStep2
});

// Не трогать руками
const applyCostTransit = (state, action) => {
  const summ =  +action.payload ;
  const costCar = state.costCar;
  const allCost  = +costCar + +summ;

  return {
    ...state,
    costTransit: summ,
    allCost:  summ
  }
};
