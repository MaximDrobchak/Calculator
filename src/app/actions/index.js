import * as actionTypes from '../constants';

export const doAddAuction = payload => ({
  type: actionTypes.PICK_AUCTION,
  payload,
});

export const doAddSize = payload => ({
  type: actionTypes.PICK_SIZE,
  payload,
});

export const doAddCyti = payload => ({
  type: actionTypes.PICK_CYTI,
  payload,
});

export const doAddCostCar = payload => ({
  type: actionTypes.COST_CAR,
  payload,
});

export const doAddCostTransit = payload => {
  console.log('payload', payload)
  return {
  type: actionTypes.COST_TRANSIT,
  payload,
}};

export const doAddCostTamojnya = payload => ({
  type: actionTypes.COST_TAMOJNYA,
  payload,
});
export const doAddTypeEngine = payload => ({
  type: actionTypes.TYPE_ANGINE,
  payload,
});
export const doAddTypeFuel = payload => ({
  type: actionTypes.TYPE_FUEL,
  payload,
});
export const doAddYear = payload => ({
  type: actionTypes.YEAR,
  payload,
});
export const doAddCost = payload => ({
  type: actionTypes.COST,
  payload,
});
export const doAddBrocker = payload => ({
  type: actionTypes.BROCKER,
  payload,
});

export default {
  doAddAuction,
  doAddSize,
  doAddCyti,
  doAddCostCar,
  doAddCostTransit,
  doAddCostTamojnya,
  doAddTypeEngine,
  doAddTypeFuel,
  doAddYear,
  doAddCost
 };
