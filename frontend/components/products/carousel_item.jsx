import React from 'react';

class CarouselItem extends React.Component {

    render() {
        let pic;

        if (this.props.url) {
            pic = (<img src={this.props.url} />);
        } else {
            pic = <img src={window.noImg} />
        }

        return (
            <>                
                <div className='ci-img-container'>
                    {pic}
                </div>
            </>
        )
    }
}

export default CarouselItem;