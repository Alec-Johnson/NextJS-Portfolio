import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import Logo from 'public/Logo.svg';
import useScroll from '@/hooks/useScroll';
import ThemeSwitch from '@/components/ThemeSwitch';

const Navbar = () => {
  const { isScrolled, scrollTop } = useScroll();
  console.log(scrollTop);

  return (
    <motion.nav
      initial={{
        opacity: 1,
      }}
      animate={{
        y: isScrolled ? '-4.5rem' : 0,
        opacity: scrollTop > 50 ? 0 : 1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className='sticky top-0 z-50 flex justify-center w-full text-blue-700 bg-gray-500 dark:bg-gray-500 frosted h-14'
    >
      <div className='flex items-center justify-between w-2/3'>
        {/* https://nextjs.org/docs/messages/link-passhref */}
        <Link href='/' passHref>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex h-full cursor-pointer'
          >
            <Image height={30} width={30} src={Logo} alt='Website Logo' />
          </motion.div>
        </Link>
        <div className='flex items-center w-3/4 h-full xl:w-1/4 lg:w-2/3'>
          <ul className='flex items-center w-full h-full tracking-tighter justify-evenly'>
            <Link passHref href='/portfolio'>
              <li className='nav-btn'>Portfolio</li>
            </Link>
            <Link passHref href='/resume'>
              <li className='nav-btn'>Resume</li>
            </Link>
            <Link passHref href='/contact'>
              <li className='nav-btn'>Contact</li>
            </Link>
          </ul>
        </div>
        <div className='flex cursor-pointer'>
          <ThemeSwitch />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
