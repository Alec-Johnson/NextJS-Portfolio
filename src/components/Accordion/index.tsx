import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import Image from 'next/image';

const images = [
  '/ProjectImage1.png',
  '/ProjectImage2.png',
  '/ProjectImage3.png',
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Accordion = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='relative flex items-center justify-center w-96 md:z-0'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          animate='center'
          exit='exit'
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            alt='Project Image'
            width={354}
            height={200}
            src={images[imageIndex]}
            className='absolute object-fill rounded-lg md:rounded-br-lg md:rounded-tr-lg md:rounded-bl-none'
          />
        </motion.div>
      </AnimatePresence>
      <div className='next' onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className='prev' onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </div>
  );
};

export default Accordion;
