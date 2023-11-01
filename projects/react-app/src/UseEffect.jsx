import { useEffect } from 'react';

// React component utilizing useEffect hook to log to console
const UseEffect = () => {
    useEffect(() => {
        console.log('Mounting. . . ');
    });
       return ( 
        <h1> 
            Geeks....! 
        </h1> 
    ); 
} 
export default UseEffect;