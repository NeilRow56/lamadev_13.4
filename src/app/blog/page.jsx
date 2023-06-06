import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div>
      <h1 className='ml-4 py-4 text-3xl font-bold capitalize text-[#53c28b]'>
        Blog
      </h1>
      <div className='container mb-4'>
        {data.map(item => (
          <div key={item.id} className=' grid grid-cols-3 gap-4'>
            <Link href='/blog/id'>
              <div className='relative col-span-1 h-40 '>
                <Image
                  src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
                  alt='Hero image'
                  fill={true}
                  className=' mx-auto object-cover '
                />
              </div>
              <div className=' mb-6 flex w-full flex-col'>
                <h1 className='text-red-500'>Lot number: {item.id}</h1>
                <p className='font-bold'>{item.title}</p>
              </div>
            </Link>
            <div className='  col-span-2 h-40 p-8'>
              <h1 className='py-2 text-2xl font-bold'>{item.title}</h1>
              <p className=''>{item.body}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
