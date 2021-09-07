import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ fullName: '', email: '', message: '' }}
      validationSchema={Yup.object({
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={async (values) => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        router.push('/');
      }}
    >
      {(formik) => (
        <Form className='block w-full'>
          <div className='flex flex-wrap py-4 mx-3 bg-blue-400 rounded-t-lg shadow-xl dark:bg-blue-700 md:-mx-3'>
            <div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
              <label
                className='block mb-2 text-xs form-text'
                htmlFor='fullName'
              >
                Name
              </label>
              <Field
                type='text'
                name='fullName'
                className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none dark:border-gray-800 dark:bg-gray-700 focus:outline-none dark:focus:text-gray-500'
              />
              <ErrorMessage
                className='text-xs italic text-red-500'
                name='fullName'
              />
            </div>
          </div>

          <div className='flex flex-wrap py-4 mx-3 bg-blue-500 shadow-xl dark:bg-blue-800 md:-mx-3'>
            <div className='w-full px-3'>
              <label className='block mb-2 text-xs form-text' htmlFor='email'>
                E-mail
              </label>
              <Field
                className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none dark:border-gray-800 dark:bg-gray-700 focus:outline-none dark:focus:bg-gray-800 focus:border-gray-200'
                type='email'
                name='email'
              />
              <ErrorMessage
                className='text-xs italic text-red-500'
                name='email'
              />
            </div>
          </div>

          <div className='flex flex-wrap py-4 mx-3 bg-blue-600 rounded-b-lg shadow-xl dark:bg-blue-900 md:-mx-3'>
            <div className='w-full px-3'>
              <label className='block mb-2 text-xs form-text' htmlFor='message'>
                Message
              </label>
              <Field
                className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded md:h-48 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-200 focus:outline-none dark:focus:bg-gray-800 focus:border-gray-200 h-36'
                type='textarea'
                name='message'
              />
              <ErrorMessage
                className='text-xs italic text-red-500'
                name='message'
              />
            </div>
          </div>

          {formik.submitCount > 0 && !formik.isValid && (
            <p className='text-lg italic text-red-500'>
              Some fields are missing/invalid.
            </p>
          )}
          <div className='px-4 py-4 md:flex md:w-1/3 md:items-center'>
            <div className='md:flex'>
              <button
                type='submit'
                className='px-4 py-2 font-bold text-gray-700 bg-blue-300 rounded shadow dark:bg-blue-600 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-400 focus:shadow-outline hover:shadow-xl focus:outline-none disabled:bg-gray-500'
                disabled={formik.isSubmitting}
              >
                Send
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
