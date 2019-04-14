import * as actionTypes from '../constants';

const initialState = {
  costTamojnya: 0,
  angineType: 0,
  typeFuel: '',
  yearCost: null,
  cost: 0,
  brockerValue: 900
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COST_TAMOJNYA: {
      return applyCostTamojnya(state, action);
    }
    case actionTypes.TYPE_ANGINE: {
      return applyTypeAngine(state, action);
    }
    case actionTypes.TYPE_FUEL: {
      return applyTypeFuel(state, action);
    }
    case actionTypes.YEAR: {
      return applyYear(state, action);
    }
    case actionTypes.COST: {
      return applyCost(state, action);
    }
    case actionTypes.BROCKER: {
      return applyBrockerValue(state, action);
    }
    default:
      return state;
  }
};
const applyCost = (state, action) => {

const cost = +action.payload.cost
  return {
    ...state,
    cost
  }
};
const applyCostTamojnya = (state, action) => {
  let costTamojnya = +action.payload.numberformat;
if(costTamojnya > 0){
  costTamojnya = costTamojnya + 400;
}

  return {
    ...state,
    costTamojnya
  }
};

const applyTypeAngine = (state, action) => {
  const angineType = +action.payload.angineType;

  return {
    ...state,
    angineType
  }
};

const applyTypeFuel = (state, action) => {
  const typeFuel = action.payload.typeFuel;
  return {
    ...state,
    typeFuel,

  }
};

const applyYear = (state, action) => {
  const year = +action.payload.year;
  const date = new Date().getFullYear();
  if(year){
    const yearCost = (date - year) > 15 ? 15 : (date - year) < 0 ? '' : date - year  ;
    return {
      ...state,
      yearCost
    }
  }
  return {
    ...state,
    yearCost: year
  }
};

const applyBrockerValue = (state, action) => {
  const brockerValue = +action.payload.numberformat;
  return {
    ...state,
    brockerValue,

  }
};
