import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { getContrastingColor } from '../config/helpers'

function CustomButton({ type, title, handleClick, customStyles, loader = false }) {

    const snap = useSnapshot(state)

    const TextLoader = () => {
        const [dots, setDots] = useState('.');

        useEffect(() => {
            const intervalId = setInterval(() => {
                setDots((prevDots) => (prevDots.length >= 3 ? '.' : prevDots + '.'));
            }, 500);

            return () => clearInterval(intervalId);
        }, []);

        return <span>{dots}</span>;
    };

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    }

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title} {loader && <TextLoader />}
        </button>
    )
}

export default CustomButton