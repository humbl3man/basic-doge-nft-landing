import React, { createContext, useEffect, useState } from 'react';
import { isMetamaskInstalled } from 'utils';

const ethereum = (window as any).ethereum;

// types
export type AppContextType = {
  walletConnected: boolean;
  walletAddress: string | null;
  isMetamaskInstalled: boolean;
  handleWalletConnect: () => void;
};
type ProviderProps = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

// declare context
const defaultContext: AppContextType = {
  walletConnected: false,
  walletAddress: null,
  isMetamaskInstalled: false,
  handleWalletConnect: function () {
    return undefined;
  }
};
const Context = createContext(defaultContext);

const Provider = ({ children }: ProviderProps) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  async function getAddress() {
    try {
      const [address] = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      return address;
    } catch (err: any) {
      console.error('Unable to get wallet account:', err.message);
    }
  }

  async function connectWallet() {
    const address = await getAddress();
    setWalletConnected(true);
    setWalletAddress(address);
  }

  useEffect(() => {
    const eventName = 'accountsChanged';

    if (typeof ethereum === 'undefined') return;

    const listener = ([address]: string[]) => {
      setWalletAddress(address);
    };

    ethereum.on(eventName, listener);

    return () => ethereum.removeListener(eventName, listener);
  }, []);

  return (
    <Context.Provider
      value={{
        walletConnected,
        walletAddress,
        isMetamaskInstalled: isMetamaskInstalled(),
        handleWalletConnect: connectWallet
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
