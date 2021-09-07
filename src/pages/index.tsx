import Head from 'next/head';
import PortfolioPreview from '@/components/PortfolioPreview';

export default function Home() {
  const title = 'Alec Johnson - Web Development Portfolio';
  const description =
    "Welcome to my personal portfolio! Take a look at the projects I've built so far in my programming journey.";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:title' content={title} />
      </Head>
      <main className='flex w-11/12 max-h-screen m-auto'>
        <div className='flex'>
          <div className='flex flex-col'>
            <h1 className='font-semibold tracking-tighter text-8xl'>
              Hi! Im Alec.
            </h1>
            <h3 className='text-3xl'>
              I create interactive websites and applications
            </h3>
            <PortfolioPreview />
          </div>
        </div>
      </main>
    </div>
  );
}
