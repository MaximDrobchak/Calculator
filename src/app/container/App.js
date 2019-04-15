
import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import NavBar from '../components/NavBar'
import './index.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import video from '../data/videoplayback.mp4';
import Step1 from './Step1';
import Step2 from './Step2';
import { styles } from './styles'


const gridExamplesPage = () => {
  useEffect(() => {
    document.getElementById('forsage').play()
    console.log('play')
  }, [])

  return (
    <div>
      {/* <NavBar /> */}
      <WithVide />
      <WithMain />
    </div>
  )
};
function Video(props){
  const { classes } = props;
  return (
      <video autoplay muted loop className={classes.video} id='forsage'>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
  )
}
Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithVide = withStyles(styles)(Video);

function Main(props){
  const { classes } = props;
  const width = setWindowWidth();
  return (
    <div className={classes.main} >
      {/* <NavBar title='Расчет доставки авто'/> */}
      <MDBContainer className={classes.root} style={{display: 'flex', flexDirection: width > 992 ? 'row': 'column'}}>


      <div className={classes.step}  >
        <Step1 />
      </div>

      <div  className={classes.step} style={{marginTop: width < 992 ? '93vh': 0}} >
        <Step2 />
      </div>
      </MDBContainer>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithMain = withStyles(styles)(Main);
function setWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handlyResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handlyResize);

		return () =>
			window.removeEventListener('resize', handlyResize);
	});
	return width;
}

export default gridExamplesPage
