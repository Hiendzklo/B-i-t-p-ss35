import React, { useState } from 'react';

const Count: React.FC = () => {
    // State to store the count value
    const [count, setCount] = useState<number>(0);

    // Function to increment the count
    const incrementCount = (): void => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Bạn đã click {count} lần</p>
            <button onClick={incrementCount}>Click để tăng số lần click</button>
        </div>
    );
}

export default Count;
