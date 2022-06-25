import React from 'react';
import './testSetup.css';

const TestSetup = (props) => {
    return (
        <div id="test-component-style">
            <p> Testing the no cra setup with {props.details}</p>
        </div>
    );
};

export default TestSetup;
