import React, { useState } from 'react';

const Select: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city-select">Thành phố:</label>
            <select id="city-select" value={selectedCity} onChange={handleChange}>
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
            {selectedCity && <p>Thành phố: {selectedCity}</p>}
        </div>
    );
}

export default Select;
