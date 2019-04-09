import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { searchProducts } from '../../actions/product_actions';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        searchResults: Object.values(state.entities.search),
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    searchProducts: searchValue => dispatch(searchProducts(searchValue)),
});

export default connect(msp, mdp)(Greeting);