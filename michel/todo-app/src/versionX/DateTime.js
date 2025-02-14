import { useState, useEffect } from 'react';

export default function DateTime(props) {

    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        let id = setInterval(() => setDate(new Date()), 1000);
        return () => {
            window.clearInterval(id);
        }
    });
    
    return (
        date.toLocaleString()
    );
}