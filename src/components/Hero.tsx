import { motion } from 'framer-motion';
import { BsFillSuitHeartFill as Heart } from 'react-icons/bs';

import dogeImg from '../assets/doge.svg';

type HeroProps = {
  collectionURL: string;
};
const Hero: React.FC<HeroProps> = ({ collectionURL }) => {
  return (
    <div className="container py-10 px-4 mx-auto max-w-7xl md:flex md:justify-between md:items-center md:py-24">
      <div className="text-center md:text-left">
        <motion.h1
          initial={{
            y: -20,
            opacity: 0.8
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          className="mb-8 text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-purple-500 sm:text-9xl"
        >
          Minted <br />
          with <Heart className="inline text-red-700" />
        </motion.h1>
        {collectionURL ? (
          <motion.a
            href={collectionURL}
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
        <img
          className="block mx-auto max-w-xs md:max-w-md"
          width={600}
          height={600}
          src={dogeImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
