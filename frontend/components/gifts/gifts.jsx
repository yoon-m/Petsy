import React from 'react';
import { Link } from 'react-router-dom'

class Gifts extends React.Component {
    render() {
        return (
            <>
                <div className='gifts-container'>
                    <div className='gifts-header'>
                        <a href="#"><h2>Shop for gifts</h2></a>
                        <a href='#'><p>See more</p></a>
                    </div>

                    <div className='gift-item-container'>
                        <div className='gift1 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>Women's Fashion</p>
                            </div></a>
                        </div>

                        <div className='gift2 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>Personalized and custom jewelery</p>
                            </div></a>
                        </div>

                        <div className='gift3 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>Home gallery</p>
                            </div></a>
                        </div>

                        <div className='gift4 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>Petsy weddings</p>
                            </div></a>
                        </div>

                        <div className='gift5 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>DIY craft projects</p>
                            </div></a>
                        </div>

                        <div className='gift6 gift'><a href='#'>
                            <img src={window.gift1} />
                            <div className='gift-text'>
                                <p>One-of-a-kind gift ideas</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Gifts;