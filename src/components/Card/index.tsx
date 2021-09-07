import Image from 'next/image';

import Accordion from '@/components/Accordion';
import { Project } from '../types';

const Card = (project: Project) => {
  return (
    <article className='relative flex flex-col my-5'>
      {/* <div className='z-10 grid grid-cols-1 p-3 bg-gray-400 rounded shadow-lg cursor-default select-none '>
        <div className='mb-2 text-xl font-semibold text-gray-900'>
          {project.name}
        </div>
        <div className='flex'>
          <a href={project.live} className='btn-card'>
            Live
          </a>
          <a href={project.code} className='btn-card'>
            Code
          </a>
        </div>
        <div className='mx-2 my-2 mr-5 '>
          <p className='text-sm text-gray-900'>{project.desc}</p>
        </div>
        <div>
          <div className='text-lg font-semibold text-gray-900'>Tech Stack:</div>
          <div>
            {project.tech.map((tec, i) => {
              return (
                <span key={i} className='mx-1 span-card'>
                  {tec}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className='absolute top-0 z-20 w-48 h-48'>
        <Image
          className='transition-all duration-150 transform rounded-lg shadow-lg object-fit hover:scale-150'
          src={project.img}
          alt={project.alt}
          width={354}
          height={200}
        />
      </div> */}

      <div className='relative p-4 bg-gray-900 rounded-lg dark:bg-gray-500'>
        <div className='relative flex flex-col items-center overflow-hidden rounded-lg md:bg-gray-500 md:dark:bg-gray-400 md:flex-row md:shadow-lg'>
          <div className='relative z-0 order-1 rounded-lg md:order-2 md:rounded-none'>
            <div className='relative flex'>
              {/* <Image
                className='absolute object-fill rounded-lg md:rounded-br-lg md:rounded-tr-lg md:rounded-bl-none'
                src={project.img}
                alt={project.alt}
                width={354}
                height={200}
              /> */}
              <Accordion />
            </div>

            <div className='absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden '>
              <h3 className='w-auto p-1 mb-2 text-2xl font-bold leading-tight text-white rounded-lg frosted'>
                {project.name}
              </h3>
            </div>
            <svg
              className='absolute top-0 hidden w-24 h-full -ml-12 text-gray-500 fill-current dark:text-gray-400 md:block'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>
          </div>

          <div className='z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-1/2 md:mt-0 '>
            <div className='h-full p-4 mx-2 bg-gray-500 rounded-lg shadow-xl dark:bg-gray-400 md:pr-18 md:pl-10 md:py-0 md:m-0 md:rounded-none md:rounded-l-lg md:shadow-none'>
              <h3 className='hidden text-2xl font-bold text-gray-300 dark:text-gray-700 md:block'>
                {project.name}
              </h3>
              <div className='flex my-2'>
                <a href={project.live} className='btn-card'>
                  Live
                </a>
                <a href={project.code} className='btn-card'>
                  Code
                </a>
              </div>
              <h2 className='mb-1 text-lg font-semibold text-gray-300 dark:text-gray-900'>
                Tech Stack:
              </h2>
              <>
                {project.tech.map((tec, i) => {
                  return (
                    <span key={i} className='span-card'>
                      {tec}
                    </span>
                  );
                })}
              </>
              <p className='justify-start px-2 py-1 mt-1 text-sm text-justify text-gray-300 bg-gray-800 rounded-lg dark:text-gray-200'>
                {project.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
