import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1 className='ml-4 py-4 text-3xl font-bold capitalize text-[#53c28b]'>
        Blog
      </h1>
      <div className='container mb-4'>
        <div className=' grid grid-cols-3 gap-4'>
          <Link href='/blog/id'>
            <div className='relative col-span-1 h-40 '>
              <Image
                src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
                alt='Hero image'
                fill={true}
                className=' mx-auto object-cover '
              />
            </div>
            <div className=' flex w-full flex-col'>
              <h1 className='text-red-500'>Test</h1>
              <p>Description</p>
            </div>
          </Link>
          <div className='  col-span-2 h-40 p-8'>
            <h1 className='py-2 text-2xl font-bold'>Heading for blog</h1>
            <p>Pictue and related text for blog.</p>
          </div>
        </div>
        <div className=' grid grid-cols-3 gap-4'>
          <Link href='/'>
            <div className='relative col-span-1 h-40 '>
              <Image
                src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
                alt='Hero image'
                fill={true}
                className=' mx-auto object-cover '
              />
            </div>
            <div className=' flex w-full flex-col'>
              <h1 className='text-red-500'>Test</h1>
              <p>Description</p>
            </div>
          </Link>
          <div className='  col-span-2 h-40 p-8'>
            <h1 className='py-2 text-2xl font-bold'>Heading for blog</h1>
            <p>Pictue and related text for blog.</p>
          </div>
        </div>
        <div className=' grid grid-cols-3 gap-4'>
          <Link href='/'>
            <div className='relative col-span-1 h-40 '>
              <Image
                src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
                alt='Hero image'
                fill={true}
                className=' mx-auto object-cover '
              />
            </div>
            <div className=' flex w-full flex-col'>
              <h1 className='text-red-500'>Test</h1>
              <p>Description</p>
            </div>
          </Link>
          <div className='  col-span-2 h-40 p-8'>
            <h1 className='py-2 text-2xl font-bold'>Heading for blog</h1>
            <p>Pictue and related text for blog.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
