import { Project } from '../types';

import Card from '@/components/Card';

const PortfolioPreview = () => {
  const projectInfo: Project[] = [
    {
      img: '/ProjectImage1.png',
      alt: 'Description of the image displayed',
      name: 'myCrypto Tracker',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['HTML', 'CSS', 'React'],
    },
    {
      img: '/ProjectImage2.png',
      alt: 'Description of the image displayed',
      name: 'Project 2',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['React', 'JS'],
    },
    {
      img: '/ProjectImage3.png',
      alt: 'Description of the image displayed',
      name: 'Project 3',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['React', 'JS'],
    },
  ];
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-xl'>Here are a few of my projects below</h3>
      {projectInfo.map((project, index) => (
        <Card {...project} key={index} />
      ))}
    </div>
  );
};

export default PortfolioPreview;
