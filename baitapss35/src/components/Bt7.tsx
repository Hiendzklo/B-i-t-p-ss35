import React, { useState } from 'react';

const CountText: React.FC = () => {
    const [text, setText] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={handleInputChange}
                placeholder="Nhập dữ liệu" 
                style={{ width: '100%', padding: '8px' }}
            />
            <p>Số ký tự: {text.length}</p>
        </div>
    );
}

export default CountText;
