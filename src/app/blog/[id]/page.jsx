import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)

  return (
    <div className='container '>
      <div className='grid grid-cols-2'>
        <div className=' relative h-[300px] w-[500px] p-8'>
          <Image
            src={data.img}
            alt=''
            fill={true}
            className=' mx-auto object-contain '
          />
        </div>
        <div className='mt-4 p-24'>
          <p className='pb-24'>{data.content}</p>
        </div>
      </div>
      <div className='flex h-24 w-full flex-row items-center p-2'>
        <h4 className='p-2'>{data.username}</h4>
        <div className='relative h-[30px] w-[30px]  p-8'>
          <Image
            src={data.img}
            alt='Hero image'
            fill={true}
            className=' mx-auto rounded-full object-cover'
          />
        </div>
      </div>

      <div className='mt-4 px-4'>
        <p>{data.desc}</p>
      </div>
    </div>
  )
}

export default BlogPost
