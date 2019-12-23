import { connect } from 'react-redux';
import { RegisterModal } from './RegisterModal';
import { toggleRegister } from '../../ducks/modals';
import { receiveErrors, clearError } from '../../ducks/errors';

const mapStateToProps = state => ({
  open: state.modals.register,
  errors: state.errors
});

const mapDispatchToProps = { toggleRegister, receiveErrors, clearError };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
