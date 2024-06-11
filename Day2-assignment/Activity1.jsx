import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const plus = (num) => {
        if (num == -2 && count <= 1) {
            return
        }
        setCount(count + num);
    }

    return (
        <div>
            <div>
                Button click count: {count}
            </div>
            <button
                onClick={() => plus(1)}
            >
                Click to count
            </button>
            <button
                onClick={() => plus(-2)}
            >
                Decrease by 2
            </button>
        </div>
    );
};


export default Count