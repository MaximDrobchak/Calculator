// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  doAddCostCar,
  doAddCostTamojnya,
  doAddBrocker,
  doAddCostTransit,
} from '../actions';
import red from '@material-ui/core/colors/red';
import { useFormInput, calculta } from './functions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    fontSize: props => props.lable && '3em',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 300,
  },
});

function MuiInput (props){
  const { classes, placeholder, value } = props;
  return (
    <div className={classes.container}>
      <TextField
        id='standard-textarea'
        label={placeholder}
        placeholder={placeholder}
        multiline
        {...value}
        className={classes.textField}
        margin='normal'
      />
    </div>
  );
}

MuiInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const UseInput = withStyles(styles)(MuiInput);

function TextMaskCustom (props){
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(

            ref ? ref.inputElement :
            null,
        );
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom (props){
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix='$'
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class FormattedInputs extends React.PureComponent {
  constructor (props) {
    super(props);
    const { value } = props;
    this.state = {
      numberformat:
        !value ? props.brocker ? props.brocker :
        2000 :
        value,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      comision: 0,
    });
  };
  componentDidUpdate () {
    const { numberformat } = this.state;
    const {
      enableLabel,
      auction,
      enableBrocker,
      onAddCostCar,
      onAddCostTamojnya,
      onAddBrocker,
      onAddAllCost,
      enableTamojnya,
    } = this.props;
    if (enableLabel) {
      onAddCostCar({ numberformat });
      this.setState({ comision: calculta(auction, +numberformat) });

      onAddAllCost(+calculta(auction, +numberformat) + +numberformat);
    }
    if (enableBrocker) {
      onAddBrocker({ numberformat });
    }
    if (enableTamojnya && enableLabel) {
      onAddCostTamojnya({
        numberformat: +calculta(auction, +numberformat) + +numberformat,
      });
    }
  }

  render () {
    const { classes, brocker, customFormat } = this.props;
    const { numberformat, comision } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <TextField
            label={
              this.props.value && <h1 style={{ fontSize: 15 }}>Диллерские</h1>
            }
            // helperText={this.props.value && <h1 style={{ fontSize: 15 }}>Диллерские</h1>}
            className={classes.formControl}
            value={

                this.props.value ? this.props.value :
                numberformat
            }
            onChange={

                this.props.onChange ? this.props.onChange :
                this.handleChange('numberformat')
            }
            id='formatted-numberformat-input'
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <br />
        </div>
        {this.state.numberformat > 1 &&
        this.props.enableLabel && (
          <React.Fragment>
            <Typography
              variant='subheading'
              color='secondary'
              style={{ marginBottom: 10 }}>
              {comision}$ - Комиссия аукциона
            </Typography>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithFormatInputs = withStyles(styles)(FormattedInputs);

const mapStateToProps = state => ({
  costCar: state.summaState.costCar,
  step2State: state.step2State.cost,
  costTamojnya: state.step2State.costTamojnya,
  auction: state.step1State.auction,
});

const mapDispatchToProps = dispatch => ({
  onAddCostCar: payload => dispatch(doAddCostCar(payload)),
  onAddCostTamojnya: payload => dispatch(doAddCostTamojnya(payload)),
  onAddBrocker: payload => dispatch(doAddBrocker(payload)),
  onAddAllCost: payload => dispatch(doAddCostTransit(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WithFormatInputs);
