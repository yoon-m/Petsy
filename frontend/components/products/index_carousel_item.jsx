import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexCarouselItem extends React.Component {
    linkToShow() {
        this.props.history.push(`/products/${this.props.id}`);
    }

    render() {
        let pic;

        if (this.props.url) {
            pic = (<img src={this.props.url} onClick={this.linkToShow.bind(this)} />);
        } else {
            pic = <img src={window.noImg} onClick={this.linkToShow.bind(this)} />
        }

        return (
            <>
                {pic}
            </>
        )
    }
}

export default withRouter(IndexCarouselItem);