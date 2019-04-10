import React from 'react';

class CarouselItem extends React.Component {

    render() {
        return (
            <>                
                <div className='ci-img-container'>
                    <img src={this.props.url} />
                </div>
            </>
        )
    }
}

export default CarouselItem;