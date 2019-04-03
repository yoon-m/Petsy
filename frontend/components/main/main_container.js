import { connect } from 'react-redux';
import Main from './main';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

// const mdp = dispatch => ({
//     fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
// });

export default connect(msp, null)(Main);