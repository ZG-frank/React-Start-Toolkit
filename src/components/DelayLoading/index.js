import React, { Component } from 'react';

const  DelayLoading = (props) => {
    console.log(props)
    if (props.error) {
        return <div>Sorry, there was a problem when loading the page.</div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

export default DelayLoading