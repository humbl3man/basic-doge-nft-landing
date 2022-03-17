import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  MdAccountBalanceWallet as WalletIcon,
  MdFileCopy
} from 'react-icons/md';
import Context from '../state/context';

let copyTimeout: number;
// component to connect to metamask wallet
const WalletConnect = () => {
  const {
    walletConnected,
    walletAddress,
    isMetamaskInstalled,
    handleWalletConnect
  } = useContext(Context);
  const addressInputRef = useRef<null | HTMLInputElement>(null);
  const [addressCopied, setAddressCopied] = useState(false);

  useEffect(() => {
    if (!addressCopied) return;
    copyTimeout = window.setTimeout(() => {
      setAddressCopied(false);
      window.clearTimeout(copyTimeout);
    }, 5000);

    return () => {
      window.clearTimeout(copyTimeout);
    };
  }, [addressCopied]);

  function handleCopyClick() {
    navigator.clipboard.writeText(addressInputRef.current?.value ?? '');
    setAddressCopied(true);
  }

  if (!isMetamaskInstalled) {
    return (
      <div className="text-red-400">
        No wallet found. Please install Metamask.
      </div>
    );
  }

  if (walletConnected && walletAddress) {
    return (
      <div className="flex relative items-center py-1 px-2 bg-zinc-700 rounded-lg">
        <input
          ref={addressInputRef}
          type="text"
          readOnly
          className="text-sm text-white bg-transparent"
          value={walletAddress}
        />
        <button
          type="button"
          onClick={handleCopyClick}
          className="inline-block p-1 ml-2 text-xl text-white"
        >
          <MdFileCopy />
        </button>
        {addressCopied && (
          <div className="absolute right-0 bottom-[-20px] text-xs text-zinc-300">
            Address copied!
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.button
      onClick={handleWalletConnect}
      type="button"
      className="inline-flex items-center py-3 px-4 w-fit text-lg text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-3xl transform-gpu origin-center sm:w-auto"
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 1.05
      }}
    >
      <WalletIcon className="mr-2 text-2xl" />
      <span>Connect Metamask Wallet</span>
    </motion.button>
  );
};

export default WalletConnect;
