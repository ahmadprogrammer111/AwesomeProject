import React, { createContext, useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const ConnectivityContext = createContext(null);

export const ConnectivityProvider = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState<any>(true);


    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        // Cleanup the listener
        return () => unsubscribe();
    }, []);

    return (
        <ConnectivityContext.Provider value={isConnected}>
            {children}
        </ConnectivityContext.Provider>
    );
};
