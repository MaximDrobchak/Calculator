
import React, { useState, Fragment } from 'react';
import { Typography } from '@material-ui/core';

 function feeString(money, stepCost) {
const {feeP, nds, fee, percent } = money;


  return (
    <Fragment>
      <Typography  variant="subheading" color="secondary">
              {Math.ceil(nds)} $ +20% НДС
      </Typography>
      <Typography  variant="subheading" color="secondary">
        {Math.ceil(fee)} $ +10% Пошлина
      </Typography>
      <Typography  variant="subheading" color="secondary">
        {Math.ceil(stepCost)} $ + Акциз
      </Typography>
    </Fragment>
  )
}

function useFormInput (initialValue){

  const [ value, setValue ] = useState(initialValue);

  function handleChange (e){
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export { useFormInput, feeString };

export function calculta(auction, purchasePrice){
  let feeA = 0,bidFee = 0,gateFee = 0;

  if (auction == 'Copart') {


    if (purchasePrice <= 99.99) {
      feeA = 1;
  }
  else if (purchasePrice <= 199.99) {
      feeA = 25;
  }
  else if (purchasePrice <= 299.99) {
      feeA = 50;
  }
  else if (purchasePrice <= 349.99) {
      feeA = 75;
  }
  else if (purchasePrice <= 399.99) {
      feeA = 75;
  }
  else if (purchasePrice <= 449.99) {
      feeA = 110;
  }
  else if (purchasePrice <= 499.99) {
      feeA = 110;
  }
  else if (purchasePrice <= 549.99) {
      feeA = 125;
  }
  else if (purchasePrice <= 599.99) {
      feeA = 130;
  }
  else if (purchasePrice <= 699.99) {
      feeA = 140;
  }
  else if (purchasePrice <= 799.99) {
      feeA = 155;
  }
  else if (purchasePrice <= 899.99) {
      feeA = 170;
  }
  else if (purchasePrice <= 999.99) {
      feeA = 185;
  }
  else if (purchasePrice <= 1199.99) {
      feeA = 200;
  }
  else if (purchasePrice <= 1299.99) {
      feeA = 225;
  }
  else if (purchasePrice <= 1399.99) {
      feeA = 240;
  }
  else if (purchasePrice <= 1499.99) {
      feeA = 250;
  }
  else if (purchasePrice <= 1599.99) {
      feeA = 260;
  }
  else if (purchasePrice <=1699.99) {
      feeA = 275;
  }
  else if (purchasePrice <= 1799.99) {
      feeA = 285;
  }
  else if (purchasePrice <= 1999.99) {
      feeA = 300;
  }
  else if (purchasePrice <= 2399.99) {
      feeA = 325;
  }
  else if (purchasePrice <= 2499.99) {
      feeA = 335;
  }
  else if (purchasePrice <= 2999.99) {
      feeA = 350;
  }
  else if (purchasePrice <= 3499.99) {
      feeA = 400;
  }
  else if (purchasePrice <= 3999.99) {
      feeA = 450;
  }
  else if (purchasePrice <= 4499.99) {
      feeA = 475;
  }
  else if (purchasePrice <= 4999.99) {
      feeA = 500;
  }
  else if (purchasePrice <= 5999.99) {
      feeA = 525;
  }
  else if (purchasePrice <= 7499.99) {
      feeA = 550;
  }
  else if (purchasePrice <= 9999.99) {
      feeA = 575;
  }
  else if (purchasePrice <= 14999.99) {
      feeA = 600;
  }
  else if (purchasePrice <= 19999.99) {
      feeA = purchasePrice * 0.04;
  }
  else if (purchasePrice <= 24999.99) {
      feeA = purchasePrice * 0.04;
  }
  else if (purchasePrice <= 29999.99) {
      feeA = purchasePrice * 0.04;
  }
  else if (purchasePrice <= 34999.99) {
      feeA = purchasePrice * 0.04;
  }
  else if (purchasePrice <= 10000000) {
      feeA = purchasePrice * 0.04;
  } else {
      feeA = purchasePrice * 0.04;
  }


 /* console.log('feeA: ' + feeA);*/


 /*New commission 15.01.2019*/

  if (purchasePrice <= 99.99) {
      bidFee = 0;
  }
  else if (purchasePrice <= 499.99) {
      bidFee = 39;
  }
  else if (purchasePrice <= 999.99) {
      bidFee = 49;
  }
  else if (purchasePrice <= 1499.99) {
      bidFee = 69;
  }
  else if (purchasePrice <= 1999.99) {
      bidFee = 79;
  }
  else if (purchasePrice <= 3999.99) {
      bidFee = 89;
  }
  else if (purchasePrice <= 5999.99) {
      bidFee = 99;
  }
  else if (purchasePrice <= 7999.99) {
      bidFee = 119;
  }
  else if (purchasePrice <= 10000000) {
      bidFee = 129;
  }
  /*console.log('bidFee: ' + bidFee);*/



  /* Комиссия Gate Fee Copart*/
  gateFee = 59;

  /*console.log('gateFee: ' + gateFee);*/
}

/*Если аукцион IAAI или Manheim*/
if (auction == 'IAAI') {
  /* Комиссия Fee A IAAI*/

  if (purchasePrice < 99) {
      feeA = 1;
  }
  else if (purchasePrice < 199) {
      feeA = 40;
  }
  else if (purchasePrice < 299) {
      feeA = 60;
  }
  else if (purchasePrice < 349) {
      feeA = 75;
  }
  else if (purchasePrice < 399) {
      feeA = 90;
  }
  else if (purchasePrice < 499) {
      feeA = 100;
  }
  else if (purchasePrice < 599) {
      feeA = 130;
  }
  else if (purchasePrice < 699) {
      feeA = 145;
  }
  else if (purchasePrice < 799) {
      feeA = 160;
  }
  else if (purchasePrice < 899) {
      feeA = 175;
  }
  else if (purchasePrice < 999) {
      feeA = 190;
  }
  else if (purchasePrice < 1099) {
      feeA = 205;
  }
  else if (purchasePrice < 1199) {
      feeA = 220;
  }
  else if (purchasePrice < 1299) {
      feeA = 230;
  }
  else if (purchasePrice < 1399) {
      feeA = 240;
  }
  else if (purchasePrice < 1499) {
      feeA = 255;
  }
  else if (purchasePrice < 1599) {
      feeA = 270;
  }
  else if (purchasePrice < 1799) {
      feeA = 290;
  }
  else if (purchasePrice < 1999) {
      feeA = 310;
  }
  else if (purchasePrice < 2199) {
      feeA = 335;
  }
  else if (purchasePrice < 2399) {
      feeA = 350;
  }
  else if (purchasePrice < 2599) {
      feeA = 365;
  }
  else if (purchasePrice < 2799) {
      feeA = 385;
  }
  else if (purchasePrice < 2999) {
      feeA = 400;
  }
  else if (purchasePrice < 3499) {
      feeA = 415;
  }
  else if (purchasePrice < 3999) {
      feeA = 430;
  }
  else if (purchasePrice < 4999) {
      feeA = 450;
  }
  else {
      feeA = (purchasePrice * 0.01) + 450;
  }
  /* Комиссия Bid Fee  IAAI*/
  if (purchasePrice < 499) {
      bidFee = 29;
  }
  else if (purchasePrice < 999) {
      bidFee = 39;
  }
  else if (purchasePrice < 1499) {
      bidFee = 49;
  }
  else if (purchasePrice < 1999) {
      bidFee = 59;
  }
  else if (purchasePrice < 2999) {
      bidFee = 69;
  }
  else if (purchasePrice < 3999) {
      bidFee = 79;
  }
  else if (purchasePrice < 9999999999) {
      bidFee = 89;
  }
      /* Комиссия Gate Fee IAAI*/
      gateFee = 59;
  }
  console.log('feeA', feeA)
  console.log('bidFee', bidFee)
  console.log('gateFee', gateFee)
  return feeA + bidFee + gateFee;
}
