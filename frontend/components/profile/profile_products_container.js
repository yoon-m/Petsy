import { connect } from 'react-redux';
import ProfileProducts from './profile_products';
import { deleteProduct } from '../../actions/product_actions';

const mdp = dispatch => ({
    deleteProduct: id => dispatch(deleteProduct(id)),
});

export default connect(null, mdp)(ProfileProducts);