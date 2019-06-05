import React from 'react';
import Header from './HeaderComponent';
import Body from './BodyComponent';
import Footer from './FooterComponent';

function Main(){
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}

export default Main;