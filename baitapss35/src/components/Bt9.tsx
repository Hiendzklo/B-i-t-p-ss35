import React, { useState } from 'react';

const Radio: React.FC = () => {
    const [gender, setGender] = useState<string>('Nam');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setGender(event.target.value);
    };

    return (
        <div>
            <h3>Giới tính:</h3>
            <label>
                <input 
                    type="radio" 
                    value="Nam" 
                    checked={gender === 'Nam'} 
                    onChange={handleChange}
                /> Nam
            </label>
            <label>
                <input 
                    type="radio" 
                    value="Nữ" 
                    checked={gender === 'Nữ'} 
                    onChange={handleChange}
                /> Nữ
            </label>
            <label>
                <input 
                    type="radio" 
                    value="Khác" 
                    checked={gender === 'Khác'} 
                    onChange={handleChange}
                /> Khác
            </label>
            <p>Giới tính: {gender}</p>
        </div>
    );
}

export default Radio;
