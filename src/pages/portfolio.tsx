export type Project = {
  img: string;
  alt: string;
  name: string;
  live: string;
  code: string;
  desc: string;
  tech: Array<string>;
};

import Card from '@/components/Card';

export default function Portfolio() {
  const projectInfo: Project[] = [
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'myCrypto Tracker',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['HTML', 'CSS', 'React'],
    },
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'Project 2',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['React', 'JS'],
    },
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'Project 3',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
      tech: ['React', 'JS'],
    },
  ];
  return (
    <section className='pt-80'>
      {projectInfo.map((project, index) => (
        <Card {...project} key={index} />
      ))}
    </section>
  );
}
