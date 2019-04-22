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
            photoFiles: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[price]', this.state.price);
        formData.append('product[description]', this.state.description);

        for (let i = 0; i < this.state.photoFiles.length; i++) {
            formData.append('product[photoFiles][]', this.state.photoFiles[i]);
        }
        
        this.props.createProduct(formData).then(this.props.history.push('/'));
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(e) {
        this.setState({ photoFiles: e.currentTarget.files[0] });
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
                            <div className='sell-left'>
                            <h2>Create a listing</h2>
                            <h4>Product Title:</h4>
                            <input type="text" value={this.state.title} onChange={this.handleChange('title')} required/>

                            <h4>Product Description:</h4>
                            <input type="text" value={this.state.description} onChange={this.handleChange('description')} required/>

                            <h4>Price:</h4>
                            <input type="number" min='0.01' step='0.01' onChange={this.handleChange('price')} required/>
                            <br></br>
                            <input type="submit" value='Create listing'/>
                            </div>

                            <div className='sell-right'>
                                <h2>Upload pictures for your listing</h2>
                                <input type="file" onChange={this.handleFile.bind(this)} multiple/>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Sell;