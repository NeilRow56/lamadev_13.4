import Button from '@/components/button/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='container '>
      <div className='relative mt-4 w-full rounded-md border-2 border-red-600 text-center '>
        <h1 className=' bg-[#53c28b] px-3 py-1 text-5xl font-bold text-white'>
          Contact Us
        </h1>
      </div>
      <div className='mb-4 grid min-h-[600px] grid-cols-2 gap-4'>
        <div className='relative mt-4 rounded-md border-2 border-red-600 p-24'>
          <Image
            src='/contact.png'
            alt='Contact image'
            fill={true}
            className=' mx-auto object-contain '
          />
        </div>
        <div className='mt-4 rounded-md border-2 border-red-600 p-12'>
          <form className='rounded-md bg-white p-2'>
            <div class='mb-6'>
              <label
                for='email'
                class='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                class='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='name@flowbite.com'
                required
              ></input>
            </div>
            <div class='mb-6'>
              <label
                for='password'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Your password
              </label>
              <input
                type='password'
                id='password'
                className='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                required
              ></input>
            </div>
            <div className='mb-6'>
              <label
                for='email'
                class='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Query
              </label>
              <textarea
                type='text'
                id='query_deatails'
                class='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Query Details'
                required
              ></textarea>
            </div>
            <div className='mb-6 flex items-start'>
              <div className='flex h-5 items-center'>
                <input
                  id='terms'
                  type='checkbox'
                  value=''
                  className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                  required
                ></input>
              </div>
              <label
                for='terms'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                I agree with the{' '}
                <a
                  href='#'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <Button url='/portfolio' text='Send' className='m-2'></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
