import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBContainer,
} from 'mdbreact';

const MainCard = props => {
  const { header, children } = props;
  return (
    <MDBContainer style={{ minWidth: 480, height: '90vh', minHeight: 900 }}>
      <MDBCard className='text-center'>
        <MDBCardHeader color='primary-color'>{header}</MDBCardHeader>
        <MDBCardBody>{children}</MDBCardBody>
        <MDBCardFooter color='primary-color' />
      </MDBCard>
    </MDBContainer>
  );
};

export default MainCard;
