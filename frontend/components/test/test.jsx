import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

class Test extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
        return (
            <>
                <div className="nav-container">
                    <Modal />
                    <GreetingContainer />
                    <CategoryNav />

                    <h2>TEST PAGE</h2>  

                    <div className='test-slider-container'>
                        <input type="radio" name='test-images' id='ti1' defaultChecked/>
                        <input type="radio" name='test-images' id='ti2' />
                        <input type="radio" name='test-images' id='ti3' />
                        <input type="radio" name='test-images' id='ti4' />

                        <div className='sliders slider1' id='ts1'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/personalized1.jpg' />

                            <label htmlFor="ti4" className='pre'></label>
                            <label htmlFor="ti2" className='nxt'></label>
                        </div>

                        <div className='sliders slider2' id='ts2'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/personalized3.jpg' />

                            <label htmlFor="ti1" className='pre'></label>
                            <label htmlFor="ti3" className='nxt'></label>
                        </div>

                        <div className='sliders slider3' id='ts3'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/personalized2.jpg' />

                            <label htmlFor="ti2" className='pre'></label>
                            <label htmlFor="ti4" className='nxt'></label>
                        </div>

                        <div className='sliders slider4' id='ts4'>
                            <img src='https://s3.amazonaws.com/aa-petsy-public/personalized4.jpg' />

                            <label htmlFor="ti3" className='pre'></label>
                            <label htmlFor="ti1" className='nxt'></label>
                        </div>
                    </div>

                    

                    <Footer />
                </div>
            </>
        );
    }
}

export default Test;