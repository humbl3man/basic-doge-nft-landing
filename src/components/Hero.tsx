import { motion } from 'framer-motion';
import { FaHeart as Heart } from 'react-icons/fa';

import dogeImg from '../assets/doge.svg';
import { COLLECTION_URL } from 'config';

const Hero = () => {
  return (
    <div className="container py-10 px-4 mx-auto max-w-7xl md:flex md:justify-between md:items-center md:py-24">
      <div className="text-center md:text-left">
        <h1 className="mb-8 text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-indigo-500 sm:text-9xl">
          Minted <br />
          <span className="inline-flex items-center">
            <span className="mr-2">with</span>{' '}
            <motion.span
              className="inline-block"
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.25
              }}
            >
              <Heart className="inline text-red-700" />
            </motion.span>
          </span>
        </h1>
        {COLLECTION_URL ? (
          <motion.a
            href={COLLECTION_URL}
            rel="noreferer noopener"
            target="_blank"
            className="inline-block py-4 px-8 text-lg font-bold text-center text-black bg-yellow-500 hover:bg-yellow-400 rounded-full transform-gpu origin-center"
            initial={{
              y: 40,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 1.05
            }}
          >
            View Collection
          </motion.a>
        ) : (
          <div className="p-8 mx-auto max-w-lg bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl shadow-lg drop-shadow-lg">
            <p className="mb-4 text-3xl font-bold text-zinc-800">
              Coming Soon.
            </p>
            <p className="text-xl font-bold text-zinc-800">
              Follow us on twitter{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/basicdogenft"
              >
                @basicdogenft
              </a>{' '}
              for updates!
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8 md:mt-0 md:ml-8">
        <div className="inline-block object-contain overflow-hidden p-12 mx-auto bg-zinc-800 rounded-full shadow-sm shadow-black drop-shadow-lg">
          <img
            className="block mx-auto max-w-xs md:max-w-md"
            width={400}
            height={400}
            src={dogeImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
