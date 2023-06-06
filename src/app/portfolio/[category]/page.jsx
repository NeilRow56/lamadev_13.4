import Button from '@/components/button/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'
import { items } from './data.js'
import { notFound } from 'next/navigation'

const getData = cat => {
  const data = items[cat]

  if (data) {
    return data
  }

  if (!data) {
    return notFound
  }
}

const Category = ({ params }) => {
  // We use params.category because folder name is [category]
  const data = getData(params.category)
  return (
    <div>
      <h1 className='ml-4 font-bold capitalize text-[#53c28b]'>
        {params.category}
      </h1>
      {data.map(item => (
        <div key={item.id} className='container mb-4'>
          <div className=' grid grid-cols-2 gap-4'>
            <div className='  p-24'>
              <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
                {item.title}
              </h1>
              <p className='pb-24'>{item.dec}</p>
              <Button url='/' text='See More' />
            </div>
            <div className='relative  '>
              <Image
                src={item.image}
                alt='Hero image'
                fill={true}
                className=' mx-auto object-cover '
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
