import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Step1 from '../container/Step1';
import Step2 from '../container/Step2';
import Step3 from '../container/Step3';
const gridExamplesPage = () => {
  const width = setWindowWidth();
  return (
    <React.Fragment>
      {
        width > 998 ? <MDBContainer>
          <MDBRow>
            <MDBCol md='4'>
              {' '}
              <Step1 />
            </MDBCol>
            <MDBCol md='4'>
              {' '}
              <Step2 />
            </MDBCol>
            <MDBCol md='4'>
              {' '}
              <Step3 />
            </MDBCol>
          </MDBRow>
        </MDBContainer> :
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12'>
              <Step1 />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='12'>
              <Step2 />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='12'>
              <Step3 />
            </MDBCol>
          </MDBRow>
        </MDBContainer>}
    </React.Fragment>
  );
};
function setWindowWidth (){
  const [ width, setWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const handlyResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handlyResize);

    return () => window.removeEventListener('resize', handlyResize);
  });
  return width;
}

export default gridExamplesPage;
