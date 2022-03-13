import { motion } from 'framer-motion';
import { useContext } from 'react';
import { MdAccountBalanceWallet as WalletIcon } from 'react-icons/md';
import Context from '../state/context';

// component to connect to metamask wallet
const WalletConnect = () => {
  const { walletConnected, walletAddress, handleWalletConnect } =
    useContext(Context);
  const isMetamaskInstalled = Boolean(window.ethereum);

  if (!isMetamaskInstalled) {
    return (
      <div className="text-red-400">
        No wallet found. Please install Metamask.
      </div>
    );
  }

  if (walletConnected && walletAddress) {
    return (
      <div className="text-slate-400">
        Your wallet address: <span className="text-white">{walletAddress}</span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={handleWalletConnect}
      type="button"
      className="inline-flex items-center py-3 px-4 w-fit text-lg text-white bg-purple-900 hover:bg-purple-800 rounded-3xl transform-gpu origin-center sm:w-auto"
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
