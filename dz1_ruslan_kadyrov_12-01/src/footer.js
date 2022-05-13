import React from 'react';
import './footer.css'

const Text = (props) => {
    return (
        <div className='slava'>Героям {props.text}</div>
    )
}

const Data = (props) => {
    return (
        <div className='data'>Дата: {props.data}</div>
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <Text text='Слава!'/>
            <Data data='24.02.22'/>
        </div>
    );
};

export default Footer;