import React from 'react';

/**
 * Component 44 - A reusable React component
 */
const Component44 = (props) => {
    const { title, children, onClick } = props;
    
    return (
        <div className="component-44">
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
            <button onClick={onClick}>
                Click Me
            </button>
        </div>
    );
};

export default Component44;
