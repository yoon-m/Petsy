import React from 'react';

class IndexCarouselItem extends React.Component {

    render() {
        return (
            <>
                <img src={this.props.url} />
            </>
        )
    }
}

export default IndexCarouselItem;