import React from 'react';

class ProfileReviewImg extends React.Component {

    render() {
        let pic = null;
        debugger
        if (this.props.img) {
            debugger
            if (this.props.img.photoUrls) {
                pic = this.props.img.photoUrls[0];
            } else {
                pic = (<img src={window.noImg} onClick={this.linkShow.bind(this)} />);
            }
        }

        return (
            <>
                {pic}
            </>
        );
    }
}

export default ProfileReviewImg;