import { connect } from 'react-redux';
import { loadRules } from '../store/rules/actions';
import Layout from './Layout';

const mapDispatchToProps = (dispatch) => {
    return {
        loadRules: () => dispatch(loadRules()) // Function that dispatches the loadRules action
    }
}

export default connect(undefined, mapDispatchToProps)(Layout);