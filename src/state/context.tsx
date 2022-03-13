import React, { createContext, useEffect, useState } from 'react'

// types
type AppContextType = {
  walletConnected: boolean
  walletAddress: string | null
  handleWalletConnect: () => void
}
type ProviderProps = {
  children: JSX.Element | JSX.Element[] | string | string[]
}

// declare context
const defaultContext: AppContextType = {
  walletConnected: false,
  walletAddress: null,
  handleWalletConnect: function () {
    return undefined
  }
}
const Context = createContext(defaultContext)

const Provider = ({ children }: ProviderProps) => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  async function getAddress() {
    try {
      const [address] = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      return address
    } catch (err: any) {
      console.error('Unable to get wallet account:', err.message)
    }
  }

  async function connectWallet() {
    const address = await getAddress()
    setWalletConnected(true)
    setWalletAddress(address)
  }

  useEffect(() => {
    const eventName = 'accountsChanged'

    if (typeof window.ethereum === 'undefined') return

    const listener = ([address]: string[]) => {
      setWalletAddress(address)
    }

    window.ethereum.on(eventName, listener)

    return () => window.ethereum.removeListener(eventName, listener)
  }, [])

  return (
    <Context.Provider
      value={{
        walletConnected,
        walletAddress,
        handleWalletConnect: connectWallet
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider }
export default Context
