import React from 'react';
import './Button.css';
function Button({children, onClick}:any) {
    return (
        <div>
            <button onClick={onClick} className="button">{children}</button>
        </div>
    );
}
export default Button;