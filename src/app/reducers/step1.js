import * as actionTypes from '../constants';
import { Copart } from '../data/auctions_data/copart';
import { IAAI } from '../data/auctions_data/iaa';
const initialState = {
  auction: null,
  size: '',
  cytisData: [],
  cytiUse: '',
  mainCraft: [],

  // fuel: null,
  // engine: null,
  // year: null,
  // cost: null,
  // brocker: null,
  // comision: null,
  // sertificate: null,
  // expenses: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PICK_AUCTION: {
      return addApplyPickAuction(state, action);
    }
    case actionTypes.PICK_SIZE: {
      return addApplyPickSize(state, action);
    }
    case actionTypes.PICK_CYTI: {
      return addApplyPickCyti(state, action);
    }
    default:
      return state;
  }
};

const addApplyPickAuction = (state, action) => {
  const auction = action.payload.auction;

  if (auction === 'Copart') {
    return {
      ...state,
      auction: action.payload.auction,
      cytisData: Copart,
    };
  }
  else {
    return {
      ...state,
      auction: action.payload.auction,
      cytisData: IAAI,
    };
  }
};

const addApplyPickSize = (state, action) => ({
  ...state,
  size: action.payload.size,
});

const addApplyPickCyti = (state, action) => {
  const mainCraft = state.cytisData.filter(
    item => item[1] === action.payload.cytiUse,
  );
console.log(mainCraft)
  return {
    ...state,
    mainCraft: mainCraft[0],
  };
};
