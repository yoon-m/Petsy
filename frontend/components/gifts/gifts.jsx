import React from 'react';
import { Link } from 'react-router-dom'

class Gifts extends React.Component {
    render() {
        return (
            <>
                <div className='gifts-container'>
                    <div className='gifts-header'>
                        <a href="/#/products"><h2>Shop for gifts</h2></a>
                        <a href='/#/products'><p>See more</p></a>
                    </div>

                    <div className='gift-item-container'>
                        <div className='gift1 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift1.jpeg' />
                            <div className='gift-text'>
                                <p>Dog Fashion</p>
                            </div></a>
                        </div>

                        <div className='gift2 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift2.jpeg' />
                            <div className='gift-text'>
                                <p>Evening Wear</p>
                            </div></a>
                        </div>

                        <div className='gift3 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift3.jpeg' />
                            <div className='gift-text'>
                                <p>Fox Fashion</p>
                            </div></a>
                        </div>

                        <div className='gift4 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift4.jpeg' />
                            <div className='gift-text'>
                                <p>Wolf Fashion</p>
                            </div></a>
                        </div>

                        <div className='gift5 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift5.jpeg' />
                            <div className='gift-text'>
                                <p>Business Casual</p>
                            </div></a>
                        </div>

                        <div className='gift6 gift'><a href='/#/products'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/gift6.jpeg' />
                            <div className='gift-text'>
                                <p>Panda Fashion</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Gifts;