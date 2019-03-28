import React from 'react';

class CategoryNav extends React.Component {
    render() {
        return(
            <>
                <div className='upper-line'></div>
                <div className='category-nav'>
                    <a href='#'>Jewelry & Accessories</a>
                    <a href='#'>Clothing & Shoes</a>
                    <a href='#'>Home & Living</a>
                    <a href='#'>Wedding & Party</a>
                    <a href='#'>Toys & Entertainment</a>
                    <a href='#'>Art & Collectibles</a>
                    <a href='#'>Craft Supplies</a>
                    <a href='#'>Vintage</a>
                    <a href='#'><i className="fas fa-gift"></i>Gifts</a>
                </div>
                <div className='lower-line'></div>
            </>
        );
    }
}

export default CategoryNav;