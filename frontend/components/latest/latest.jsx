import React from 'react';

class Latest extends React.Component {
    render() {
        return (
            <>
                <div className='latest-container'>
                    <div className='latest-header'>
                        <a href="/#/products"><h2>Browse our latest collections</h2></a>
                        <a href='/#/products'><p>See more</p></a>
                    </div>

                    <div className='latest-item-container'>

                        <div className='latest-item'><a href='/#/products' className='latest-links'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/latest2.jpg' />
                            <div className='latest-item-text'>
                                <p>EDITORS' PICKS</p>
                                <h3>Design ideas and inspiration</h3>
                            </div></a>
                        </div>

                        <div className='latest-item'><a href='/#/products' className='latest-links'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/latest3.jpg' />
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