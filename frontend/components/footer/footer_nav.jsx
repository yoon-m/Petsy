import React from 'react';

class FooterNav extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h4>Shop</h4>
                    <a href='#'><p>Gift cards</p></a>
                    <a href='#'><p>Petsy blog</p></a>
                </div>

                <div>
                    <h4>Sell</h4>
                    <a href='#'><p>Seller handbook</p></a>
                    <a href='#'><p>Teams</p></a>
                    <a href='#'><p>Forums</p></a>
                </div>

                <div>
                    <h4>About</h4>
                    <a href='#'><p>Petsy, Inc.</p></a>
                    <a href='#'><p>Policies</p></a>
                    <a href='#'><p>Investors</p></a>
                    <a href='#'><p>Careers</p></a>
                    <a href='#'><p>Press</p></a>
                    <a href='#'><p>Impact</p></a>
                </div>

                <div>
                    <h4>Follow Petsy</h4>
                    <a href='#'><p><i className="fab fa-facebook-square"></i> Facebook</p></a>
                    <a href='#'><p><i className="fab fa-instagram"></i> Instagram</p></a>
                    <a href='#'><p><i className="fab fa-pinterest-square"></i> Pinterest</p></a>
                    <a href='#'><p><i className="fab fa-twitter"></i> Twitter</p></a>
                </div>
            </>
        );
    }
}

export default FooterNav;