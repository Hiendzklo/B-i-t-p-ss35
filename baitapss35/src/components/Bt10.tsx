import React, { useState } from 'react';

const Checkbox: React.FC = () => {
    // State to store the selected hobbies
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

    // Function to update the selected hobbies based on checkbox changes
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const hobby = event.target.value;
        setSelectedHobbies(current => 
            current.includes(hobby)
                ? current.filter(item => item !== hobby) // Remove hobby if it's already selected
                : [...current, hobby] // Add hobby if not currently selected
        );
    };

    return (
        <div>
            <h3>Sở thích:</h3>
            <label>
                <input 
                    type="checkbox" 
                    value="Di chơi" 
                    checked={selectedHobbies.includes('Di chơi')}
                    onChange={handleCheckboxChange}
                /> Di chơi
            </label>
            <label>
                <input 
                    type="checkbox" 
                    value="Code" 
                    checked={selectedHobbies.includes('Code')}
                    onChange={handleCheckboxChange}
                /> Code
            </label>
            <label>
                <input 
                    type="checkbox" 
                    value="Bơi lội" 
                    checked={selectedHobbies.includes('Bơi lội')}
                    onChange={handleCheckboxChange}
                /> Bơi lội
            </label>
            <label>
                <input 
                    type="checkbox" 
                    value="Nhảy dây" 
                    checked={selectedHobbies.includes('Nhảy dây')}
                    onChange={handleCheckboxChange}
                /> Nhảy dây
            </label>
            <p>Sở thích: [{selectedHobbies.join(", ")}]</p>
        </div>
    );
}

export default Checkbox;
