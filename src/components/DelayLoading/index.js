import React, { Component } from 'react';

const DelayLoading = (props) => {
    if (props.error) {
        return <div>Sorry, there was a problem when loading the page.</div>;
    } else if (props.pastDelay) {
        return <div>Still loading...</div>;
    } else {
        return null;
    }
}

export default DelayLoading