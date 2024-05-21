import React, { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Nhập nội dung" 
                value={inputValue} 
                onChange={handleChange} 
            />
            {inputValue && (
                <div>
                    <button>Đang nhập tiêu đề</button>
                    <p>{inputValue}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
