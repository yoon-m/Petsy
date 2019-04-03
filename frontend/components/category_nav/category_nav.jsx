import React from 'react';

class CategoryNav extends React.Component {
    toggleDrop(e) {
        if (e.target.matches('.j-a-link')) {
            $('.c-s-drop').removeClass('cat-drop-show');
            $('.h-l-drop').removeClass('cat-drop-show');
            $('.w-p-drop').removeClass('cat-drop-show');
            $('.crafts-drop').removeClass('cat-drop-show');
            $('.j-a-drop').addClass('cat-drop-show');
        } else if (e.target.matches('.c-s-link')) {
            $('.j-a-drop').removeClass('cat-drop-show');
            $('.h-l-drop').removeClass('cat-drop-show');
            $('.w-p-drop').removeClass('cat-drop-show');
            $('.crafts-drop').removeClass('cat-drop-show');
            $('.c-s-drop').addClass('cat-drop-show');
        } else if (e.target.matches('.h-l-link')) {
            $('.h-l-drop').addClass('cat-drop-show');
        } else if (e.target.matches('.w-p-link')) {
            $('.w-p-drop').addClass('cat-drop-show');
        } else if (e.target.matches('.crafts-link')) {
            $('.crafts-drop').addClass('cat-drop-show');
        }
    }

    clearDrop(e) {
        $('.j-a-drop').removeClass('cat-drop-show');
        $('.c-s-drop').removeClass('cat-drop-show');
        $('.h-l-drop').removeClass('cat-drop-show');
        $('.w-p-drop').removeClass('cat-drop-show');
        $('.crafts-drop').removeClass('cat-drop-show');
    }

    render() {
        return(
            <>
                <div className='upper-line' ></div>
                <div className='category-nav'>
                    <a href='/#/products' className='j-a-link' onMouseEnter={this.toggleDrop} >Jewelry & Accessories</a>
                    <a href='/#/products' className='c-s-link' onMouseEnter={this.toggleDrop} >Clothing & Shoes</a>
                    <a href='/#/products' className='h-l-link' onMouseEnter={this.toggleDrop} >Home & Living</a>
                    <a href='/#/products' className='w-p-link' onMouseEnter={this.toggleDrop} >Wedding & Party</a>
                    <a href='/#/products'>Toys & Entertainment</a>
                    <a href='/#/products'>Art & Collectibles</a>
                    <a href='/#/products' className='crafts-link' onMouseOver={this.toggleDrop} onMouseLeave={this.clearDrop} >Craft Supplies</a>
                    <a href='/#/products'>Vintage</a>
                    <a href='/#/products'><i className="fas fa-gift"></i>Gifts</a>
                </div>
                <div className='lower-line'></div>
                
                {/* <div className='j-a-drop cat-drop' onMouseLeave={this.clearDrop}>
                    <div className='j-a-left'>
                        <h3>ALL JEWELRY & ACCESSORIES</h3>
                        <ul>
                            <a href='#'><li>ACCESSORIES</li></a>
                            <a href='#'><li>BAGS & PURSES</li></a>
                            <a href='#'><li>NECKLACES</li></a>
                            <a href='#'><li>RINGS</li></a>
                            <a href='#'><li>EARRINGS</li></a>
                            <a href='#'><li>BRACELETS</li></a>
                            <a href='#'><li>BODY JEWELRY</li></a>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='c-s-drop cat-drop' onMouseLeave={this.clearDrop}>
                    <h3>ALL CLOTHING & SHOES</h3>
                    <ul>
                        <a href='#'><li>WOMEN'S</li></a>
                        <a href='#'><li>MEN'S</li></a>
                        <a href='#'><li>KIDS' & BABY</li></a>
                        <a href='#'><li>BAGS & PURSES</li></a>
                    </ul>
                </div>

                <div className='h-l-drop cat-drop' onMouseLeave={this.clearDrop}>
                    <h3>ALL HOME & LIVING</h3>
                    <ul>
                        <a href='#'><li>HOME</li></a>
                        <a href='#'><li>BATH & BEAUTY</li></a>
                        <a href='#'><li>PET SUPPLIES</li></a>
                    </ul>
                </div>

                <div className='w-p-drop cat-drop' onMouseLeave={this.clearDrop}>
                    <h3>ALL WEDDING & PARTY</h3>
                    <ul>
                        <a href='#'><li>PARTY SUPPLIES</li></a>
                        <a href='#'><li>INVITATIONS & PAPER</li></a>
                        <a href='#'><li>WEDDING DECORATIONS</li></a>
                        <a href='#'><li>WEDDING GIFTS</li></a>
                        <a href='#'><li>WEDDING ACCESSORIES</li></a>
                        <a href='#'><li>WEDDING CLOTHING</li></a>
                        <a href='#'><li>WEDDING JEWELRY</li></a>
                    </ul>
                </div>

                <div className='crafts-drop cat-drop' onMouseLeave={this.clearDrop}>
                    <h3>ALL CRAFT SUPPLIES & TOOLS</h3>
                    <ul>
                        <a href='#'><li>HOME & HOBBY</li></a>
                        <a href='#'><li>JEWELRY & BEAUTY</li></a>
                        <a href='#'><li>SEWING & FIBER</li></a>
                        <a href='#'><li>PAPERCRAFT</li></a>
                        <a href='#'><li>VISUAL ARTS</li></a>
                        <a href='#'><li>SCULPTING & FORMING</li></a>
                    </ul>
                </div> */}
            </>
        );
    }
}

export default CategoryNav;