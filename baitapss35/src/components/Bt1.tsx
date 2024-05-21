import React, { useState } from 'react';

interface Props {
}

const NameDisplay: React.FC<Props> = () => {
    const [name, setName] = useState<string>('Nguyễn Văn A');

    return (
        <div>
            <p>Ho và tên: {name}</p>
        </div>
    );
}

export default NameDisplay;
