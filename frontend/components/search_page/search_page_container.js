import { connect } from 'react-redux';
import SearchPage from './search_page';
import { searchProducts } from '../../actions/product_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        searchResults: Object.values(state.entities.search),
    };
};

const mdp = dispatch => ({
    searchProducts: searchValue => dispatch(searchProducts(searchValue)),

});

export default connect(msp, mdp)(SearchPage);