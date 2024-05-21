import React, { useState } from 'react';

function ChangeColor() {
    const [color, setColor] = useState('black');

    const toggleColor = () => {
        setColor(color === 'black' ? 'red' : 'black');
    };

    return (
        <div>
            <p style={{ color: color }}>Tiêu đề văn bản</p>
            <button onClick={toggleColor}>Thay đổi màu</button>
        </div>
    );
}

export default ChangeColor;
