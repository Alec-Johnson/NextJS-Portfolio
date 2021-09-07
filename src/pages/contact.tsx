import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center mt-4'>
      <div className='flex flex-col items-center px-8 bg-gray-400 rounded-lg dark:bg-gray-800'>
        <h1 className='mt-2 text-4xl'>Contact Info</h1>
        <ul className='flex py-4 my-4 border-4 border-blue-700 rounded-lg md:flex-row'>
          <li className='px-4 text-xl form-text'>akj3211@gmail.com</li>
          <p className='text-xl form-text'>/</p>
          <li className='px-4 text-xl form-text'>952-836-4408</li>
          <p className='text-xl form-text'>/</p>
          <li className='px-4 text-xl form-text'>Minneapolis, MN</li>
        </ul>

        <ContactForm />
      </div>
    </div>
  );
}
