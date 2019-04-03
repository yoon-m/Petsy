import React from 'react';

class Latest extends React.Component {
    render() {
        return (
            <>
                <div className='latest-container'>
                    <div className='latest-header'>
                        <a href="#"><h2>Browse our latest collections</h2></a>
                        <a href='#'><p>See more</p></a>
                    </div>

                    <div className='latest-item-container'>

                        <div className='latest-item'><a href='#' className='latest-links'>
                            <img src={window.latest2} />
                            <div className='latest-item-text'>
                                <p>EDITORS' PICKS</p>
                                <h3>Design ideas and inspiration</h3>
                            </div></a>
                        </div>

                        <div className='latest-item'><a href='#' className='latest-links'>
                            <img src={window.latest1} />
                            <div className='latest-item-text'>
                                <p>EDITORS' PICKS</p>
                                <h3>Jewelery, handbags and accessories</h3>
                            </div></a>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Latest;