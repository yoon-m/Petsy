import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import CategoryNav from '../category_nav/category_nav';
import Footer from '../footer/footer';

class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProduct(this.state).then(this.props.history.push('/'));
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        return(
            <>
                <div className="nav-container">
                    <GreetingContainer />
                    <CategoryNav />

                    <div className='sell-container'></div>
                    <div className='sell-form-container'>
                        <form className='sell-form' onSubmit={this.handleSubmit}>
                            <h2>Create a listing</h2>
                            <h4>Product Title:</h4>
                            <input type="text" value={this.state.title} onChange={this.handleChange('title')} required/>

                            <h4>Product Description:</h4>
                            <input type="text" value={this.state.description} onChange={this.handleChange('description')} required/>

                            <h4>Price:</h4>
                            <input type="number" min='0.01' step='0.01' onChange={this.handleChange('price')} required/>
                            <br></br>
                            <input type="submit" value='Create listing'/>
                        </form>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Sell;