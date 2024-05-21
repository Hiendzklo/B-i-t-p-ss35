import React, { useState } from 'react';

function Toggle() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Ẩn' : 'Hiện'}
            </button>
            {isVisible && <p>Tiêu đề văn bản</p>}
        </div>
    );
}

export default Toggle;
