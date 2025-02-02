import { useState, useEffect } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {
        const handleOnline =() =>{
            setIsOnline(true);
        };
        const handleOffline =() =>{
            setIsOnline(true);
        };
         return () =>{
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
    };
    }, []);

    return isOnline;
}

export default useOnline;