import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Validator from '../components/Validator';
import * as CounterActions from '../actions/counter';
import * as ValidatorActions from '../actions/validator';

function mapStateToProps(state) {
  // eslint-disable-next-line no-console
  console.log('Vinay--> Validator-->', state);
  return {
    validator: state.validator
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ValidatorActions,
    CounterActions,
    dispatch
  });
}


export default connect(mapStateToProps, mapDispatchToProps)(Validator);
