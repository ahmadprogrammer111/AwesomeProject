import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import NetInfo, { addEventListener } from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';



export const ConnectivityContext = createContext({
    connected: false,
    checkNetwork: () => { },
    open: false,
    setOpen: (value: boolean) => { }
});


export const ConnectivityProvider = ({ children }: any) => {

    const [error, setError] = useState('')


    const [connected, setConnected] = useState<any>(false)
    const [open, setOpen] = useState(false)


    const connectionRef = useRef(connected)

    useEffect(() => {
        connectionRef.current = connected
    }, [connected])


    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            console.log("Details :?", state.details);
            console.log("Is Wifi enabled?", state.isWifiEnabled);

            if (!state.isWifiEnabled || !state.isConnected) {
                console.log('network Not  Connnected!!')
                setError('No Internet connection!! ')
                setOpen(true)

                console.log('Connected  Value-------->', connected)
            } else if (state.isConnected) {
                console.log('newrok Connnected !!!!')
                setOpen(false)

                console.log('Connected Value-------->', connected)
            }

            // updating the ref Value and state too
            connectionRef.current = connected
            setConnected(state.isConnected)
        });
        return () => unsubscribe();


    }, [])


    const checkNetwork: any = () => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setConnected(state.isConnected || false);
            setOpen(!state.isConnected)

        })
        // const unsubscribe = NetInfo.addEventListener(state => {
        //     console.log("Connection type", state.type);
        //     console.log("Is connected?", state.isConnected);
        //     console.log("Details :?", state.details);
        //     console.log("Is Wifi enabled?", state.isWifiEnabled);
        //     if (!state.isWifiEnabled || !state.isConnected) {
        //         console.log('network Not  Connnected!!')
        //         setOpen(true)
        //         setConnected(state.isConnected as any)
        //         console.log('Connected  Value-------->', connected)
        //     } else if (state.isWifiEnabled || state.isConnected) {
        //         console.log('newrok Connnected !!!!')
        //         setOpen(false)
        //         setConnected(state.isConnected)
        //         console.log('ConnectedValue-------->', connected)
        //     }
        // });
        // return unsubscribe();
    }


    return (
        <ConnectivityContext.Provider value={{ connected, checkNetwork, open, setOpen }}>
            {children}
            <SafeAreaView>
                <Snackbar
                    visible={open}
                    duration={1000000}
                    onDismiss={() => setOpen(false)}
                    action={{
                        label: 'Try Again',
                        onPress: () => {
                            checkNetwork()
                        },
                    }}>
                    {error}
                </Snackbar>
            </SafeAreaView>
        </ConnectivityContext.Provider>
    );
};
