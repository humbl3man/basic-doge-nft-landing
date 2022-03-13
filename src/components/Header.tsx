import React from 'react'
import WalletConnect from './WalletConnect'

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center py-8 px-4 mx-auto max-w-7xl border-b border-b-zinc-800 sm:flex-row sm:justify-between lg:px-0">
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            className="block mr-4 w-16 h-16 rounded-full"
            src="/src/public/site/logo.png"
            alt="Basic Doge Logo"
            width="1500"
            height="1500"
          />
          <span className="text-xl font-bold tracking-tighter text-red-50 uppercase md:text-3xl heading-font">
            Basic Doge
          </span>
        </div>
        <WalletConnect />
      </div>
    </header>
  )
}

export default Header
