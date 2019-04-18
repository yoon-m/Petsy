import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexCarouselItem extends React.Component {
    linkToShow() {
        this.props.history.push(`/products/${this.props.id}`);
    }

    render() {
        return (
            <>
                <img src={this.props.url} onClick={this.linkToShow.bind(this)} />
            </>
        )
    }
}

export default withRouter(IndexCarouselItem);