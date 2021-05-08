import React from 'react';

const Footer = () => {
const footerStyle={
    backgroundColor:'#BC8F8F',
    padding:'20px'

}
    return (
        <div style={footerStyle}>
            <p>Copyright @ {(new Date()).getFullYear()} All Rights Reserved by Anjuman</p>
        </div>
    );
};

export default Footer;