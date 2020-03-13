import {useState} from 'react'

export const useDarkMode = (initialValue) => {
    const [storedStatus, setStoredStatus] = useState(() => {
        if (localStorage.getItem("dark-mode") !== null) {
            return (JSON.parse(localStorage.getItem("dark-mode"), initialValue));
        }
        else {
            localStorage.setItem("dark-mode", initialValue);
            return initialValue;
        }
    });

    const setStatus = (initialValue) => {
        localStorage.setItem("dark-mode", !initialValue);
        setStoredStatus(!initialValue);
    }

    return [storedStatus, setStatus];
}